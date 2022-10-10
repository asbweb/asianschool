import { SITE_NAME, SITE_FAVICON, SITE_DESCRIPTION,  imgblurDataURL, HOME_OG_IMAGE_URL } from "../lib/constants";
import React from "react";
import Head from "next/head";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Icon } from "@iconify/react";
import RoundIconButton from "../components/buttons/round-icon-button";

export default function Connect() {
  return (
    <>
      <Head>
        <title>{ SITE_NAME } | Connect </title>
        <meta name="description" content={SITE_DESCRIPTION} />
        <link rel="icon" href={SITE_FAVICON} />
      </Head>
      <main>
        <h2 className="page-title">Connect</h2>

        <section>
          <Container>
            <h4 className="text-center mb-5">
              The Asian School is located in Tubli, off the arterial Shaikh Isa
              Bin Salman Highway.
            </h4>

            <Col md={6} className="mx-auto">
              <Row>
                <Col md={6} className="mb-3"> 
                    <p className="mb-0 text-center">
                      <strong className="text-decoration-underline">Physical Address</strong> <br />
                      263, Avenue 13 <br />
                      Block 701, Tubli, <br />
                      Kingdom of Bahrain
                    </p> 
                </Col>
                <Col md={6} className="mb-3"> 
                    <p className="mb-0 text-center">
                      <strong className="text-decoration-underline">Mailing Address</strong> <br />
                      The Asian School <br />
                      P.O. Box 1143, Manama <br />
                      Kingdom of Bahrain
                    </p> 
                </Col>
              </Row>
            </Col>

            <Col>
              <Row className="my-5">
                <Col lg={3} md={6} className="d-flex justify-content-center">
                  <a href="mailto:info@asianschool.bh">
                    <RoundIconButton btnicon="bi:envelope-fill" iconwidth={30}>
                      info@asianschool.bh
                    </RoundIconButton>
                  </a>
                </Col>
                <Col lg={3} md={6} className="d-flex justify-content-center">
                  <a href="tel:+97317722886" className="text-center">
                    <RoundIconButton btnicon="bi:telephone-fill" iconwidth={30}>
                      +973 17722886
                    </RoundIconButton>
                  </a>
                </Col>
                <Col lg={3} md={6} className="d-flex justify-content-center">
                  <a href="tel:+97317728857">
                    <RoundIconButton btnicon="bi:telephone-fill" iconwidth={30}>
                      +973 17728857
                    </RoundIconButton>
                  </a>
                </Col>
                <Col lg={3} md={6} className="d-flex justify-content-center">
                  <a href="tel:+97317720207263">
                    <RoundIconButton btnicon="bi:printer-fill" iconwidth={30}>
                      +973 17720207 263
                    </RoundIconButton>
                  </a>
                </Col>
              </Row>
            </Col>

            <Row className="my-5">
              <Col>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7160.181562923028!2d50.537855!3d26.193725!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4a68ae60ae86c3e7!2sThe%20Asian%20School!5e0!3m2!1sen!2sin!4v1663048245133!5m2!1sen!2sin"
                  style={{ border: 0 }}
                  width="100%"
                  height="450"
                  // allowFullscreen="true"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </>
  );
}
