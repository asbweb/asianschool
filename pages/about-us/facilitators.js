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
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"; 
import Accordion from "react-bootstrap/Accordion";
import FacilitatorsItem from "@staff/facilitators"; 
import TeachersListAccordian from "@staff/teachers-list-accordian";

export default function Facilitators({
  facilitatorsCollectionItem,
  adminStaffCollectionItem,
  teachersCollection,
}) {
  const [activeEventKey, setActiveEventKey] = useState(0);

  return (
    <>
      <Head>
        {/* <title>{SITE_NAME} | Facilitators </title> */}
        <title> Asian Scool Bahrain |  Facilitators </title>
        <meta name="description" content={SITE_DESCRIPTION} />
        <link rel="icon" href={SITE_FAVICON} />
      </Head>

      <main>
        <h2 className="page-title">Facilitators</h2>
        <section className="my-5">
          <Container>
            <Col md={10} className="mx-auto">
              <Row>
                <h4 className="text-center mb-1">Faculty</h4>
                {facilitatorsCollectionItem.map((a, index) => (
                  <FacilitatorsItem
                    key={index}
                    profilPicture={a.profilPicture.url}
                    role={a.role}
                    name={a.name}
                    qualification={a.qualification}
                  />
                ))}
              </Row>
              <Row>
                <h4 className="text-center my-5">Administrative Staff</h4>
                {adminStaffCollectionItem.map((a, index) => (
                  <FacilitatorsItem
                    key={index}
                    profilPicture={a.profilPicture.url}
                    role={a.role}
                    name={a.name}
                  />
                ))}
              </Row>
            </Col>
          </Container>
        </section>

        <section className="my-5">
          <h4 className="text-center my-5">TEACHERS</h4>

          <Accordion
            activeeventkey={activeEventKey}
            onToggle={setActiveEventKey}
          >
            {teachersCollection.map((a, index) => (
              <TeachersListAccordian
                key={index}
                weight={a.weight}
                title={a.title}
                tableHeaderName={a.tableHeaderName}
                tableHeaderQualification={a.tableHeaderQualification}
                teachersList={a.teachersList}
              />
            ))}
          </Accordion>
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
          facilitatorsCollection(order: weight_ASC) {
            items {
              sys {
                id
              }
              weight
              name
              role
              qualifications
              profilPicture {
                url
                title
                description
              }
            }
          }
          adminStaffCollection(order: weight_ASC) {
            items {
              sys {
                id
              }
              weight
              name
              role
              profilPicture {
                url
                title
                description
              }
            }
          }
          teachersCollection(order: weight_ASC) {
            items {
              title
              weight
              tableHeaderName
              tableHeaderQualification
              teachersList
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
  const facilitatorsCollectionItem = data.facilitatorsCollection.items;
  const adminStaffCollectionItem = data.adminStaffCollection.items;
  const teachersCollection = data.teachersCollection.items;

  return {
    props: {
      facilitatorsCollectionItem,
      adminStaffCollectionItem,
      teachersCollection,
    },
  };
}
