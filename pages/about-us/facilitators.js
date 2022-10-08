import { SITE_NAME, SITE_FAVICON, SITE_DESCRIPTION,  imgblurDataURL, HOME_OG_IMAGE_URL } from "../../lib/constants";
import React, { useState } from "react";
import Head from "next/head";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";
import StaffList from "../../components/staff/staff-list";
import FacilitatorsItem from "../../components/staff/facilitators";
import SecondaryList from "../../data/secondary.json";
import PrimaryList from "../../data/primary.json";
import KindergartenList from "../../data/kindergarten.json";
import SupportStaffList from "../../data/support-staff.json";
import { Icon } from "@iconify/react";

function CustomToggle({ children, eventKey }) {
  const [isActive, setIsActive] = useState(false);
  const handleClick = useAccordionButton(eventKey, () =>
    setIsActive(!isActive)
  );

  return (
    <Container>
      <Col md={10} className="mx-auto">
        <button
          className="rounded-0 d-flex"
          type="button"
          style={{ backgroundColor: "var(--asb-accent)", border: "none" }}
          onClick={handleClick}
        >
          <Icon
            icon="bi:chevron-down"
            style={{
              transform: isActive ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.5s ease-in-out",
            }}
            className="me-3 my-auto"
            width={25}
          />
          <h5 className="text-uppercase fw-bold mb-0">{children}</h5>
        </button>
      </Col>
    </Container>
  );
}

export default function Facilitators({
  facilitatorsCollectionItem,
  adminStaffCollectionItem,
  columns,
  data,
}) {
  return (
    <>
      <Head>
        <title>{ SITE_NAME } </title>
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
          <Accordion defaultActiveKey="0">
            <Card className="rounded-0">
              <Card.Header className="bg-asb-accent text-uppercase">
                <CustomToggle eventKey="0">
                  Secondary & Senior Secondary
                </CustomToggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <Col md={8} className="mx-auto">
                    <Table striped hover className="text-center">
                      <thead>
                        <tr className="bg-asb-main text-white">
                          <th>Name</th>
                          <th>Qualification</th>
                        </tr>
                      </thead>
                      <tbody>
                        {SecondaryList.map((a, index) => (
                          <StaffList
                            key={index}
                            name={a.name}
                            qualification={a.qualification}
                          />
                        ))}
                      </tbody>
                    </Table>
                  </Col>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="rounded-0">
              <Card.Header className="bg-asb-accent rounded-0">
                <CustomToggle eventKey="1">Primary</CustomToggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <Col md={8} className="mx-auto">
                    <Table striped hover className="text-center">
                      <thead>
                        <tr className="bg-asb-main text-white">
                          <th>Name</th>
                          <th>Qualification</th>
                        </tr>
                      </thead>
                      <tbody>
                        {PrimaryList.map((a, index) => (
                          <StaffList
                            key={index}
                            name={a.name}
                            qualification={a.qualification}
                          />
                        ))}
                      </tbody>
                    </Table>
                  </Col>
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card className="rounded-0">
              <Card.Header className="bg-asb-accent rounded-0 ">
                <CustomToggle eventKey="2">Kindergarten</CustomToggle>
              </Card.Header>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  <Col md={8} className="mx-auto">
                    <Table striped hover className="text-center">
                      <thead>
                        <tr className="bg-asb-main text-white">
                          <th>Name</th>
                          <th>Qualification</th>
                        </tr>
                      </thead>
                      <tbody>
                        {KindergartenList.map((a, index) => (
                          <StaffList
                            key={index}
                            name={a.name}
                            qualification={a.qualification}
                          />
                        ))}
                      </tbody>
                    </Table>
                  </Col>
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card className="rounded-0">
              <Card.Header className="bg-asb-accent rounded-0">
                <CustomToggle eventKey="3">Support Staff</CustomToggle>
              </Card.Header>
              <Accordion.Collapse eventKey="3">
                <Card.Body>
                  <Col md={8} className="mx-auto">
                    <Table striped hover className="text-center">
                      <thead>
                        <tr className="bg-asb-main text-white">
                          <th>Name</th>
                          <th> </th>
                        </tr>
                      </thead>
                      <tbody>
                        {SupportStaffList.map((a, index) => (
                          <StaffList key={index} name={a.name} />
                        ))}
                      </tbody>
                    </Table>
                  </Col>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
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
        query: `
        {
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

  return {
    props: {
      facilitatorsCollectionItem,
      adminStaffCollectionItem,
    },
  };
}
