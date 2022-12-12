import React from "react";
import {
  SITE_NAME,
  SITE_FAVICON,
  SITE_DESCRIPTION,
  imgblurDataURL,
  HOME_OG_IMAGE_URL,
  BASE_PATH,
} from "../../lib/constants";
import Head from "next/head";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import StudentAchievers from "../../components/achievements/student-achievers";
import GroupAchievers from "../../components/achievements/group-achievers";
// import StudentAchieversList from "../../data/student-achievers.json";
import Toppers10 from "@data/toppers-10.json";
import Toppers12 from "@data/toppers-12.json";
import GroupAchieversList from "../../data/group-achievers.json";
import { useRouter } from "next/router";

export default function Achievements() {
  const router = useRouter();
  const canonicalSlug = router.asPath;
  const grade10toppers = Toppers10.grade10toppers.sort(function (a, b) {return a.weight - b.weight}); 
  const grade1095AndAbove = Toppers10.grade1095AndAbove.sort(function (a, b) {return a.weight - b.weight});
  const grade10SubjectToppers = Toppers10.grade10SubjectToppers.sort(function (a,b) {return a.weight - b.weight});
  const grade12Humanities = Toppers12.grade12Humanities.sort(function (a, b) {return a.weight - b.weight});
  const grade12Commerce = Toppers12.grade12Commerce.sort(function (a, b) {return a.weight - b.weight});
  const grade12Science = Toppers12.grade12Science.sort(function (a, b) {return a.weight - b.weight});
  const grade12FullA1 = Toppers12.grade12FullA1.sort(function (a, b) {return a.weight - b.weight});
  const grade12SubjectToppers = Toppers12.grade12SubjectToppers.sort(function (a,b) { return a.weight - b.weight});

  return (
    <div>
      <Head>
        {/* <title>{ `${SITE_NAME} | Achievements` } </title> */}

        <title> Asian Scool Bahrain | Achievements </title>
        <meta name="description" content={SITE_DESCRIPTION} />
        <link rel="icon" href={SITE_FAVICON} />
        <link rel="canonical" href={`${BASE_PATH}${canonicalSlug}`} />
      </Head>

      <main>
        <h2 className="page-title">Achievements</h2>
        <section className="my-5 ">
          <Container>
            <Tabs
              defaultActiveKey="individual"
              id="uncontrolled-tab-example"
              className="mx-auto"
              justify
            >
              <Tab
                eventKey="individual"
                title="Individual"
                className="homemenu "
              >
                <Row className="py-5 mx-0 bg-asb-accent">
                  <h4 className="text-center my-3">SCHOOL TOPPERS 2021-2022</h4>
                  {/* {StudentAchieversList.map((a, index) => (
                    <StudentAchievers
                      key={index}
                      profilPicture={a.profilPicture}
                      name={a.name}
                      achievement={a.achievement}
                      weight={a.weight}
                      rank={a.rank}
                      aggregate={a.aggregate}
                    />
                  ))} */}

                  <h4 className="text-center text-uppercase my-3">GRADE 10</h4>

                  {grade10toppers.map((a, index) => (
                    <StudentAchievers
                      key={index}
                      profilPicture={a.profilPicture}
                      name={a.name}
                      achievement={a.achievement}
                      weight={a.weight}
                      rank={a.rank}
                      aggregate={a.aggregate}
                    />
                  ))}

                  <h4 className="text-center text-uppercase my-3">
                    STUDENTS WHO SCORED 95% AND ABOVE
                  </h4>

                  {grade1095AndAbove.map((a, index) => (
                    <StudentAchievers
                      key={index}
                      profilPicture={a.profilPicture}
                      name={a.name}
                      achievement={a.achievement}
                      weight={a.weight}
                      rank={a.rank}
                      aggregate={a.aggregate}
                    />
                  ))}

                  <h4 className="text-center text-uppercase my-3">SUBJECT TOPPERS</h4>
                  {grade10SubjectToppers.map((a, index) => (
                    <StudentAchievers
                      key={index}
                      profilPicture={a.profilPicture}
                      name={a.name}
                      achievement={a.achievement}
                      weight={a.weight}
                      rank={a.rank}
                      aggregate={a.aggregate}
                    />
                  ))}

                  {/* ************ */}

                  <h4 className="text-center text-uppercase my-3">Grade 12 </h4>
                  <h4 className="text-center text-uppercase my-3"> Humanities</h4>

                  {grade12Humanities.map((a, index) => (
                    <StudentAchievers
                      key={index}
                      profilPicture={a.profilPicture}
                      name={a.name}
                      achievement={a.achievement}
                      weight={a.weight}
                      rank={a.rank}
                      aggregate={a.aggregate}
                    />
                  ))}

                  <h4 className="text-center text-uppercase my-3">Commerce</h4>

                  {grade12Commerce.map((a, index) => (
                    <StudentAchievers
                      key={index}
                      profilPicture={a.profilPicture}
                      name={a.name}
                      achievement={a.achievement}
                      weight={a.weight}
                      rank={a.rank}
                      aggregate={a.aggregate}
                    />
                  ))}

                  <h4 className="text-center text-uppercase my-3">Science</h4>
                  {grade12Science.map((a, index) => (
                    <StudentAchievers
                      key={index}
                      profilPicture={a.profilPicture}
                      name={a.name}
                      achievement={a.achievement}
                      weight={a.weight}
                      rank={a.rank}
                      aggregate={a.aggregate}
                    />
                  ))}

                  <h4 className="text-center text-uppercase my-3">STUDENTS WHO SCORED A1 IN ALL SUBJECTS</h4>
                  {grade12FullA1.map((a, index) => (
                    <StudentAchievers
                      key={index}
                      profilPicture={a.profilPicture}
                      name={a.name}
                      achievement={a.achievement}
                      weight={a.weight}
                      rank={a.rank}
                      aggregate={a.aggregate}
                    />
                  ))}

                  <h4 className="text-center text-uppercase my-3">Subject Toppers</h4>
                  {grade12SubjectToppers.map((a, index) => (
                    <StudentAchievers
                      key={index}
                      profilPicture={a.profilPicture}
                      name={a.name}
                      achievement={a.achievement}
                      weight={a.weight}
                      rank={a.rank}
                      aggregate={a.aggregate}
                    />
                  ))}
                </Row>
              </Tab>

              {/* **********************************Team****************************************** */}

              <Tab eventKey="grade2andabove" title="Team">
                <Row className="py-5 mx-0 bg-asb-accent">
                  {GroupAchieversList.map((a, index) => (
                    <GroupAchievers
                      key={index}
                      profilPicture={a.profilPicture}
                      name={a.name}
                      col={a.col}
                      achievement={a.achievement}
                    />
                  ))}
                </Row>
              </Tab>
            </Tabs>
          </Container>
        </section>
      </main>
    </div>
  );
}

// export async function getStaticProps() {
//   const result = await fetch(
//     `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master`,

//     {
//       method: "POST",
//       headers: {
//         Authorization: `Bearer ${process.env.CONTENTFUL_DELIVERY_TOKEN}`,
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         query: `query {
//           KGG1Step1: admissionProcedureStepsCollection(
//             where: { grades_contains_all: "KG and Grade 1", steps: "Step 1" }
//           ) {
//             items {
//               grades
//               steps
//               description {
//                 json
//               }
//             }
//           }
//           KGG1Step2and3: admissionProcedureStepsCollection(
//             where: { grades_contains_all: "KG and Grade 1" }
//             skip: 1
//             limit: 2
//             order: steps_ASC
//           ) {
//             items {
//               grades
//               steps
//               description {
//                 json
//               }
//             }
//           }
//         }
//         `,
//       }),
//     }
//   );

//   if (!result.ok) {
//     console.error(result);
//     return {};
//   }

//   const { data } = await result.json();
//   const KGG1Step1 = data.KGG1Step1.items;
//   const KGG1Step2and3 = data.KGG1Step2and3.items;

//   return {
//     props: {
//       KGG1Step1,
//       KGG1Step2and3,
//     },
//     revalidate: 60,
//   };
// }
