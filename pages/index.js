import Head from "next/head"; 
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import HomeMenu from "../components/home-page/home-menu";
import HomeHero from "../components/home-page/home-hero";
import HomeAbout from "../components/home-page/home-about"; 

export default function Home() {
  return (
    <div>
      <Head>
        <title>Asian Scool Bharain</title>
        <meta name="description" content="Asian Scool Bharain" />
        <link rel="icon" href="/images/asbfavicon.png" />
      </Head>

      <main>
        <HomeHero />

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
