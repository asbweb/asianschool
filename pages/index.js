import {
  SITE_NAME,
  SITE_FAVICON,
  SITE_DESCRIPTION,
  imgblurDataURL,
  HOME_OG_IMAGE_URL,
} from "../lib/constants";
import Head from "next/head";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import HomeMenu from "@home-page/home-menu";
import HomeHero from "@home-page/home-hero";
import HomeAbout from "@home-page/home-about";
import Carousel from "react-bootstrap/Carousel";
import UpdatesHeader from "@layout/updates-header";

export default function Home({ homeSliderCollection, updatesHeaderCollection, contentCollection }) {
  return (
    <div>
      <Head>
        <title>{SITE_NAME}</title>
        <meta name="description" content={SITE_DESCRIPTION} />
        <link rel="icon" href={SITE_FAVICON} />
      </Head>
      {updatesHeaderCollection.map((a, index) => (
        <UpdatesHeader
          key={index}
          displayOrHide={a.displayOrHide}
          text={a.text}
          link={a.link}
          btnText={a.btnText}
        />
      ))}
      <main>
        <Container fluid className="gx-0">
          <Carousel fade indicators={false} interval={1500}>
            {homeSliderCollection.map((a, index) => (
              <Carousel.Item key={index}>
                <HomeHero
                  image={a.image.url}
                  title={a.title}
                  btntext={a.btntext}
                  link={a.link}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
        <h2 className="text-center text-uppercase my-5">
          Welcome to The ASIAN School, Bahrain
        </h2>

        <section className="my-5">
          <Container fluid>
            <Col md={8} className="mx-auto">
              <HomeMenu />
            </Col>
          </Container>
        </section>

        <section className="my-5 py-5">
          <Container>
            <Col md={10} className="mx-auto">
              {contentCollection.map((a, index) => (
                <HomeAbout
                  key={index}
                  title={a.title}
                  description={a.description}
                  btntext={a.btntext}
                  pdf={a.pdf}
                  btnIcon={a.btnIcon}
                  btnText={a.btnText}
                />
              ))}
            </Col>
          </Container>
        </section>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const result = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master`,

    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.CONTENTFUL_DELIVERY_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `query {
          homeSliderCollection {
            items {
              title
              btntext
              link
              image {
                url
                width
                height
              }
            }
          }
          updatesHeaderCollection {
            items {
              displayOrHide
              text
              link
              btnText
            }
          }
          contentCollection (limit: 1 where: {title: "About the School"} ) {
            items{
              sys{
                id
              }
              title
              btnText
              btnIcon
              pdf{
                url
              }
              image{
                url
              }
              description{
                json
              }
            }
          }
        }`,
      }),
    }
  );

  if (!result.ok) {
    console.error(result);
    return {};
  }

  const { data } = await result.json();
  const homeSliderCollection = data.homeSliderCollection.items;
  const updatesHeaderCollection = data.updatesHeaderCollection.items;
  const contentCollection = data.contentCollection.items;

  return {
    props: {
      homeSliderCollection,
      updatesHeaderCollection,
      contentCollection,
    },
    revalidate: 60,
  };
}
