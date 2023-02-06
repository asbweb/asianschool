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
        <h2 className="page-title">Join Us</h2>

        <section>
          <Container className="my-5">
            <Col md={10} lg={8} className="mx-auto">
              <p className="text-center">
                If you wish to be a part of the Asian School family, please go to the website
                <a href="http://careers.asianschool.bh"><b> careers.asianschool.bh</b></a> and submit your detailed profile.
              </p>
            </Col>
          </Container>
        </section>
      </main>
    </>
  );
}
