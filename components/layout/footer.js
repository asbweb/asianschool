import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import FooterLeft from "./footer-left";
import FooterRight from "./footer-right";

export default function Footer() {
  return (
    <footer className="bg-asb-main text-white pt-1 position-relative">
      <Container>
        <Row className="text-center text-md-start">
          <FooterLeft />
          <FooterRight />
        </Row>
      </Container>

      <Container className="bg-dark py-2 px-3" fluid>
        <p className="text-center text-asb-secondary my-0 fs-6 d-md-flex justify-content-between">
          <small>
            © Copyright The Asian School, Bahrain. All Rights Reserved.
          </small> {' '}
          <small>
          Designed and Developed by &nbsp;
          <a 
          className="fw-light" 
          href="https://mohankumar.dev/" target="_blank"> 
             Mohan 
          </a>
          </small>
        </p> 
      </Container>
    </footer>
  );
}
