import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import FooterLeft from "./footer-left";
import FooterRight from "./footer-right";
import FooterCopyright from "./footer-copyright";

export default function Footer() {
  return (
    <footer className="bg-asb-main text-white pt-1 position-relative">
      <Container>
        <Row className="text-center text-md-start">
          <FooterLeft/>
          <FooterRight />
        </Row>
      </Container>

      <Container className="bg-dark py-2 px-3" fluid>
        <FooterCopyright/>
      </Container>
    </footer>
  );
}

