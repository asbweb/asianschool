// import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import CustomToggle from "../buttons/custom-toggle";
import CurriculumItems from "./curriculum-items";
import DownloadButton from "@buttons/download-button";

export default function CurriculumItemsAccordian({
  weight,
  title,
  description,
  syllabus,
}) {
  return (
    <>
      <Card className="rounded-0">
        <Card.Header className="bg-asb-accent text-uppercase">
          <CustomToggle eventKey={weight}>{title}</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey={weight}>
          <Card.Body>
            <Container className="py-5 curriculum-container">
              <CurriculumItems description={description} />
              <div className="col-md-8 ">
                For a complete perusal of the {title} syllabus and a look at the
                monthly schedule of how the syllabus will be taught over the
                year, please <a href={syllabus} target="_blank" rel="noopener noreferrer">Click Here</a> 
                </div>  
            </Container>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </>
  );
}
