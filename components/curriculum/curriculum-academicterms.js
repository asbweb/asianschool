import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import DownloadButton from "@buttons/download-button";

export default function CurriculumAcademicterms() {
  return (
    <>
      <Row>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title className="fw-bold">CURRICULUM</Card.Title>
              <Card.Text>
                The school follows a curriculum directed by The Central Board of
                Secondary Education (CBSE), Delhi. The curriculum/syllabus as
                defined by CBSE can be accessed with the link below.
              </Card.Text>
              <a href="https://cbseacademic.in/curriculum.html" target="_blank" rel="noopener noreferrer" >
              <DownloadButton btnicon="material-symbols:read-more">
                CBSE curriculum/syllabus
              </DownloadButton>
              </a>
              
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title className="fw-bold">ACADEMIC TERMS</Card.Title>
              <Card.Text>
                The academic year is divided into 3 terms as follows:{" "}
              </Card.Text>
              <ListGroup variant="flush" className="mt-2">
                <ListGroup.Item><strong>First Term</strong> – April to June</ListGroup.Item>
                <ListGroup.Item><strong>Second Term</strong> – September to December</ListGroup.Item>
                <ListGroup.Item><strong>Third Term</strong> – January to March
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}
