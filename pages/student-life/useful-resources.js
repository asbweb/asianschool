import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import UsefulResourcesList from "../../data/useful-resources.json";

export default function UsefulResources() {
  return (
    <>
      <Head>
        <title>Asian Scool Bharain</title>
        <meta name="description" content="Asian Scool Bharain" />
        <link rel="icon" href="/images/asbfavicon.png" />
      </Head>
      <main>
        <h2 className="page-title">Useful Resources</h2>

        <section className="my-5">
          <Container>
            <Row>
              {UsefulResourcesList.career.map((resource, index) => (
                <Col lg={6} md={6} key={index}>
                  <Link href={resource.URL}>
                    <a
                      className="resource-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Card className="text-center border-0 my-5">
                        <div className="text-center">
                          <Image
                            src={resource.image}
                            alt={resource.title}
                            width={150}
                            height={150}
                          />
                        </div>
                        <Card.Body>
                          <Card.Title className="mb-3">
                            <h5 className="resource-title">
                              <strong>{resource.title}</strong>
                            </h5>
                          </Card.Title>
                        </Card.Body>
                      </Card>
                    </a>
                  </Link>
                </Col>
              ))}
            </Row>
            <Row>
              {UsefulResourcesList.resources.map((resource, index) => (
                <Col lg={3} md={6} key={index}>
                  <Link href={resource.URL}>
                    <a
                      className="resource-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Card className="text-center border-0 my-5">
                        <div className="text-center">
                          <Image
                            src={resource.image}
                            alt={resource.title}
                            width={150}
                            height={150}
                          />
                        </div>
                        <Card.Body>
                          <Card.Title className="mb-3">
                            <h5 className="resource-title">
                              <strong>{resource.title}</strong>
                            </h5>
                          </Card.Title>
                        </Card.Body>
                      </Card>
                    </a>
                  </Link>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      </main>
    </>
  );
}
