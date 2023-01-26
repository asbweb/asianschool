import React, { useState } from "react";
import {
  SITE_NAME,
  SITE_FAVICON,
  SITE_DESCRIPTION,
  imgblurDataURL,
  HOME_OG_IMAGE_URL,
} from "../../lib/constants";
import Head from "next/head";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import NewStudentRulesAndRecommendations from "@new-students/new-student-rules-and-recommendations";
import NewStudentTransport from "@new-students/new-student-transport";
import NewStudentUniform from "@new-students/new-student-uniform";
import NewStudentSchoolTimings from "@new-students/new-student-school-timings";
import CustomToggle from "@buttons/custom-toggle"

export default function NewStudents() {
  const [activeEventKey, setActiveEventKey] = useState(0);
  return (
    <div>
      <Head>
        {/* <title>{SITE_NAME} | New Students </title> */}
        <title> The Asian School Bahrain |  New Students </title>
        <meta name="description" content={SITE_DESCRIPTION} />
        <link rel="icon" href={SITE_FAVICON} />
      </Head>

      <main>
        <h2 className="page-title">New Students</h2>
        <section className="my-5">
          <Accordion
            activeeventkey={activeEventKey}
            onToggle={setActiveEventKey}
            alwaysOpen
          >
            <Card className="rounded-0">
              <Card.Header className="bg-asb-accent text-uppercase">
                <CustomToggle eventKey="0">Uniform</CustomToggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <Container fluid="md">
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
                  <Container fluid="md">
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
                  <Container fluid="md">
                    <NewStudentRulesAndRecommendations />
                  </Container>
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card className="rounded-0">
              <Card.Header className="bg-asb-accent text-uppercase">
                <CustomToggle eventKey="3">School Timings</CustomToggle>
              </Card.Header>
              <Accordion.Collapse eventKey="3">
                <Card.Body>
                  <Container fluid="md">
                    <NewStudentSchoolTimings />
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
