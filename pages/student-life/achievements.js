import React from "react";
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
        <title>Asian Scool Bharain</title>
        <meta name="description" content="Asian Scool Bharain" />
        <link rel="icon" href="/images/asbfavicon.png" />
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
