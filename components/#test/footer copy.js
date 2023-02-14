import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <footer className="bg-asb-main text-white pt-1 position-relative">
      <Container>
        <Row className="text-center text-md-start">
          <Col md={12} lg={8} className="me-0 my-4">
            <Row>
              <h6 className="fw-bold">THE ASIAN SCHOOL, BAHRAIN</h6>
              <Col md={4}>
                <ul className="footer-contact">
                  <li className="my-2">
                    <h6> Avenue 13, Block 701, </h6>
                  </li>
                  <li className="my-2">
                    <h6> Tubli, Kingdom of Bahrain </h6>
                  </li>
                </ul>
              </Col>

              <Col md={4}>
                <ul className="footer-contact">
                  <li className="my-2 me-3 ">
                    <h6>
                      <a href="tel:+97317722886">
                        <Icon
                          icon="fa-solid:phone-alt"
                          className="my-auto me-2 pb-1"
                        />
                        +973 17722886
                      </a>
                    </h6>
                  </li>
                  <li className="my-2 me-3">
                    <h6>
                      <a href="tel:+97317728857">
                        <Icon
                          icon="fa-solid:phone-alt"
                          className="my-auto me-2 pb-1"
                        />
                        +973 17728857
                      </a>
                    </h6>
                  </li>
                </ul>
              </Col>

              <Col md={4}>
                <ul className="footer-contact">
                  <li className="my-2">
                    <h6>
                      <a href="mailto:info@asianschool.bh">
                        <Icon
                          icon="fa-solid:envelope"
                          className="my-auto me-2 pb-1 "
                        />
                        info@asianschool.bh
                      </a>
                    </h6>
                  </li>
                  <li className="my-2">
                    <h6>
                      <a>
                        <Icon
                          icon="fa-solid:fax"
                          className="my-auto me-2 pb-1"
                        />
                        +973 17720207
                      </a>
                    </h6>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>

          <Col
            md={12}
            lg={{ span: 3, offset: 1 }}
            className="me-0 my-4 text-center text-lg-end footer-links"
          >
            <h6>
              <a
                href="http://portal.asianschool.bh/ASBDC/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer nav-link my-2"
              >
                Parent portal
              </a>
            </h6>

            <Link href="/careers" className="footer nav-link my-2">
              <h6>Careers</h6>
            </Link>
            <h6>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="/pdf/Public-disclosure.pdf"
                className="footer nav-link my-2"
              >
                Public disclosure
              </a>
            </h6>
          </Col>
        </Row>
      </Container>

      <Container className="bg-dark py-2" fluid>
        <p className="text-center text-asb-secondary my-0 fs-6">
          <small>
            © Copyright The Asian School, Bahrain. All Rights Reserved.
          </small>
        </p>
      </Container>
    </footer>
  );
}
