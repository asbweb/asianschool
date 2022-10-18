import { SITE_NAME, SITE_FAVICON, SITE_DESCRIPTION,  imgblurDataURL, HOME_OG_IMAGE_URL } from "../../lib/constants";
import React, { useState } from "react";
import Head from "next/head";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import FacilitiesItem from "../../components/facilities/facilities-item";
import FacilitiesAccordian from "../../components/facilities/facilities-accordian";
import Classroomlist from "../../data/classrooms.json";
import Librarylist from "../../data/library.json";
import Labslist from "../../data/labs.json";
import Hallslist from "../../data/halls.json";
import WellbeingList from "../../data/well-being.json";

export default function Facilities() {
  const [activeEventKey, setActiveEventKey] = useState(0);

  return (
    <>
      <Head>
        <title>{ SITE_NAME } | Facilities </title>
        <meta name="description" content={SITE_DESCRIPTION} />
        <link rel="icon" href={SITE_FAVICON} />
      </Head>

      <main>
        <h2 className="page-title">Facilities</h2>

        <section className="my-5">
          {Classroomlist.map((a, index) => (
            <FacilitiesItem
              key={index}
              order={a.order}
              title={a.title}
              text={a.text}
              images={a.images}
            />
          ))}
        </section>

        <section className="my-5 py-5 bg-light">
          <h4 className="page-title">LABORATORIES</h4>
          {Labslist.map((a, index) => (
            <FacilitiesItem
              key={index}
              order={a.order}
              title={a.title}
              text={a.text}
              images={a.images}
            />
          ))}
        </section>

        <section className="my-5 py-5">
          {Librarylist.map((a, index) => (
            <FacilitiesItem
              key={index}
              order={a.order}
              title={a.title}
              text={a.text}
              images={a.images}
            />
          ))}
        </section>

        <section className="my-5 py-5  bg-light">
          <h4 className="page-title">AUDITORIUMS AND HALLS</h4>
          {Hallslist.map((a, index) => (
            <FacilitiesItem
              key={index}
              order={a.order}
              title={a.title}
              text={a.text}
              images={a.images}
            />
          ))}
        </section>

        <section className="my-5 py-5">
          <Container>
            <Col className="my-5">
              <h4>WELL BEING</h4>
              <p>
                In addition to all the facilities that help develop the
                scholastic and co-scholastic abilities of students, the school
                also prioritises providing a comfortable and healthy environment
                conducive to learning.
              </p>
            </Col>
          </Container>
          <Accordion
            activeeventkey={activeEventKey}
            onToggle={setActiveEventKey}
          >
            {WellbeingList.map((a, index) => (
              <FacilitiesAccordian
                key={index}
                weight={a.weight}
                eventKey={a.eventKey}
                title={a.title}
                text={a.text}
                images={a.images}
              />
            ))}
          </Accordion>
        </section>
      </main>
    </>
  );
}
