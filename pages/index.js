import {
  SITE_NAME,
  SITE_FAVICON,
  SITE_DESCRIPTION,
  imgblurDataURL,
  HOME_OG_IMAGE_URL,
} from "../lib/constants";
import Head from "next/head";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ListGroup from "react-bootstrap/ListGroup";
import QuickLinks from "@home-page/quick-links"; 
import HomeHero from "@home-page/home-hero";
import HomeAbout from "@home-page/home-about";
import Carousel from "react-bootstrap/Carousel";
import UpdatesModal from "@display-items/updates-modal";
import HomeVideo from "@display-items/home-video"; 

export default function Home({
  homeSliderCollection,
  updatesModal,
  parents,
  students,
  abouttheSchool,
}) {
  return (
    <div>
      <Head>
        <title>{SITE_NAME}</title>
        <meta name="description" content={SITE_DESCRIPTION} />
        <link rel="icon" href={SITE_FAVICON} />
      </Head>

      <main>
        {/* <UpdatesModal
          title={updatesModal.title}
          description={updatesModal.description}
          btnText={updatesModal.btnText}
        /> */}
        <UpdatesModal
          title={updatesModal.title}
          display={updatesModal.display}
          description={updatesModal.description}
          imageWidth={updatesModal.imageWidth}
          image={updatesModal.image.url}
          url={updatesModal.url}
          link={updatesModal.link}
          btnText={updatesModal.btnText}
          displayBtn={updatesModal.displayBtn}
        />

        <Container fluid className="gx-0">
          <Carousel fade indicators={false} interval={1500}>
            {homeSliderCollection.map((a, index) => (
              <Carousel.Item key={index}>
                <HomeHero
                  image={a.image.url}
                  title={a.title}
                  btntext={a.btntext}
                  btnicon={a.btnicon}
                  link={a.link}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
        <h2 className="text-center text-uppercase my-5">
          Welcome to The ASIAN School, Bahrain
        </h2>

        <section className="my-5">
          <Container fluid>
            <Col md={8} className="mx-auto">
              <Tabs
                defaultActiveKey="parents"
                id="uncontrolled-tab-example"
                className="mx-auto"
                justify
              >
                <Tab eventKey="parents"
                  title="parents"
                  className="homemenu"
                >
                  <ListGroup
                    horizontal
                    className="d-flex flex-wrap justify-content-evenly border-0 rounded-0 p-2 p-lg-5 bg-asb-accent"
                  >
                    {parents.map((a, index) => (
                      <QuickLinks
                        key={index}
                        url={a.url}
                        text={a.text}
                        target={a.target}
                        iconWidth={a.iconWidth}
                        btnIcon={a.btnIcon}
                      />
                    ))}
                  </ListGroup>
                </Tab>
                <Tab eventKey="students"
                  title="students"
                  className="homemenu"
                >
                  <ListGroup
                    horizontal
                    className="d-flex flex-wrap justify-content-evenly border-0 rounded-0 p-2 p-lg-5 bg-asb-accent"
                  >
                    {students.map((a, index) => (
                      <QuickLinks
                        key={index}
                        url={a.url}
                        text={a.text}
                        type={a.type}
                        iconWidth={a.iconWidth}
                        btnIcon={a.btnIcon}
                      />
                    ))}
                  </ListGroup>
                </Tab>
              </Tabs>
              {/* <HomeMenu /> */}
            </Col>
          </Container>
        </section>

        <section className="my-5 py-5">
          <Container>
            <Col md={10} className="mx-auto">
              <HomeAbout
                title={abouttheSchool.title}
                description={abouttheSchool.description}
              />
              <HomeVideo/>
            </Col>
          </Container>
        </section>
      </main>
    </div>
  );
}

export async function getStaticProps(context) {
  // console.log("context: ", context)
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
          homeSliderCollection(order: weight_ASC) {
            items {
              title
              btntext
              link
              image {
                url
                width
                height
              }
            }
          }
          updatesModal: updatesModal(id: "2oOLDEdhgPSotCNO7tuUTW") {
            ...updates
          }
          parents: quickLinksCollection(
            where: { type_contains: "parents" }
            order: weight_ASC
          ) {
            ...quicklinks
          }
          students: quickLinksCollection(
            where: { type_contains: "students" }
            order: weight_ASC
          ) {
            ...quicklinks
          }
          abouttheSchool: content(id: "7lOeOQSvBctAjpWqxNr4Z") {
            title
            description {
              json
            }
          }
        }
        fragment quicklinks on QuickLinksCollection {
          items {
            text
            type
            weight
            target
            btnIcon
            iconWidth
            url
          }
        }
        fragment updates on UpdatesModal {
          title
          display
          displayBtn
          imageWidth
          image {
            url
            title
            width
            height
          }
          url {
            url
          }
          link
          btnText
          description {
            json
            links{
              assets{
                block{
                  sys{
                    id
                  }
                  url
                  width
                  height
                  description
                }
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
  const homeSliderCollection = data.homeSliderCollection.items;
  const updatesModal = data.updatesModal;
  const parents = data.parents.items;
  const students = data.students.items;
  const abouttheSchool = data.abouttheSchool;

  return {
    props: {
      homeSliderCollection,
      updatesModal,
      parents,
      students,
      abouttheSchool,
    },
    revalidate: 60,
  };
}



// updatesModal: content(id: "PPWsvSLv2VCb2Z0ZyE8Ul") {
//   title
//   btnText
//   description {
//     json
//   }
// }
