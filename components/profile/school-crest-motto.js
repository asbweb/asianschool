import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
 
export default function SchoolCrestMotto({ image, description }) {
  return (
    <>
      <Container className="py-5">
        <Col md={10} className="mx-auto">
          <Row>
            <Col md={4}>
              <div className="text-center">
                <Image
                  className="img-fluid"
                  src={image}
                  alt="ASB"
                  width="300"
                  height="300"
                  // layout="fixed"
                />
              </div>
            </Col>
            <Col md={8}>
              <div>
                {documentToReactComponents(description.json)}
              </div>
            </Col>
          </Row>
        </Col>
      </Container>
    </>
  );
}
