import {
  SITE_NAME,
  SITE_FAVICON,
  SITE_DESCRIPTION,
  imgblurDataURL,
  HOME_OG_IMAGE_URL,
} from "../../lib/constants";
import React from "react";
import Head from "next/head";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import TopManagement from "@staff/top-management";

export default function Management({ atTheHelmItems }) {
  return (
    <>
      <Head>
        <title> The Asian School Bahrain | Management </title>
        <meta name="description" content={SITE_DESCRIPTION} />
        <link rel="icon" href={SITE_FAVICON} />
      </Head>

      <main>
        <h2 className="page-title">Management</h2>
        <section className="my-5">
          <Container>
            <Col className="mx-auto">
              {atTheHelmItems.map((a) => (
                <TopManagement
                  key={a.sys.id}
                  profilePicture={a.profilePicture.url}
                  role={a.role}
                  name={a.name}
                  description={a.description}
                />
              ))} 
            </Col>
          </Container>
        </section>
      </main>
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
          atTheHelmCollection(order: weight_ASC, limit: 1) {
            items {
              sys {
                id
              }
              weight
              name
              role
              profilePicture {
                url
                title
                description
              }
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
  const atTheHelmItems = data.atTheHelmCollection.items;

  return {
    props: {
      atTheHelmItems,
    },
    revalidate: 60,
  };
}
