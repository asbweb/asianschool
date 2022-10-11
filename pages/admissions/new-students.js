import React, { useState } from "react";
import { SITE_NAME, SITE_FAVICON, SITE_DESCRIPTION, imgblurDataURL, HOME_OG_IMAGE_URL } from "../../lib/constants";
import Head from "next/head"; 
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card"; 
import Col from "react-bootstrap/Col"; 
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import { Icon } from "@iconify/react";
import NewStudentRulesAndRecommendations from "../../components/new-students/new-student-rules-and-recommendations";
import NewStudentTransport from "../../components/new-students/new-student-transport";
import NewStudentUniform from "../../components/new-students/new-student-uniform";

function CustomToggle({ children, eventKey }) {
  
  const [isActive, setIsActive] = useState(false);
  const handleClick = useAccordionButton(eventKey, () =>
    setIsActive(!isActive)
  );

  return (
    <Container>
      <Col className="mx-auto">
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

export default function NewStudents() {
  const [activeEventKey, setActiveEventKey] = useState(0);
  return (
    <div>
      <Head>
        <title>{SITE_NAME} | New Students </title>
        <meta name="description" content={SITE_DESCRIPTION} />
        <link rel="icon" href={SITE_FAVICON} />
      </Head>

      <main>
        <h2 className="page-title">New Students</h2>
        <section className="my-5"> 
            <Accordion
              activeeventkey={activeEventKey}
              onToggle={setActiveEventKey}
            >
              <Card className="rounded-0">
                <Card.Header className="bg-asb-accent text-uppercase">
                  <CustomToggle eventKey="0">Uniform</CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                  <Container>
                    <NewStudentUniform />
                    </Container>  
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card className="rounded-0">
                <Card.Header className="bg-asb-accent text-uppercase">
                  <CustomToggle eventKey="1">Transport</CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                  <Container>
                    <NewStudentTransport />
                    </Container>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card className="rounded-0">
                <Card.Header className="bg-asb-accent text-uppercase">
                  <CustomToggle eventKey="2">
                    Rules And Recommendations
                  </CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                  <Container>
                    <NewStudentRulesAndRecommendations />
                    </Container>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion> 
        </section>
      </main>
    </div>
  );
}
