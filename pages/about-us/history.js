import React from "react";
import Head from "next/head";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import TimelineItem from "../../components/display-items/timeline-item";
import HistoryList from "../../data/history.json"; 

export default function History() {
  return (
    <>
      <Head>
        <title>Asian Scool Bharain</title>
        <meta name="description" content="Asian Scool Bharain" />
        <link rel="icon" href="/images/asbfavicon.png" />
      </Head>
      <main>
        <h2 className="page-title">History</h2>
        <section className="my-5 py-5">
          <Container>
            <Col md={10} className="mx-auto">
              <div className="timeline">
                {HistoryList.map((a, index) => (
                  <TimelineItem
                    key={index}
                    order={a.order}
                    text={a.text}
                    year={a.year}
                    // icon={a.icon}
                  />
                ))}
              </div>
            </Col>
          </Container>
        </section>
      </main>
    </>
  );
}
