import {
  SITE_NAME,
  SITE_FAVICON,
  SITE_DESCRIPTION,
  imgblurDataURL,
  HOME_OG_IMAGE_URL,
} from "../../lib/constants";
import React, { useState } from "react";
import Head from "next/head";
import Container from "react-bootstrap/Container";
import Accordion from "react-bootstrap/Accordion";
import CurriculumAcademicterms from "@curriculum/curriculum-academicterms";
import CurriculumItemsAccordian from "@curriculum/curriculum-items-accordian";
import CurriculumAssessmentAccordian from "@curriculum/curriculum-assessment-accordian";
import PromotionCriteria from "@curriculum/promotion-criteria";
import CoScholasticAssessment from "@curriculum/co-scholastic-assessment ";

export default function Curriculum({
  curriculumItems,
  curriculumAssementCollection,
}) {
  const [activeEventKey, setActiveEventKey] = useState(0);
  return (
    <>
      <Head>
        {/* <title>{SITE_NAME} | Curriculum </title> */}
        <title> The Asian School Bahrain | Curriculum </title>
        <meta name="description" content={SITE_DESCRIPTION} />
        <link rel="icon" href={SITE_FAVICON} />
      </Head>

      <main>
        <h2 className="page-title">Curriculum</h2>
        <section className="my-5">
          <Container>
            <CurriculumAcademicterms />
          </Container>
        </section>

        <section className="py-5">
          <Accordion
            activeeventkey={activeEventKey}
            onToggle={setActiveEventKey}
            alwaysOpen
          >
            {curriculumItems.map((a, index) => (
              <CurriculumItemsAccordian
                key={index}
                weight={a.weight}
                title={a.title}
                description={a.description}
                syllabus={a.syllabus.url}
              />
            ))}
          </Accordion>
        </section>

        <section className="py-5 bg-asb-accent">
          <Container className="my-5">
            <h3 className="fw-bold mb-3">Evalution Criteria</h3>
            <h4 className="fw-bold">Scholastic Assessment</h4>
          </Container>
          <Accordion
            activeeventkey={activeEventKey}
            onToggle={setActiveEventKey}
            alwaysOpen
          >
            {curriculumAssementCollection.map((a, index) => (
              <CurriculumAssessmentAccordian
                key={index}
                weight={a.weight}
                title={a.title}
                url={a.url.url}
              />
            ))}
          </Accordion>

          <Container className="mt-5">
            <CoScholasticAssessment />
          </Container>
        </section>

        <section className="py-5">
          <Container>
            <PromotionCriteria />
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
        query: `
        query {
          curriculumCollection(order: weight_ASC, limit: 5) {
            items {
              sys {
                id
              }
              weight
              title
              syllabus{
                url
              }
              description {
                json
                links {
                  assets {
                    block {
                      sys {
                        id
                      }
                      url
                      description
                    }
                  }
                }
              }
            }
          }
        
          curriculumAssementCollection(order: weight_ASC) {
            items {
              weight
              url {
                url
                title
              }
              title
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
  const curriculumItems = data.curriculumCollection.items;
  const curriculumAssementCollection = data.curriculumAssementCollection.items;

  return {
    props: {
      curriculumItems,
      curriculumAssementCollection,
    },
    revalidate: 60,
  };
}
