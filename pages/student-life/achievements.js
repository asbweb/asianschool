import React from "react";
import { SITE_NAME, SITE_FAVICON, SITE_DESCRIPTION,  imgblurDataURL, HOME_OG_IMAGE_URL } from "../../lib/constants";
import Head from "next/head";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import StudentAchievers from "../../components/achievements/student-achievers";
import StudentAchieversList from "../../data/student-achievers.json";

export default function Achievements() {
  return (
    <>
      <Head>
        {/* <title>{ SITE_NAME } | Achievements </title> */}
        <title> Asian Scool Bahrain |  Achievements </title>
        <meta name="description" content={SITE_DESCRIPTION} />
        <link rel="icon" href={SITE_FAVICON} />
      </Head>
      
      <main>
        <h2 className="page-title">Achievements</h2>
        <section className="my-5">
          <Container>
            <Row>
              {StudentAchieversList.map((a, index) => (
                <StudentAchievers
                  key={index}
                  profilPicture={a.profilPicture}
                  name={a.name}
                  achievement={a.achievement}
                />
              ))}
            </Row>
          </Container>
        </section>
      </main>
    </>
  );
}
