import React, { useState } from "react";
import Image from "next/future/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Carousel from "react-bootstrap/Carousel";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import { Icon } from "@iconify/react";

 

function CustomToggle({ children, eventKey }) {
  const [isActive, setIsActive] = useState(false);
  const handleClick = useAccordionButton(eventKey, () =>
    setIsActive(!isActive)
  );
 
  return (
    <Container>
      <Col className="mx-auto">
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

export default function FacilitiesAccordian({ weight, title, text, images  }) {
  return (
    <>
      <Card className="rounded-0">
        <Card.Header className="bg-asb-accent text-uppercase">
          <CustomToggle eventKey={weight}>{title}</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey={weight}>
          <Card.Body>
            <Container className="py-5">

            <Row>
            <Col md={6} className="p-5">
              <Carousel fade indicators={false}>
                {images.map((item, index) => (
                  <Carousel.Item key={index}>
                    <div className="text-center">
                      <Image
                        src={item.img}
                        alt="test"
                        width={600}
                        height={400}
                      />
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
            <Col md={6} className="my-5">
              <p>{text}</p>
            </Col>
          </Row>

            
            </Container>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </>
  );
} 