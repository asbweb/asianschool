import React, { useState } from "react";
import Image from "next/future/image";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import { Icon } from "@iconify/react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import SmallRoundIconButton from "../buttons/small-round-icon-button"

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

export default function CurriculumAssessmentAccordian({ weight, title, url }) {
  return (
    <>
      <Card className="rounded-0">
        <Card.Header className="bg-asb-accent text-uppercase">
          <CustomToggle eventKey={weight}>{title}</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey={weight}>
          <Card.Body>
            <Container className="py-3">
              <TransformWrapper
                initialScale={1}
                initialPositionX={0}
                initialPositionY={0}
                wheel={{ activationKeys: ['Control', 'Shift'] }}
              >
                {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                  <>
                <div className="d-flex justify-content-end">
                
                <SmallRoundIconButton btnicon="bi:zoom-in" iconwidth={15} onClick={() => zoomIn()}/>
                <SmallRoundIconButton btnicon="bi:zoom-out" iconwidth={15} onClick={() => zoomOut()}/>
                <SmallRoundIconButton btnicon="bi:x-lg" iconwidth={15} onClick={() => resetTransform()}/>
                {/* <button onClick={() => zoomIn()}> +</button>
                <button onClick={() => zoomOut()}>-</button>
                <button onClick={() => resetTransform()}>x</button> */}
                </div>
                <TransformComponent>
                  <Image
                    className="img-fluid p-0"
                    src={url}
                    alt=""
                    layout="intrinsic"
                    width={1920}
                    height={1080}
                  />
                </TransformComponent>
                </>
                )}
              </TransformWrapper>
            </Container>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </>
  );
}
