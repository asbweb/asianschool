import { SITE_NAME, SITE_FAVICON, SITE_DESCRIPTION,  imgblurDataURL, HOME_OG_IMAGE_URL } from "../../lib/constants";
import React, { useState } from "react";
import Head from "next/head";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Accordion from "react-bootstrap/Accordion";
import ActivitiesItem from "@activities/activities";
import IntraScoolCompetionCard from "components/#test/intra-scool-competition-card";
import InterScoolCompetionCard from "@activities/inter-scool-competition-card";
import ActivitiesSportsAccordian from "components/#test/activities-sports-accordian";
import ActivitiesList from "@data/activities/activities.json";
import SportsList from "@data/activities/sports.json";
import IntraSchoolCompetionList from "@data/activities/intra-school-competition.json";
import InterSchoolCompetionList from "@data/activities/inter-school-competition.json";

export default function Activities() {
  const [activeEventKey, setActiveEventKey] = useState(0);
  return (
    <>
      <Head>
        {/* <title>{ SITE_NAME } | Activities </title> */}
        <title> The Asian School Bahrain |  Activities </title>
        <meta name="description" content={SITE_DESCRIPTION} />
        <link rel="icon" href={SITE_FAVICON} />
      </Head>
      
      <main>
        <h2 className="page-title">Activities</h2>
        <section className="my-5">
          <Container>
            <h4> SPORTS</h4>
            <p>
              Sports is an integral part of a students&apos; education. At The
              Asian School we believe in that deeply and so have provided for
              multiple sports facilities. Apart from these marked areas, there
              are plenty of other open spaces where students perform exercise
              drills and can engage in any other sport or miscellaneous activity
              in which they are interested.
            </p>
          </Container>
          <Accordion
            activeeventkey={activeEventKey}
            onToggle={setActiveEventKey}
            alwaysOpen
          >
            {SportsList.map((a, index) => (
              <ActivitiesSportsAccordian
                key={index}
                weight={a.weight}
                title={a.title}
                text={a.text}
                images={a.images}
              />
            ))}
          </Accordion>
        </section>

        {ActivitiesList.map((a, index) => (
          <ActivitiesItem
            key={index}
            bg={a.bg}
            order={a.order}
            title={a.title}
            text={a.text}
            images={a.images}
          />
        ))}

        <section className="my-5 py-5 bg-light">
          <Container>
            <Col className="my-5">
              <h4>COMPETITIONS</h4>
            </Col>

            <Tabs
              defaultActiveKey="intra-school-competions"
              id="uncontrolled-tab-example"
              className="mx-auto"
              justify
            >
              <Tab
                eventKey="intra-school-competions"
                title="intra school competions"
                className="homemenu" 
              >
                <Row className="bg-asb-accent py-5 mx-0">
                  {IntraSchoolCompetionList.map((a, index) => (
                    <IntraScoolCompetionCard
                      key={index}
                      title={a.title}
                      text={a.text}
                      img={a.img}
                    />
                  ))}
                </Row>
              </Tab>

              <Tab
                eventKey="inter-school-competions"
                title="inter school competions"
                className="homemenu"
              >
                <Row className="bg-asb-accent py-5  mx-0">
                  {InterSchoolCompetionList.map((a, index) => (
                    <InterScoolCompetionCard
                      key={index}
                      title={a.title}
                      text={a.text}
                      img={a.img}
                    />
                  ))}
                </Row>
              </Tab>
            </Tabs>
          </Container>
        </section>
      </main>
    </>
  );
}
