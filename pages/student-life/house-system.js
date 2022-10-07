import React from "react";
import Head from "next/head";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function HouseAndPrefectorialSystem() {
  return (
    <>
      <Head>
        <title>Asian Scool Bharain</title>
        <meta name="description" content="Asian Scool Bharain" />
        <link rel="icon" href="/images/asbfavicon.png" />
      </Head>

      <main>
        <h2 className="page-title">House and prefectorial System</h2>
        <section className="my-5">
          <Container>
            <p>
              Each student of the school is a member of one of the four Houses,
              i.e. Sapphire, Ruby, Emerald and Topaz. The House system is an
              integral part of the functioning of the school and leads to the
              building up of camaraderie of a lasting nature among students.
            </p>
            <p>
              The Houses vie for 2 rolling trophies, the Sports Championship
              Trophy and the Discipline Trophy. The Sports Championship Trophy
              goes to the house with the highest overall points for all the
              sports competitions.
            </p>
            <p>
              The four houses are given charge of one of four aspects i.e
              Cleanliness, Discipline, Uniform and Education, that they need to
              monitor and manage every month for the whole school. Points are
              awarded based on performance and at the end of the year, the House
              with the most points earns the coveted Discipline Trophy.
            </p>
            <p>
              The prefectorial system helps the students to develop a sense of
              responsibility towards their juniors. The initiative and
              capabilities of individual students are continuously watched and
              those with inherent or cultivated leadership qualities are
              selected to the Prefects’ Council. The Prefects assist the
              Principal and staff in maintaining discipline and are also a
              channel for communication between the staff and the students. The
              Head Boy and the Head Girl with their active team of House
              Captains and prefects help in maintaining discipline in the
              school.
            </p>
            <p className="pb-5">
              A grand Investiture Ceremony is held where the student council is
              formally invested.
            </p>
            <div className="text-center mt-5">
              <Image
                className="img-fluid p-0"
                src="/images/academics/HouseAndPrefectorialSystem.jpg"
                alt="House And Prefectorial System"
                width={1280}
                height={800}
              />
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}
