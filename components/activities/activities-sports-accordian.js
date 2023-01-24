import Image from "next/image";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel"; 
import Accordion from "react-bootstrap/Accordion";
import CustomToggle from "@buttons/custom-toggle"

export default function ActivitiesSportsAccordian({ weight, title, images, text }) {
  return (
    <>
      <Card className="rounded-0">
        <Card.Header className="bg-asb-accent text-uppercase">
          <CustomToggle eventKey={weight}>{title}</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey={weight}>
          <Card.Body>
          <Row>
            <Col md={6} className="p-5">
              <Carousel fade indicators={false}>
                {images.map((item, index) => (
                  <Carousel.Item key={index}>
                    <div className="text-center"> 
                      <Image
                        className="img-fluid"
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
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </>
  );
} 