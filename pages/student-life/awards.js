import React from "react";
import Head from "next/head";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Awards() {
  return (
    <>
      <Head>
        <title>Asian Scool Bharain</title>
        <meta name="description" content="Asian Scool Bharain" />
        <link rel="icon" href="/images/asbfavicon.png" />
      </Head>
      <main>
        <h2 className="page-title">Awards</h2>
        <section className="my-5">
          <Container>
            <h5> PRINCIPAL’S HONOR LIST</h5>

            <p>
              To be enlisted in the Principal’s Honor list a student should
              perform outstandingly and achieve an aggregate of ’10’ grade
              points.
            </p>

            <ul>
              <li>
                The Honor student should also have a clear disciplinary record
                and should have displayed superior behavioral performance during
                the year.
              </li>
              <li>
                The highest scorers in the Grade 10 Board Examination achieving
                achieving A1 grade in all subjects will be awarded.
              </li>
            </ul>

            <h5> SPORTS </h5>
            <p>
              The individual Championship Trophy will be awarded to the student
              scoring the highest points in each group.
            </p>

            <h5> CULTURAL </h5>
            <p>
              The titles ‘KALASHIROMANI – Senior’ (for girls from Grades 8 to
              12) and ‘KALASHIROMANI – Junior’ (for girls from Grades 5 to 7)
              and ‘KALAPRAVEEN – Senior’ (for boys from Grades 8 to 12) and
              ‘KALAPRAVEEN – Junior’ (for boys from Grades 5 to 7) will be
              conferred on the highest point scorers in the various cultural
              competitions provided they meet the following criteria.
            </p>
            <ol>
              <li>
                He/She should participate in 8 out of 11 events (Seniors) or 7
                out of 10 events (Juniors).
              </li>
              <li>Win at least two first prizes in individual events.</li>
              <li>Obtain 70% marks in one of the team events.</li>
              <li>Participate in at least one group event.</li>
              <li>
                The girl and boy who satisfy all of the above criteria and
                obtain the highest cumulative points will be declared the
                Kalashiromani and Kalapraveen respectively for both the Junior
                and Senior sections.
              </li>
            </ol>

            <h5> ALI HUSSAIN YATEEM ANNUAL AWARDS </h5>
            <p>
              These awards are given to one girl and one boy who are top
              performers in the annual Talent Fest competition. A cash prize
              amounting to $500 is given to each of the two students.
            </p>
          </Container>
        </section>
      </main>
    </>
  );
}
