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
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion"; 
import SchoolProfile from "@profile/school-profile";
import SchoolCrestMotto from "@profile/school-crest-motto";
import SchoolVision from "@profile/school-vision";
import SchoolSong from "@profile/school-song"; 
import CustomToggle from "@buttons/custom-toggle"

export default function Profile({
  About,
  SchoolCrest,
  VisionMission,
  SchoolSongs,
}) {
 
  return (
    <>
      <Head> 
        {/* <title> Asian Scool Bahrain | Profile </title> */}
        <title> Asian Scool Bahrain |  Profile </title>
        <meta name="description" content={SITE_DESCRIPTION} />
        <link rel="icon" href={SITE_FAVICON} />
      </Head>

      <h2 className="page-title">Profile</h2>
      {/* <section className="my-5">
        <Container>
          <Col md={10} className="mx-auto">
            {About.map((a, index) => (
              <SchoolProfile
                key={index}
                title={a.title}
                image={a.image.url}
                description={a.description}
                btntext={a.btntext}
                pdf={a.pdf}
                btnIcon={a.btnIcon}
                btnText={a.btnText}
              />
            ))}
          </Col>
        </Container>
      </section> */}

      <section className="my-5">
        <Accordion  >
          <Card className="rounded-0">
            <Card.Header className="bg-asb-accent text-uppercase">
              <CustomToggle eventKey="0">School Crest & Motto</CustomToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                {SchoolCrest.map((a, index) => (
                  <SchoolCrestMotto
                    key={index}
                    image={a.image.url}
                    description={a.description}
                  />
                ))}
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="rounded-0">
            <Card.Header className="bg-asb-accent rounded-0">
              <CustomToggle eventKey="1">Vision & Mission</CustomToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <Container className="py-5">
                  <Col md={10} className="mx-auto">
                    {VisionMission.map((a, index) => (
                      <SchoolVision
                        key={index}
                        title={a.title}
                        description={a.description}
                      />
                    ))}
                  </Col>
                </Container>
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card className="rounded-0">
            <Card.Header className="bg-asb-accent rounded-0">
              <CustomToggle eventKey="2">School Song</CustomToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                <Container className="py-5">
                  <Col md={10} className="mx-auto"> 
                    {SchoolSongs.map((a, index) => (
                      <SchoolSong
                        key={index}
                        title={a.title}
                        description={a.description}
                      />
                    ))}
                  </Col>
                </Container>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </section>
    </>
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
          About: contentCollection(where: { title: "About the School" }) {
            items {
              sys {
                id
              }
              title
              image {
                url
              }
              description {
                json
              }
              btnText
              btnLink
              btnIcon
              pdf {
                url
              }
            }
          }
          SchoolCrest: contentCollection(where: { title: "School Crest & Motto" }) {
            items {
              sys {
                id
              }
              title
              image {
                url
              }
              description {
                json
              }
            }
          }
          VisionMission: contentCollection(where: { title: "Vision & Mission" }) {
            items {
              sys {
                id
              }
              title
              image {
                url
              }
              description {
                json
              }
            }
          }
          SchoolSongs: contentCollection(where: { title: "School Song" }) {
            items {
              sys {
                id
              }
              title
              image {
                url
              }
              description {
                json
              }
            }
          }
        }`,
      }),
    }
  );

  if (!result.ok) {
    console.error(result);
    return {};
  }

  const { data } = await result.json();
  const About = data.About.items;
  const SchoolCrest = data.SchoolCrest.items;
  const VisionMission = data.VisionMission.items;
  const SchoolSongs = data.SchoolSongs.items;

  return {
    props: {
      About,
      SchoolCrest,
      VisionMission,
      SchoolSongs,
    },
  };
}
