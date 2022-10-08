import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Icon } from "@iconify/react";
import DownloadButton from "../buttons/download-button";
import RoundIconButton from "../buttons/round-icon-button";

export default function AdmissionProcedureKGandGrade1() {
  return (
    <>
      <Row className="bg-asb-accent">
        <Col>
          <div className="mx-1 mx-lg-5 mt-5 mb-3 py-5 py-lg-5 px-0 px-lg-5">
            <p className="fw-bold mb-4">
              Before applying for admission, please make sure that ...
            </p>
            <ul className="admission-li mb-3">
              <li className="mb-3">
                <Icon
                  icon="prime:check-circle"
                  color="#d47a0c"
                  width="36"
                  className="me-3"
                />
                The child is currently staying in The Kingdom of Bahrain AND has
                a valid CPR Number.
              </li>
              <li className="mb-3">
                <Icon
                  icon="prime:check-circle"
                  color="#d47a0c"
                  width="36"
                  className="me-3"
                />
                LKG: The child will have completed the age of 4 by 31st December
                of the current year.
              </li>
              <li className="mb-3">
                <Icon
                  icon="prime:check-circle"
                  color="#d47a0c"
                  width="36"
                  className="me-3"
                />
                Grade 1: The child will have completed the age of 6 by 31st
                December of the current year.
              </li>
              <li className="mb-3">
                <Icon
                  icon="prime:check-circle"
                  color="#d47a0c"
                  width="36"
                  className="me-3"
                />
                Children applying to Grades 1 and above must have studied in
                CBSE affiliated schools.
              </li>
            </ul>
          </div>

          <div className="m-5 px-1 px-lg-5">
            <h4 className="text-uppercase mb-4">Step 1</h4>
            <p>
              <strong>
                Send an email to &nbsp;
                <a href="mailto:admissions@asianschool.bh?subject=Admission Application for Grade-">
                  admissions@asianschool.bh
                </a>
              </strong>
            </p>
            <p className="mb-0">
              <strong>Include the following details:</strong>
            </p>
            <p className="mb-0">– Name of the child</p>
            <p className="mb-0">– CPR No.</p>
            <p className="mb-0">– Contact Number</p>
            <p className="mb-0">– Grade applied for</p>
            <p className="mb-0">
              – Scanned copy of child’s passport (first and last pages)
            </p>
            <p className="mb-0">
              – Scanned copy of child’s CPR smartcard data OR child’s CPR (front
              and back)
            </p>
            <p className="mb-0">
              – Scanned copy of any current and previous years Progress Reports
            </p>
          </div>

          <div className="m-5 py-5 px-3 bg-light border border-asb-main">
            <p>
              {" "}
              If you are applying for more than 1 child, please mention all
              children’s details and enclose all documents in one email.
            </p>
            <p> Emails with incomplete information will be disregarded.</p>
            <p> Emails sent to any other email ID will be disregarded.</p>
            <p>
              {" "}
              Do not call or come to the school regarding application status of
              your child. The reception staff cannot help you with matters
              regarding admission decisions.
            </p>
            <p>
              {" "}
              The school will only get in touch with you regarding further
              procedures if your application is being considered.
            </p>
          </div>

          <div className="m-5 px-1 px-lg-5">
            <h4 className="text-uppercase mb-4">Step 2</h4>
            <p>
              <strong>
                Collect a Prospectus for Admission from the school office{" "}
              </strong>
            </p>
            <p>
              After all documents have been checked and verified, a prospective
              student will receive a call from the school to collect a
              Prospectus for Admission from the school office.
            </p>
            <p>
              Please produce the original Passport & CPR of the student (and a
              copy of each) at the school office for verification.
            </p>
            <p>
              The Online Form should be filled and submitted only after
              completing manual verification of the original documents.
            </p>
          </div>

          <div className="m-5 px-1 px-lg-5">
            <h4 className="text-uppercase mb-4">Step 3</h4>
            <p>
              <strong> Complete the online admission application form </strong>
            </p>
            <p>
              Please read the instructional document AND then login to the
              Parent Portal.{" "}
            </p>

            <div className="my-5 py-3 px-5 bg-white border border-asb-main">
              <Row>
                <Col md={6} className="mb-2">
                  <strong>For new students with siblings at ASB</strong>
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
                </Col>
                <Col md={6} className="mb-2">
                  <strong>For new students with no siblings at ASB</strong>
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
                </Col>
              </Row>
            </div>
            <Row className="my-5">
              <Col md={3} className="d-flex justify-content-center">
                <RoundIconButton btnicon="fa-solid:door-open" iconwidth="36">
                  Parent Portal
                </RoundIconButton>
              </Col>
              <Col md={5} className="my-auto">
                Create an Account using your own details, then continue to fill
                the form with your child’s details.
              </Col>
            </Row>
          </div>

          <div className="m-5 px-1 px-lg-5">
            <h4 className="text-uppercase mb-4">Step 4</h4>
            <p>
              <strong>A draw is conducted to select candidates</strong>
            </p>
            <p>
              Since the school receives more applications than there are
              available seats, a draw is conducted to select applicants.
            </p>
            <p>
              When the online application has been completed, you will receive
              an acknowledgement receipt for the application along with a slip
              for the draw.
            </p>
            <p>
              Once the application has been verified, the date of the draw will
              be communicated. The slip for the draw needs to be deposited in
              appropriately marked boxes in the school.
            </p>
          </div>

          <div className="m-5 px-1 px-lg-5">
            <h4 className="text-uppercase mb-4">Step 5</h4>
            <p>
              <strong>
                Selected candidates will be interviewed and tested
              </strong>
            </p>
            <p>
              Applicants selected via the draw process will be intimated by the
              school.
            </p>
            <p>
              A list of successful applicants will also be displayed in the
              school on the appropriate day.
            </p>
            <p>
              If your child has been selected, please collect their call letter
              intimating dates for Admission test and/or interview from the
              school office.
            </p>

            <Row className="mb-2">
              <Col md={2}>
                <p>
                  <strong>LKG</strong>
                </p>
              </Col>
              <Col md={7}>
                <p>
                  There is no Admission Test for LKG but there will be an
                  interview with a Panel comprising of the Principal, Vice
                  Principal and Director at the least. Both parents and the
                  child must be present for the interview.
                </p>
              </Col>
            </Row>
            <Row>
              <Col md={2}>
                <p>
                  <strong>HKG and Grade 1</strong>
                </p>
              </Col>
              <Col md={7}>
                <p>
                  Applicants seeking admission to HKG and Grade 1 will need to
                  appear for an Admission Test and then attend an interview with
                  the Panel on the same day. The decision of the Principal will
                  be final with regard to all matters related to admission.
                </p>
              </Col>
            </Row>
          </div>

          <div className="m-5 px-1 px-lg-5">
            <h4 className="text-uppercase mb-4">Step 6</h4>
            <p>
              <strong>
                Pay fees and submit an Undertaking Letter to gain provisional
                admission
              </strong>
            </p>
            <p>
              If a prospective student clears the Interview process, the parent
              needs to fill and submit an Undertaking Letter (available from the
              school office) to gain Provisional Admission and pay the full fees
              outlined in the Fee Structure.
            </p>
          </div>

          <div className="m-5 px-1 px-lg-5">
            <h4 className="text-uppercase mb-4">Step 7</h4>
            <p>
              <strong>
                Apply for Local Transfer Approval on the Bahrain eGOVERNMENT
                portal
              </strong>
            </p>
            <p>
              Once the fees are paid, the school will provide the parent with an
              Acceptance Letter which they need to upload, along with other
              required documents, to the Student School Transfer section on the
              Bahrain eGOVERNMENT portal for Local Transfer Approval.
            </p>
          </div>

          <div className="m-5 px-1 px-lg-5">
            <h4 className="text-uppercase mb-4">Step 8</h4>
            <p>
              <strong>
                Submit Local Transfer Approval to school to confirm admission
              </strong>
            </p>
            <p>
              Finally, a copy of the Approval received from the Bahrain
              eGOVERNMENT portal and the original attested TC needs to be
              submitted to the school to confirm admission.
            </p>
          </div>

          <div className="m-5 py-5 px-5 bg-white border border-asb-main">
            <p>
              <strong>
                Authentications required on the Transfer Certificate for
                students transferring from another school.
              </strong>
            </p>
            <p>
              TRANSFER FROM SCHOOLS WITHIN THE KINGDOM OF BAHRAIN
              <br />
              Apply online through the bahrain.bh e-government portal to gain
              required permissions from the Ministry of Education (Directorate
              of Private Education).
            </p>
            <p>
              TRANSFER FROM SCHOOLS WITHIN THE GCC
              <br />
              Transfer Certificate should be attested by the Higher Education
              Council / Ministry of Education of that country.
            </p>
            <p>
              TRANSFER FROM SCHOOLS IN INDIA
              <br />
              Apostille from the Ministry of External Affairs, New Delhi.
            </p>
            <p>
              Students transferring from within the GCC and from India need to
              also do the following:
              <br />
              ‒ Get an initial approval from the Directorate of Private
              Education
              <br />‒ Apply for an Equivalency Certificate at the Ministry of
              Education Examination Centre
            </p>
          </div>
        </Col>
      </Row>
    </>
  );
}
