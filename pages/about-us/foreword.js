import {
  SITE_NAME,
  SITE_FAVICON,
  SITE_DESCRIPTION,
  imgblurDataURL,
  HOME_OG_IMAGE_URL,
} from "../../lib/constants";
import React from "react";
import Head from "next/head";
import Image from "next/future/image";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function Foreword() {
  return (
    <>
      <Head>
        {/* <title>{ SITE_NAME } | Management </title> */}
        <title> Asian Scool Bahrain | Management </title>
        <meta name="description" content={SITE_DESCRIPTION} />
        <link rel="icon" href={SITE_FAVICON} />
      </Head>

      <main>
        <h2 className="page-title">FOREWORD BY THE PRINCIPAL</h2>
        <section className="my-5">
          <Container>
            <Row className="my-5 bg-asb-accent py-5 p-md-5">
              <Col md={4} className="mx-auto">
                <Image
                  className="img-fluid mb-3"
                  src="/images/profile/molly-treasa-mammen.jpg"
                  alt="test"
                  width={360}
                  height={240}
                />
              </Col>
              <Col md={8} className="mx-auto">
                <blockquote className="blockquote">
                  <h6 className="lead">
                    The greatest gifts you can give your children are the roots
                    of responsibility and the wings of independence.
                  </h6>
                </blockquote>
                <figcaption className="blockquote-footer text-end mb-5">
                  <cite title="Source Title">Dennis Waitley</cite>
                </figcaption>
                <p>
                  With great pride, I invite one and all to surf The Asian
                  School website set up so that you obtain a gainful insight
                  into the goings on at the school. The value based structure
                  and organized education aims at developing a sound character
                  in the student with a keen sense of fairness, caring and
                  integrity. What more? A complement of highly qualified and
                  experienced staff strives to enhance the learning environment.
                </p>
                <p>
                  Children do not care how much you know until they know how
                  much you care. The best possible learning environment is
                  provided to them. Every activity aims at drawing out the best
                  in the child. The plethora of activities laid out to mould
                  students to perfection will speak volumes for our effort.
                </p>
                <p>
                  On the playgrounds of The Asian School where all forms of
                  sports activities take place, children learn to accept defeat
                  and celebrate victory. Sportsmanship develops tolerance and
                  co-operation to live harmoniously as a citizen. Thus we
                  empower all students to succeed in their world. Come browse
                  through our website for a clear understanding of life at The
                  Asian School.
                </p>
                <h5>Mrs. Molly Mammen</h5>
                <h6>Principal</h6>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </>
  );
}

// export async function getStaticProps() {
//   const result = await fetch(
//     `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master`,

//     {
//       method: "POST",
//       headers: {
//         Authorization: `Bearer ${process.env.CONTENTFUL_DELIVERY_TOKEN}`,
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         query: `
//         query {
//           atTheHelmCollection(order: weight_ASC, limit: 10) {
//             items {
//               sys {
//                 id
//               }
//               weight
//               name
//               role
//               profilePicture {
//                 url
//                 title
//                 description
//               }
//               description {
//                 json
//                 links {
//                   assets {
//                     block {
//                       sys {
//                         id
//                       }
//                       url
//                       description
//                     }
//                   }
//                 }
//               }
//             }
//           }
//         }`,
//       }),
//     }
//   );

//   if (!result.ok) {
//     console.error(result);
//     return {};
//   }

//   const { data } = await result.json();
//   const atTheHelmItems = data.atTheHelmCollection.items;

//   return {
//     props: {
//       atTheHelmItems,
//     },
//     revalidate: 60,
//   };
// }
