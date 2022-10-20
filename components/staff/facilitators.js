import React from "react";
import Image from "next/future/image";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

export default function Facilitators({ profilPicture, name, role, qualification }) {
  return (
    <>
      <Col md={4}>
        <Card className="border-0 mb-5">
          <Card.Body>
            <div className="text-center">
              <Image
                className="img-fluid mb-0 p-3 "
                src={profilPicture}
                layout="fixed"
                // placeholder="blur"
                // blurDataURL={imgblurDataURL}
                width="200"
                height="200"
                alt={name}
              />
              <p className="text-center text-asb-secondary mb-0 fw-bold">{name}</p>
              <p className="text-center text-asb-secondary mb-0 fs-6">{role}</p>
              <p className="text-center text-asb-secondary mb-0 fs-6">{qualification}</p>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}
 
