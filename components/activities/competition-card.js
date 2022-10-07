import React from "react";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";

export default function CompetionCard({ order, title, text, img }) {
  return (
    <>
      <Col md={4} className="p-3">
        <Card className="border-0 rounded-0 bg-light">
          <div className="text-center">
            <Image src={img} alt={title} width={300} height={200} />
          </div>
          <Card.Body>
            <Card.Title className="text-center">{title}</Card.Title>
            <Card.Text className="text-center">{text}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}
