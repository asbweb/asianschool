import Link from "next/link";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Icon } from "@iconify/react";
import DownloadButton from "@buttons/download-button";
import RoundIconButton from "@buttons/round-icon-button";

export default function AdmissionParentPortal() {
  return (
    <>
      <div className="bg-white border border-asb-main step-container">
        <Row className="my-1">
          <Col md={6} className="text-center my-3">
            <strong>For new students with siblings at ASB</strong>

            <h6 className="fw-light text-start mb-4">
              If you have a child currently studying at The Asian School,
              Please read the instructional document AND LOGIN to the Parent
              Portal
            </h6>
            <Link href="/pdf/admission-instructions/Online-Admission-Process-for-Siblings-Applications.pdf">
            {/* /pdf/admission-instructions/Online-Admission-Process-for-General-Applications.pdf"> */}
              <a target="_blank" rel="noopener noreferrer">
                <DownloadButton btnicon="">
                  <h6 className="fw-6 mb-0">
                    <Icon
                      icon="material-symbols:download-rounded"
                      width={24}
                      className="me-3"
                    />
                    Instructional document (sibling admission)
                  </h6>
                </DownloadButton>
              </a>
            </Link>

            <div className="mx-auto my-3 text-center">
              <a
                href="http://portal.asianschool.bh/ASBDC/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RoundIconButton btnicon="fa-solid:door-open" iconwidth="36">
                  Parent Portal Login
                </RoundIconButton>
              </a>
            </div>
          </Col>

          <Col md={6} className="text-center my-3">
            <strong>For new students with no siblings at ASB</strong>
          
            <h6 className="fw-light text-start">
              If you are applying to The Asian School for the first time OR DO
              NOT have a child currently studying at The Asian School, Please
              read the instructional document AND Login to the Admission Portal 
            </h6>

            <Link href="/pdf/admission-instructions/Online-Admission-Process-for-General-Applications.pdf">
              <a target="_blank" rel="noopener noreferrer">
                <DownloadButton btnicon="">
                  <h6 className="mb-0">
                    <Icon
                      icon="material-symbols:download-rounded"
                      width={24}
                      className="me-3"
                    />
                    Instructional document (new admission)
                  </h6>
                </DownloadButton>
              </a>
            </Link>

            <div className="mx-auto my-3 text-center">
              <a
                href="http://asbdc.ethdigitalcampus.com/RegistrationPortal/?dbConnVar=ASBDC"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RoundIconButton btnicon="fa-solid:door-open" iconwidth="36">
                  Parent Portal Registration
                </RoundIconButton>
              </a>
              <h6 className="fw-light text-start">
              (Please enter your details first in ???Create an Account??? to get
              your User Id and Password and then continue to fill the form for
              entering the child???s details)
            </h6>
            </div>

          </Col>
        </Row>
      </div>

      {/* <Row className="my-5">
        <Col md={3} className="d-flex justify-content-center">
          <a
            href="http://portal.asianschool.bh/ASBDC/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RoundIconButton btnicon="fa-solid:door-open" iconwidth="36">
              Parent Portal
            </RoundIconButton>
          </a>
        </Col>
        <Col md={5} className="my-auto">
          Create an Account using your own details, then continue to fill the
          form with your child???s details.
        </Col>
      </Row> */}
    </>
  );
}
