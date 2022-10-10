import React from "react";
import Image from "next/future/image";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

export default function StudentAchievers({ profilPicture, name, achievement }) {
  return (
    <>
      <Col md={3}>
        <Card className="border-0 mb-5">
          <Card.Body>
            <div className="text-center">
              <Image
                className="img-fluid mb-0 p-1 "
                src={profilPicture}
                layout="fixed"
                // placeholder="blur"
                // blurDataURL={imgblurDataURL}
                width="200"
                height="300"
                alt={name}
              />
              <p className="text-center text-asb-secondary mb-0 fw-bold">{name}</p>
              <p className="achievement text-center text-asb-secondary mb-0 fs-6">{achievement}</p>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}
 
