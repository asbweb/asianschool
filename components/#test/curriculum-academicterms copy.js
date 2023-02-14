import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import DownloadButton from "@buttons/download-button";
import CurriculumAcademictermsItems from "@data/curriculum/academicterms.json"

export default function CurriculumAcademicterms() {
  return (
    <> 
      <Row>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title className="fw-bold">{CurriculumAcademictermsItems.curriculumheading}</Card.Title>
              <Card.Text>
              {CurriculumAcademictermsItems.curriculumtext}
              </Card.Text>
              <a href={CurriculumAcademictermsItems.URL} target="_blank" rel="noopener noreferrer" >
              <DownloadButton btnicon={CurriculumAcademictermsItems.btnicon}>
              {CurriculumAcademictermsItems.btntext}
              </DownloadButton>
              </a>
              
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title className="fw-bold">{CurriculumAcademictermsItems.academictermsheading}</Card.Title>
              <Card.Text>
              {CurriculumAcademictermsItems.academictermstext}
              </Card.Text>
              <ListGroup variant="flush" className="mt-2">
              {CurriculumAcademictermsItems.academictermsitem.map((item, index) => ( 
                <ListGroup.Item key={index}><strong>{item.term}</strong> – {item.months}</ListGroup.Item>
                  ))} 
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>

    </>
  );
}
