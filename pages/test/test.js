import {
  SITE_NAME,
  SITE_FAVICON,
  SITE_DESCRIPTION,
  imgblurDataURL,
  HOME_OG_IMAGE_URL,
} from "../../lib/constants";
import Head from "next/head";
import RichTextBlockTest from "components/#test/rich-text-block-test";
import SchoolCrestMotto from "@profile/school-crest-motto";
import { Container } from "react-bootstrap";

export default function Profile({ contentCollection }) {
  return (
    <>
      <Head>
        {/* <title> The Asian School Bahrain | Profile </title> */}
        <title> The Asian School Bahrain | Profile </title>
        <meta name="description" content={SITE_DESCRIPTION} />
        <link rel="icon" href={SITE_FAVICON} />
      </Head>

      <h2 className="page-title">Profile</h2>

      <Container>
        <section>
          {contentCollection.map((a, index) => (
            <RichTextBlockTest key={index} description={a.description} />
          ))}
        </section>
      </Container>

      <div className="p-3" />
    </>
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
          contentCollection(where: { title: "Test" }) {
            items {
              title
              description {
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
  const contentCollection = data.contentCollection.items;

  return {
    props: {
      contentCollection,
    },
    revalidate: 60,
  };
}
