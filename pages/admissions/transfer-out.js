import { SITE_NAME, SITE_FAVICON, SITE_DESCRIPTION,  imgblurDataURL, HOME_OG_IMAGE_URL } from "../../lib/constants";
import React, { useState } from "react";
import Head from "next/head";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";
import TransferOutTable from "../../components/transfer-out/transfer-out-table";
import { Icon } from "@iconify/react";

function CustomToggle({ children, eventKey }) {
  const [isActive, setIsActive] = useState(false);
  const handleClick = useAccordionButton(eventKey, () =>
    setIsActive(!isActive)
  );

  return (
    <Container>
      <Col md={10} className="mx-auto">
        <button
          className="rounded-0 d-flex"
          type="button"
          style={{ backgroundColor: "var(--asb-accent)", border: "none" }}
          onClick={handleClick}
        >
          <Icon
            icon="bi:chevron-down"
            style={{
              transform: isActive ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.5s ease-in-out",
            }}
            className="me-3 my-auto"
            width={25}
          />
          <h5 className="text-uppercase fw-bold mb-0">{children}</h5>
        </button>
      </Col>
    </Container>
  );
}

export default function TransferOut() {
  return (
    <div>
      <Head>
        <title>{ SITE_NAME } | Transfer Out </title>
        <meta name="description" content={SITE_DESCRIPTION} />
        <link rel="icon" href={SITE_FAVICON} />
      </Head>



      <main>
        
          <h2 className="page-title">Transfer Out</h2>
          <section>
          <Container>
            <ul>
              <li>
                Transfer Certificates will be issued only upon an application
                made on reasonable grounds by the parent/ guardian.
              </li>
              <li>
                Application form to request for a Transfer Certificate is
                available here. The completed form should be submitted to the
                school office.
              </li>
              <li>
                Certificates will be issued only 3 days after the application is
                received provided all dues to the school, if any, are cleared.
              </li>
              <li>
                It will be the parents’ responsibility to check that all details
                mentioned on the Transfer Certificate are correct. Upon
                verification, the parent should sign the declaration on the
                original application form.
              </li>
              <li>
                Students withdrawn during the term will be required to pay full
                fees for the remainder of the term.
              </li>
              <li>
                Transfer Certiﬁcates will be generated and issued for students
                absent for more than two months without valid / required
                permissions and their names will be struck off from the school
                register.
              </li>
              <li>
                Parents who take Transfer Certificates from the school are
                advised to attest the same from the concerned
                Embassy/Ministries.
              </li>
            </ul>
          </Container>
        </section>

        <section className="my-5 py-5">
          <Accordion>
            <Card className="rounded-0">
              <Card.Header className="bg-asb-accent rounded-0">
                <CustomToggle eventKey="4">Transfer Certificates</CustomToggle>
              </Card.Header>
              <Accordion.Collapse eventKey="4">
                <Card.Body>
                  <Col md={8} className="mx-auto">
                    <TransferOutTable />
                  </Col>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </section>
      </main>
    </div>
  );
}
