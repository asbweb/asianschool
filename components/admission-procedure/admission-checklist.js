import { Icon } from "@iconify/react";

export default function AdmissionChecklist() {
  return (
    <>
      <div className="step-container">
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
            The child is currently staying in The Kingdom of Bahrain AND has a
            valid CPR Number.
          </li>
          <li className="mb-3">
            <Icon
              icon="prime:check-circle"
              color="#d47a0c"
              width="36"
              className="me-3"
            />
            LKG: The child will have completed the age of 4 by 31st December of
            the current year.
          </li>
          <li className="mb-3">
            <Icon
              icon="prime:check-circle"
              color="#d47a0c"
              width="36"
              className="me-3"
            />
            Grade 1: The child will have completed the age of 6 by 31st December
            of the current year.
          </li>
          <li className="mb-3">
            <Icon
              icon="prime:check-circle"
              color="#d47a0c"
              width="36"
              className="me-3"
            />
            Children applying to Grades 1 and above must have studied in CBSE
            affiliated schools.
          </li>
        </ul>
      </div>
    </>
  );
}
