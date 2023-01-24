import { documentToReactComponents } from "@contentful/rich-text-react-renderer"; 
import Container from "react-bootstrap/Container"; 
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";  
import CustomToggle from "../buttons/custom-toggle"

export default function CurriculumItemsAccordian({ weight, title, description }) {
  return (
    <>
      <Card className="rounded-0">
        <Card.Header className="bg-asb-accent text-uppercase">
          <CustomToggle eventKey={weight}>{title}</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey={weight}>
          <Card.Body>
            <Container className="py-5">
              {documentToReactComponents(description.json)}
            </Container>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </>
  );
} 