import Head from "next/head"; 
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"; 
import NewsletterList from "../../data/newletter.json";
import NewsletterItem from "../../components/display-items/newsletter-item";

export default function SchoolNewsletter() {
  return (
    <div>
      <Head>
        <title>Asian Scool Bharain</title>
        <meta name="description" content="Asian Scool Bharain" />
        <link rel="icon" href="/images/asbfavicon.png" />
      </Head>

      <main>
      <h2 className="page-title">School Newsletter</h2> 
        <section className="my-5">
          <Container>
            <Col md={10} className="mx-auto">
              <Row>
                {NewsletterList.newsletters.map((a, index) => (
                  <Col md={4} key={index} className="text-center p-1 mb-5">
                    <NewsletterItem
                      title={a.title}
                      URL={a.URL}
                      btnicon={a.btnicon}
                      btntext={a.btntext}
                    />
                  </Col>
                ))}
              </Row>
            </Col>
          </Container>
        </section>
      </main>
    </div>
  );
}