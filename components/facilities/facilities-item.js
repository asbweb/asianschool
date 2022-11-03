import React from "react";
import Image from "next/future/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";

export default function FacilitiesItem({ order, title, text, images }) {
  return (
    <>
      <Container>
        <Row className="my-5">
          <Col md={6} className={order}>
            <h4>{title}</h4>
            <p>{text}</p>
          </Col>
          <Col md={6}>
            <Carousel fade indicators={false}>
              {images.map((item, index) => (
                <Carousel.Item key={index}>
                  <div className="text-center mb-3">
                    <Image
                      className="img-fluid"
                      src={item.img}
                      alt={item.img}
                      width={600}
                      height={400}
                    />
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </>
  );
}
