import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Icon } from "@iconify/react";
import Contactdetails from "@data/footer.json";

export default function FooterLeft() {
  return (
    <Col md={12} lg={8} className="me-0 my-4">
      <Row>
        <h5 className="fw-bold">{Contactdetails.schooladdress.school}</h5>
        <Col md={4} lg={4}>
          <ul className="footer-contact">
            <li className="my-2">
              <p className="mb-0">{Contactdetails.schooladdress.add1}</p>
            </li>
            <li className="my-2">
              <p className="mb-0">{Contactdetails.schooladdress.add2}</p>
            </li>
            <li className="my-2">
              <p>{Contactdetails.schooladdress.add3}</p>
            </li>
          </ul>
        </Col>

        <Col md={4} lg={4}>
          <ul className="footer-contact">
            <li className="my-2 me-3">
              <p>
                <a href={Contactdetails.phone1.link}>
                  <Icon
                    icon={Contactdetails.phone1.icon}
                    className="my-auto me-2 pb-1"
                  />
                  {Contactdetails.phone1.text}
                </a>
              </p>
            </li>
            <li className="my-2 me-3">
              <p>
                <a href={Contactdetails.phone2.link}>
                  <Icon
                    icon={Contactdetails.phone2.icon}
                    className="my-auto me-2 pb-1"
                  />
                  {Contactdetails.phone2.text}
                </a>
              </p>
            </li>
          </ul>
        </Col>

        <Col md={4} lg={4}>
          <ul className="footer-contact">
            <li className="my-2">
              <p>
                <Icon
                  icon={Contactdetails.fax.icon}
                  className="my-auto me-2 pb-1"
                />
                {Contactdetails.fax.text}
              </p>
            </li>
            <li className="my-2">
              <p>
                <a href={Contactdetails.email.link}>
                  <Icon
                    icon={Contactdetails.email.icon}
                    className="my-auto me-2 pb-1"
                  />
                  {Contactdetails.email.text}
                </a>
              </p>
            </li>
          </ul>
        </Col>
      </Row>
    </Col>
  );
}
