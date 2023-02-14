import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Icon } from "@iconify/react";
import Contactdetails from "@data/footer.json";

export default function FooterLeftCopy({ 
  schoolAddressSchool,
  schoolAddress1,
  schoolAddress2,
  schoolAddress3,
  phone1Link,
  phone1Icon,
  phone1Text,
  phone2Link,
  phone2Icon,
  phone2Text,
  emailLink,
  emailIcon,
  emailText, 
  faxIcon,
  faxText,
}) {
  return (
    <Col md={12} lg={8} className="me-0 my-4">
      <Row>
        <h5 className="fw-bold">{schoolAddressSchool}</h5>
        <Col md={4} lg={4}>
          <ul className="footer-contact">
            <li className="my-2">
              <p className="mb-0">{schoolAddress1}</p>
            </li>
            <li className="my-2">
              <p className="mb-0">{schoolAddress2}</p>
            </li>
            <li className="my-2">
              <p>{schoolAddress3}</p>
            </li>
          </ul>
        </Col>

        <Col md={4} lg={4}>
          <ul className="footer-contact">
            <li className="my-2 me-3">
              <p>
                <a href={phone1Link}>
                  <Icon icon={phone1Icon} className="my-auto me-2 pb-1" />
                  {phone1Text}
                </a>
              </p>
            </li>
            <li className="my-2 me-3">
              <p>
                <a href={phone2Link}>
                  <Icon icon={phone2Icon} className="my-auto me-2 pb-1" />
                  {phone2Text}
                </a>
              </p>
            </li>
          </ul>
        </Col>

        <Col md={4} lg={4}>
          <ul className="footer-contact">
            <li className="my-2">
              <p>
                <a href={emailLink}>
                  <Icon icon={emailIcon} className="my-auto me-2 pb-1" />
                  {emailText}
                </a>
              </p>
            </li>
            <li className="my-2">
              <p>
                <Icon icon={faxIcon} className="my-auto me-2 pb-1" />
                {faxText}
              </p>
            </li>
          </ul>
        </Col>
      </Row>
    </Col>
  );
}
