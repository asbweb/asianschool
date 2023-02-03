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
import Col from "react-bootstrap/Col"; 

export default function Careers() {
  return (
    <>
      <Head>
        <title>
          {/* {SITE_NAME}  */}
           The Asian School Bahrain | Careers</title>
        <meta name="description" content={SITE_DESCRIPTION} />
        <link rel="icon" href={SITE_FAVICON} />
      </Head>
      <main>
        <h2 className="page-title">Connect</h2>

        <section>
          <Container className="mb-5 py-5">
            <Col md={10} lg={8} className="mx-auto">
              <p className="text-center">
                If you wish to be a part of the Asian School family, please send
                us an email with your latest resume to <a href="mailto:careers@asianschool.bh"> careers@asianschool.bh</a>.
                Please mention your subject taught in the subject of the email.
              </p>
            </Col>
          </Container>
        </section>
      </main>
    </>
  );
}
