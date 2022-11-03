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
            <Link href="/admission-instructions/Online-Admission-Process-for-Siblings-Applications.pdf">
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
          </Col>
          <Col md={6} className="text-center my-3">
            <strong>For new students with no siblings at ASB</strong>
            <Link href="/admission-instructions/Online-Admission-Process-for-General-Applications.pdf">
              <a target="_blank" rel="noopener noreferrer">
                <DownloadButton btnicon="">
                  <h6 className="fw-6 mb-0">
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
          </Col>
        </Row>
      </div>
      <Row className="my-5">
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
          form with your child’s details.
        </Col>
      </Row>
    </>
  );
}
