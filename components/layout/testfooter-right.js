import Link from "next/link";
import Col from "react-bootstrap/Col";
import Contactdetails from "@data/footer.json";
import { Row } from "react-bootstrap";

export default function TestFooterRight() {
  return (
    <Col lg={{ span: 6, offset: 3 }} className="me-0 my-4 text-center text-lg-end footer-links">
      <div className="d-md-flex justify-content-evenly">
        <p>
          <a
            href={Contactdetails.parentportal.link}
            target="_blank"
            rel="noopener noreferrer"
            className="footer nav-link my-2"
          >
            {Contactdetails.parentportal.text}
          </a>
        </p>

        <Link
          href={Contactdetails.careers.link}
          className="footer nav-link my-2"
        >
          <p>{Contactdetails.careers.text}</p>
        </Link>

        <p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={Contactdetails.publicdisclosure.link}
            className="footer nav-link my-2"
          >
            {Contactdetails.publicdisclosure.text}
          </a>
        </p>
      </div>
    </Col>
  );
}
