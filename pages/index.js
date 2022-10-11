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
import HomeMenu from "../components/home-page/home-menu";
import HomeHero from "../components/home-page/home-hero";
import HomeAbout from "../components/home-page/home-about"; 
import Carousel from "react-bootstrap/Carousel";

export default function Home({homeSliderCollection}) {
  return (
    <div>
      <Head>
        <title>{SITE_NAME} </title>
        <meta name="description" content={SITE_DESCRIPTION} />
        <link rel="icon" href={SITE_FAVICON} />
      </Head>

      <main>
        <Container fluid className="gx-0">
          <Carousel fade indicators={false} interval={1500}>
            {homeSliderCollection.map((a, index) => (
              <Carousel.Item key={index}>
                <HomeHero
                  image={a.image.url}
                  title={a.title}
                  btntext={a.btntext}
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
              <HomeMenu />
            </Col>
          </Container>
        </section>

        <section className="my-5 py-5">
          <Container>
            <Col md={10} className="mx-auto">
              <HomeAbout />
            </Col>
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
        query: `
        query {
          homeSliderCollection {
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

  return {
    props: {
      homeSliderCollection,
    },
  };
}
