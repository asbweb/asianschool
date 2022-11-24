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
import StudentAchieversList from "../../data/student-achievers.json";
import GroupAchieversList from "../../data/group-achievers.json";
import RichTextBlock from "@display-items/rich-text-block";
import { useRouter } from 'next/router'

export default function Achievements({ KGG1Step1, KGG1Step2and3 }) {
  const router = useRouter()
  const canonicalSlug = router.asPath;
  console.log(canonicalSlug)

  return (
    <div>
      <Head>
        {/* <title>{ `${SITE_NAME} | Achievements` } </title> */}

        <title> Asian Scool Bahrain | Achievements </title>
        <meta name="description" content={SITE_DESCRIPTION} />
        <link rel="icon" href={SITE_FAVICON} />
        <link rel="canonical" href={`${BASE_PATH}${canonicalSlug}`}/>
      </Head>

      <main>
        <h2 className="page-title">Achievements</h2>
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
                title="Individual Students"
                className="homemenu "
              >

                
                <Row className="py-5 mx-0 bg-asb-accent">
                <h4 className="text-center my-3">CBSE Grade X Toppers 2015 - 2016</h4>
                  {StudentAchieversList.map((a, index) => (
                    <StudentAchievers
                      key={index}
                      profilPicture={a.profilPicture}
                      name={a.name}
                      achievement={a.achievement}
                    />
                  ))}
                </Row>
              </Tab>

              <Tab eventKey="grade2andabove" title="Team Achievers">
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

  return {
    props: {
      KGG1Step1,
      KGG1Step2and3,
    },
  };
}
