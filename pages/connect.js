import {
  SITE_NAME,
  SITE_FAVICON,
  SITE_DESCRIPTION,
  imgblurDataURL,
  HOME_OG_IMAGE_URL,
} from "../lib/constants";
import React from "react";
import Head from "next/head";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RoundIconButton from "@buttons/round-icon-button";
import Contactdetails from "@data/footer.json";

export default function Connect() {
  return (
    <>
      <Head>
        <title> The Asian Scool Bahrain | Connect </title>
        <meta name="description" content={SITE_DESCRIPTION} />
        <link rel="icon" href={SITE_FAVICON} />
      </Head>
      <main>
        <h2 className="page-title">Connect</h2>

        <section>
          <Container>
            <h4 className="text-center mb-5">
            {Contactdetails.contacttext} 
            </h4>
            <Row className="my-5">
              <Col lg={6} md={12} className="order-2  order-lg-first">
                <iframe
                  src={Contactdetails.googlemap}
                  style={{ border: 0 }}
                  width="100%"
                  height="450"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </Col>
              <Col lg={6} md={12} className="mx-auto">
                <Row>
                  <Col md={6} sm={6} className="mb-3">
                    <p className="mb-0 text-center">
                      <strong className="text-decoration-underline">
                      {Contactdetails.schooladdress.title}
                      </strong>{" "}
                      <br />
                      {Contactdetails.schooladdress.add1} <br/>
                      {Contactdetails.schooladdress.add2} <br/>
                      {Contactdetails.schooladdress.add3} 
                    </p>
                  </Col>
                  <Col md={6} sm={6} className="mb-3">
                    <p className="mb-0 text-center">
                      <strong className="text-decoration-underline">
                      {Contactdetails.mailingaddress.title}
                      </strong>
                      <br />
                      {Contactdetails.mailingaddress.add1} <br/>
                      {Contactdetails.mailingaddress.add2} <br/>
                      {Contactdetails.mailingaddress.add3} 
                    </p>
                  </Col>
                </Row>

                <Row className="my-5">
                  <Col className="d-flex justify-content-center mb-lg-3">
                    <a
                      href={Contactdetails.phone1.link}
                      className="text-center"
                    >
                      <RoundIconButton
                        btnicon={Contactdetails.phone1.icon}
                        iconwidth={30}
                      >
                        {Contactdetails.phone1.text}
                      </RoundIconButton>
                    </a>
                  </Col>
                  <Col className="d-flex justify-content-center mb-lg-3">
                    <a href={Contactdetails.phone2.link}>
                      <RoundIconButton
                        btnicon={Contactdetails.phone2.icon}
                        iconwidth={30}
                      >
                        {Contactdetails.phone2.text}
                      </RoundIconButton>
                    </a>
                  </Col>
                </Row>

                <Row className="my-5">
                  <Col className="d-flex justify-content-center mb-lg-3 text-lowercase">
                    <a href={Contactdetails.email.link}>
                      <RoundIconButton
                        btnicon={Contactdetails.email.icon}
                        iconwidth={30}
                      >
                        <h4 className="round-button-text text-lowercase">
                          {Contactdetails.email.text}
                        </h4>
                      </RoundIconButton>
                    </a>
                  </Col>

                  <Col className="d-flex justify-content-center mb-lg-3">
                    <a href={Contactdetails.fax.link}>
                      <RoundIconButton
                        btnicon={Contactdetails.fax.icon}
                        iconwidth={30}
                      >
                        {Contactdetails.fax.text}
                      </RoundIconButton>
                    </a>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </>
  );
}
