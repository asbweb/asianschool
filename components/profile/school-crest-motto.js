import Image from "next/future/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function SchoolCrestMotto() {
  return (
    <>
      <Container className="py-5">
        <Col md={10} className="mx-auto">
          <Row>
            <Col md={4}>
              <div className="text-center">
                <Image
                  className="img-fluid"
                  src="/images/asian-school-crest.svg"
                  layout="fixed"
                  // placeholder="blur"
                  // blurDataURL={imgblurDataURL}
                  width="300"
                  height="300"
                  alt="Asian School Bharain"
                />
              </div>
            </Col>
            <Col md={8}>
              <p>
                The school logo has a lamp positioned above an open book. The
                lighted lamp is symbolic of illumination and dispelling
                darkness. The book symbolizes knowledge which is the source of
                enrichment for the mind. The school is a fount of knowledge that
                provides learning coupled with enlightenment thus expelling the
                darkness of ignorance. The light promises moral, social and
                economic well-being. The emblem reflects our endless pursuit of
                knowledge, and the creation and dissemination of it.
              </p>
              <p className="mb-0">
                The school unflinchingly strives to keep alive its motto:
              </p>
              <p className="text-uppercase">Lead Kindly Light.</p>
            </Col>
          </Row>
        </Col>
      </Container>
    </>
  );
}
