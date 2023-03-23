import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import TestFooterLeft from "./testfooter-left";
import TestFooterRight from "./testfooter-right";
import FooterCopyright from "./footer-copyright";

export default function Footer() {
  return (
    <footer className="bg-asb-main text-white pt-1 position-relative">
      <Container> 
        <TestFooterRight />
        <TestFooterLeft/> 
      </Container>

      <Container className="bg-dark py-2 px-3" fluid>
        <FooterCopyright/>
      </Container>
    </footer>
  );
}

