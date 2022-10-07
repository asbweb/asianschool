import React, { useState } from "react";
import Head from "next/head";
import Image from "next/future/image";
import Link from "next/link";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import DateFormatter from "../../../components/display-items/date-formatter"; 
import RichTextImage from "../../../components/display-items/rich-text-image";
import SmallRoundIconButton from "../../../components/buttons/small-round-icon-button";
import EventsImageMosaic from "../../../components/events/events-image-mosaic";
import EventsImageLightbox from "../../../components/events/events-image-lightbox";

const customMarkdownOptions = (description) => ({
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => (
      <RichTextImage
        id={node.data.target.sys.id}
        assets={description.links.assets.block}
      />
    ),
  },
});

export default function EventPage({ event }) {
  const [isOpen, setOpen] = useState(false);
  const [currentImageIndex, setCurrentIndex] = useState(0);
  const images = event.imagesCollection.items; 
  return (
    <>
      <Head>
        <title>Asian Scool Bharain | {event.title} </title>
        <meta name="description" content={event.description} />
        <link rel="icon" href="/images/asbfavicon.png" />
      </Head>

      <main>
        <section className="my-5">
          <Link href="/student-life/events">
            <a className="float-end me-3">
              <SmallRoundIconButton btnicon="material-symbols:arrow-back">
                Back
              </SmallRoundIconButton>
            </a>
          </Link>
          <Container>
            <Row>
              <h4 className="text-center"> {event.title} </h4>
              <div className="text-center">
                <DateFormatter dateString={event.date} />
              </div>

              <div className="text-center mt-2">
                <Image
                  className="img-fluid w-auto h-auto"
                  src={event.featuredImage.url}
                  alt={event.title}
                  width={720}
                  height={480}
                />
                <p className="text-center text-asb-main mt-1">
                  {event.featuredImage.description}
                </p>
              </div>
              <div className="p-3">
                {documentToReactComponents(
                  event.description.json,
                  customMarkdownOptions(event.description)
                )}
              </div>

              <div className="my-5">
                <EventsImageMosaic
                  images={images}
                  handleClick={(e, { index }) => {
                    setCurrentIndex(index);
                    setOpen(true);
                  }}
                />

                <EventsImageLightbox
                  currentImageIndex={currentImageIndex}
                  setCurrentIndex={setCurrentIndex}
                  isOpen={isOpen}
                  onClose={() => setOpen(false)}
                  images={images.map((image) => ({
                    src: image.url,
                    title: image.title,
                    width: image.width, 
                    height: image.height,
                  }))}
                />
              </div> 
            </Row>
          </Container>
        </section>
      </main>
    </>
  );
}

export async function getStaticProps({ params }) {
  const { event } = params;

  const result = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.CONTENTFUL_DELIVERY_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          query GetEvent($slug: String!) {
            eventCollection(
              where: {
                slug: $slug
              },
              limit: 1
            ) {
              items {
                sys{
                  id
                }
                title
                slug 
                date
                excerpt
                description{
                  json
                  links{
                    assets{
                      block{
                        sys{
                          id
                        }
                        url
                        description
                      }
                    }
                  }
                }
                featuredImage {
                  url
                  title
                  description
                }
                imagesCollection {
                  items {
                    sys {
                      id
                    }
                    url
                    title
                    description
                    width
                    height
                  }
                }
              }
            }
          }`,
        variables: {
          slug: event,
        },
      }),
    }
  );

  if (!result.ok) {
    console.error(result);
    return {};
  }

  const { data } = await result.json();
  const [eventData] = data.eventCollection.items;

  return {
    props: { event: eventData },
  };
}

export async function getStaticPaths() {
  const result = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.CONTENTFUL_DELIVERY_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          query {
            eventCollection {
              items {
                slug
              }
            }
          }
        `,
      }),
    }
  );

  if (!result.ok) {
    console.error(result);
    return {};
  }

  const { data } = await result.json();
  const eventSlugs = data.eventCollection.items;

  const paths = eventSlugs.map(({ slug }) => {
    return {
      params: { event: slug },
    };
  });

  return {
    paths: paths,
    fallback: true,
  };
}
