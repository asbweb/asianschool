import React from "react";
import Image from "next/future/image";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

export default function InterScoolCompetionCard({ title, text, img }) {
  return (
    <>
      <Col md={6} lg={4} className="py-4 px-1 mx-auto bg-asb-accent">
        <Card className="border-0 rounded-0 bg-asb-accent">
          <div className="text-center">
            <Image
              className="img-fluid"
              src={img}
              alt={title}
              width={300}
              height={98}
            />
          </div>
          <Card.Body>
            <h5 className="text-center">{title}</h5>
            <h6 className="text-center fw-normal text-asb-secondary">{text}</h6>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}
