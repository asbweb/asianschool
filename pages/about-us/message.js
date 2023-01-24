import {
  SITE_NAME,
  SITE_FAVICON,
  SITE_DESCRIPTION,
  imgblurDataURL,
  HOME_OG_IMAGE_URL,
} from "../../lib/constants";
import React from "react";
import Head from "next/head";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function Message() {
  return (
    <>
      <Head>
        {/* <title>{ SITE_NAME } | Management </title> */}
        <title> Asian Scool Bahrain | Management </title>
        <meta name="description" content={SITE_DESCRIPTION} />
        <link rel="icon" href={SITE_FAVICON} />
      </Head>

      <main>
        <h2 className="page-title">Founder Chairman&apos;s Message</h2>
        <section className="my-5">
          <Container>
            <Row className="my-5 bg-asb-accent py-5 p-md-5">
              <Col md={4} className="mx-auto">
                <Image
                  className="img-fluid mb-3"
                  src="/images/profile/joseph-thomas.jpg"
                  alt="test"
                  width={360}
                  height={240}
                />
              </Col>
              <Col md={8} className="mx-auto">
                <p>
                  Today, in a world where society is increasingly fragmented and
                  polarized, The Asian School remains a community where honesty
                  and integrity matter, humour and hard work are equally
                  important values, and where the process of education is as
                  important as the grade of achievement. We provide a unique
                  educational experience for children from kindergarten to
                  high-school by devoting all of our efforts to our strong
                  mission, philosophy, and culture on a daily basis. As you will
                  realize from going through this website, our goal is to
                  provide our diverse student body with exceptional education,
                  instilling in young people a love of learning, the ability to
                  think independently, and the confidence to pursue their dreams
                  and goals. Our students, as twenty first century learners, are
                  constantly encouraged to become good global citizens with a
                  strong commitment to their fellow beings as well as their
                  environment. Central to our efforts to build a dynamic
                  community is our dedicated faculty. Intensely devoted to the
                  success of their students, our faculty strives to embrace
                  different roles such as those of teachers, coaches, advisors,
                  mentors and friends. In each aspect of school life, they
                  endeavour to challenge and inspire students to reach new
                  levels of enquiry and understanding. As you look through the
                  following pages, it is easy to envision your child in this
                  environment, where we emphasize the important qualities of
                  integrity, honesty, creativity, imagination, perseverance,
                  respect, and self-discipline. Plato said, “The direction in
                  which education starts a man will determine his future in
                  life.” It is a matter of great pride for me that The Asian
                  School students are empowered to connect with their
                  environment, to appreciate their heritage, to transform
                  themselves, and ultimately, the world.
                  </p>
                <h5>Mr. Joseph Thomas M.A., B.Ed.</h5>
                <h6>Founder Chairman</h6>
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
// revalidate: 60,
//   };
// }
