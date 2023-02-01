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
              {/* <h6> */}
                <p className="mb-0"> 
                {Contactdetails.schooladdress.add1}
                </p>
              {/* </h6> */}
            </li>
            <li className="my-2">
              {/* <h6> */}
              <p className="mb-0">
                {Contactdetails.schooladdress.add2}
                </p>
              {/* </h6> */}
            </li>
            <li className="my-2">
              {/* <h6> */}
              <p>
                {Contactdetails.schooladdress.add3}
                </p>
              {/* </h6> */}
            </li>
          </ul>
        </Col>

        <Col md={4} lg={4}>
          <ul className="footer-contact">
            <li className="my-2 me-3">
              {/* <h6> */}
                <p>
                <a href={Contactdetails.phone1.link}>
                  <Icon
                    icon={Contactdetails.phone1.icon}
                    className="my-auto me-2 pb-1"
                  />
                  {Contactdetails.phone1.text}
                </a>
                </p>
              {/* </h6> */}
            </li>
            <li className="my-2 me-3">
               {/* <h6> */}
               <p>
                <a href={Contactdetails.phone2.link}>
                  <Icon
                    icon={Contactdetails.phone2.icon}
                    className="my-auto me-2 pb-1"
                  />
                  {Contactdetails.phone2.text}
                </a>
                </p>
              {/* </h6> */}
            </li>
          </ul>
        </Col>

        <Col md={4} lg={4}>
          <ul className="footer-contact">
            <li className="my-2">
               {/* <h6> */}
               <p>
                <a href={Contactdetails.email.link}>
                  <Icon
                    icon={Contactdetails.email.icon}
                    className="my-auto me-2 pb-1"
                  />
                  {Contactdetails.email.text}
                </a>
                </p>
              {/* </h6> */}
            </li>
            <li className="my-2">
               {/* <h6> */}
               <p>
                {/* <a href={Contactdetails.fax.link}> */}
                  <Icon
                    icon={Contactdetails.fax.icon}
                    className="my-auto me-2 pb-1"
                  />
                  {Contactdetails.fax.text}
                {/* </a> */}
                </p>
              {/* </h6> */}
            </li>
          </ul>
        </Col>
      </Row>
    </Col>
  );
}
