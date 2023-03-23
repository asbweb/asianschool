import Link from "next/link";
import Col from "react-bootstrap/Col";
import Contactdetails from "@data/footer.json";
import { Row } from "react-bootstrap";

export default function TestFooterRight() {
  return (
    <Col lg={{ span: 6, offset: 3 }} className="me-0 mt-4 text-center text-lg-end footer-links">
      <div className="d-md-flex justify-content-evenly">
        <h5>
          <a
            href={Contactdetails.parentportal.link}
            target="_blank"
            rel="noopener noreferrer"
            className="footer nav-link my-2"
          >
            {Contactdetails.parentportal.text}
          </a>
        </h5>
        <h5>
        <Link
          href={Contactdetails.careers.link}
          className="footer nav-link my-2"
        >
          {Contactdetails.careers.text}
        </Link>
        </h5>
        <h5>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={Contactdetails.publicdisclosure.link}
            className="footer nav-link my-2"
          >
            {Contactdetails.publicdisclosure.text}
          </a>
        </h5>
      </div>
    </Col>
  );
}
