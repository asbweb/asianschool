import Link from "next/link";
import Col from "react-bootstrap/Col";
import Contactdetails from "@data/footer.json";

export default function FooterRight() {
  return (
    <Col
      md={12}
      lg={{ span: 3, offset: 1 }}
      className="me-0 my-4 text-center text-lg-end footer-links"
    >
      <h6>
        <a
          href={Contactdetails.parentportal.link}
          target="_blank"
          rel="noopener noreferrer"
          className="footer nav-link my-2"
        >
          {Contactdetails.parentportal.text}
        </a>
      </h6>

      <Link href={Contactdetails.careers.link} className="footer nav-link my-2">
        <h6>{Contactdetails.careers.text}</h6>
      </Link>

      <h6>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={Contactdetails.publicdisclosure.link}
          className="footer nav-link my-2"
        >
          {Contactdetails.publicdisclosure.text}
        </a>
      </h6>
    </Col>
  );
}
