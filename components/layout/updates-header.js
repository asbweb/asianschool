import Link from "next/link";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

export default function UpdatesHeader({ displayOrHide, text, link, btnText }) {
  return (
    <>
      <Navbar bg={displayOrHide} className="updates-header">
        <Container fluid="md" className="py-0">
          <Navbar.Text className="d-flex mx-auto my-0 py-0">
            <h5 className="text-center my-auto fs-6">{text}</h5>
            <Link href={link}>
              <a>
                <Button
                  variant="light"
                  className="rounded-5 shadow-sm text-asb-main fw-bold ms-3 mt-0"
                  size="sm"
                >
                  {btnText}
                </Button>
              </a>
            </Link>
          </Navbar.Text>
        </Container>
      </Navbar>
    </>
  );
}
