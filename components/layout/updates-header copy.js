import Link from "next/link";
import Container from "react-bootstrap/Container"; 
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

export default function UpdatesHeader() {
  return (
    <>
      <Navbar bg="asb-accent">
        <Container fluid="md" className="py-0">
          <Navbar.Text className="d-flex mx-auto my-0 py-0">
            <h5 className="text-center my-auto fs-6">
              ADMISSION TO GRADE 11 FOR THE ACADEMIC YEAR 2022-23
            </h5>
            <Link href="/admissions/procedure">
              <a>
                <Button
                  variant="light"
                  className="rounded-5 shadow-sm text-asb-main fw-bold ms-3 mt-0 "
                >
                  click here
                </Button>
              </a>
            </Link>
          </Navbar.Text>
        </Container>
      </Navbar>
    </>
  );
}
