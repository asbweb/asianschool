import { SITE_NAME, SITE_FAVICON, SITE_DESCRIPTION,  imgblurDataURL, HOME_OG_IMAGE_URL } from "../../lib/constants";
import React, { useState } from "react";
import Head from "next/head";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import ProfileHero from "../../components/profile/profile-hero";
import SchoolProfile from "../../components/profile/school-profile";
import SchoolCrestMotto from "../../components/profile/school-crest-motto";
import SchoolVision from "../../components/profile/school-vision";
import SchoolSong from "../../components/profile/school-song";
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
            className="me-3"
            width={25}
          />
          <h3 className="text-uppercase fw-bold mb-0">{children}</h3>
        </button>
      </Col>
    </Container>
  );
}

export default function Profile() {
  return (
    <>
      <Head>
        <title>{ SITE_NAME } </title>
        <meta name="description" content={SITE_DESCRIPTION} />
        <link rel="icon" href={SITE_FAVICON} />
      </Head>

      <h2 className="page-title">Profile</h2>
      <section className="my-5">
        <Container>
          <Col md={10} className="mx-auto">
            <ProfileHero />
            <SchoolProfile />
          </Col>
        </Container>
      </section>

      <section className="my-5">
        <Accordion defaultActiveKey="0">
          <Card className="rounded-0">
            <Card.Header className="bg-asb-accent text-uppercase">
              <CustomToggle eventKey="0">School Crest & Motto</CustomToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <SchoolCrestMotto />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="rounded-0">
            <Card.Header className="bg-asb-accent rounded-0">
              <CustomToggle eventKey="1">Vision & Mission</CustomToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <Container className="py-5">
                  <Col md={10} className="mx-auto">
                    <SchoolVision />
                  </Col>
                </Container>
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card className="rounded-0">
            <Card.Header className="bg-asb-accent rounded-0">
              <CustomToggle eventKey="2">School Song</CustomToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                <Container className="py-5">
                  <Col md={10} className="mx-auto">
                    <SchoolSong />
                  </Col>
                </Container>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </section>
    </>
  );
}
