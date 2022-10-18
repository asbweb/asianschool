import {
  SITE_NAME,
  SITE_FAVICON,
  SITE_DESCRIPTION,
  imgblurDataURL,
  HOME_OG_IMAGE_URL,
} from "../../lib/constants";
import Head from "next/head";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import AdmissionSteps from "@admission-procedure/admission-steps"; 
import AdmissionEmailInfo from "@admission-procedure/admission-email-info";
import AdmissionChecklist from "@admission-procedure/admission-checklist";
import AdmissionParentPortal from "@admission-procedure/admission-parent-portal"; 
import AdmissionCertificateAuthentications from "@admission-procedure/admission-certificate-authentications";

export default function Procedure({
  KGG1Step1,
  KGG1Step2and3,
  KGG1Step4to8,
  G2AboveStep1,
  G2AboveStep2and3,
  G2AboveStep4to8,
}) {
  return (
    <div>
      <Head>
        <title>{SITE_NAME} | Admissions Procedure </title>
        <meta name="description" content={SITE_DESCRIPTION} />
        <link rel="icon" href={SITE_FAVICON} />
      </Head>

      <main>
        <h2 className="page-title">Admissions Procedure</h2>
        <section className="my-5 ">
          <Container> 

            <Tabs
              defaultActiveKey="kg-grade1"
              id="uncontrolled-tab-example"
              className="mx-auto"
              justify
            >
              <Tab
                eventKey="kg-grade1"
                title="KG & GRADE 1"
                className="homemenu "
              >
                <Row className="py-5 bg-asb-accent">
                  <Col>
                     <AdmissionChecklist />
                    {KGG1Step1.map((a, index) => (
                      <AdmissionSteps
                        key={index}
                        steps={a.steps}
                        description={a.description}
                      />
                    ))}

                    <AdmissionEmailInfo />

                    {KGG1Step2and3.map((a, index) => (
                      <AdmissionSteps
                        key={index}
                        steps={a.steps}
                        description={a.description}
                      />
                    ))}
                    <AdmissionParentPortal />
                    {KGG1Step4to8.map((a, index) => (
                      <AdmissionSteps
                        key={index}
                        steps={a.steps}
                        description={a.description}
                      />
                    ))}
                    <AdmissionCertificateAuthentications />
                  </Col>  
                </Row>
              </Tab>

              <Tab eventKey="grade2andabove" title="GRADE 2 & ABOVE">
                {/* <AdmissionGrade2andAbove /> */}
                 <Row className="py-5 bg-asb-accent">
                    <Col>
                    <AdmissionChecklist />
                    {G2AboveStep1.map((a, index) => (
                      <AdmissionSteps
                        key={index}
                        steps={a.steps}
                        description={a.description}
                      />
                    ))}

                    <AdmissionEmailInfo />

                    {G2AboveStep2and3.map((a, index) => (
                      <AdmissionSteps
                        key={index}
                        steps={a.steps}
                        description={a.description}
                      />
                    ))}
                    <AdmissionParentPortal />
                    {G2AboveStep4to8.map((a, index) => (
                      <AdmissionSteps
                        key={index}
                        steps={a.steps}
                        description={a.description}
                      />
                    ))}
                    <AdmissionCertificateAuthentications />
                  </Col>  
                </Row>  
              </Tab>
            </Tabs>
          </Container>
        </section>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const result = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master`,

    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.CONTENTFUL_DELIVERY_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `query {
          KGG1Step1: admissionProcedureStepsCollection(
            where: { grades_contains_all: "KG and Grade 1", steps: "Step 1" }
          ) {
            items {
              grades
              steps
              description {
                json
              }
            }
          }
          KGG1Step2and3: admissionProcedureStepsCollection(
            where: { grades_contains_all: "KG and Grade 1" }
            skip: 1
            limit: 2
            order: steps_ASC
          ) {
            items {
              grades
              steps
              description {
                json
              }
            }
          }
          KGG1Step4to8: admissionProcedureStepsCollection(
            where: { grades_contains_all: "KG and Grade 1" }
            order: steps_ASC
            skip: 3
          ) {
            items {
              grades
              steps
              description {
                json
              }
            }
          }
          G2AboveStep1: admissionProcedureStepsCollection(
            where: { grades_contains_all: "Grade 2 and Above", steps: "Step 1" }
          ) {
            items {
              grades
              steps
              description {
                json
              }
            }
          }
          G2AboveStep2and3: admissionProcedureStepsCollection(
            where: { grades_contains_all: "Grade 2 and Above" }
            skip: 1
            limit: 2
            order: steps_ASC
          ) {
            items {
              grades
              steps
              description {
                json
              }
            }
          }
          G2AboveStep4to8: admissionProcedureStepsCollection(
            where: { grades_contains_all: "Grade 2 and Above" }
            order: steps_ASC
            skip: 3
          ) {
            items {
              grades
              steps
              description {
                json
              }
            }
          }
        }
        `,
      }),
    }
  );

  if (!result.ok) {
    console.error(result);
    return {};
  }

  const { data } = await result.json();
  const KGG1Step1 = data.KGG1Step1.items;
  const KGG1Step2and3 = data.KGG1Step2and3.items;
  const KGG1Step4to8 = data.KGG1Step4to8.items;
  const G2AboveStep1 = data.G2AboveStep1.items;
  const G2AboveStep2and3 = data.G2AboveStep2and3.items;
  const G2AboveStep4to8 = data.G2AboveStep4to8.items;

  return {
    props: {
      KGG1Step1,
      KGG1Step2and3,
      KGG1Step4to8,
      G2AboveStep1,
      G2AboveStep2and3,
      G2AboveStep4to8,
    },
  };
}
