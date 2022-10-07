import Link from "next/link";
import Head from "next/head";
import { useRouter } from 'next/router';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import EventsCard from "../../../components/events/events-card";
import EventsList from "../../../components/events/events-list"; 



export default function Events({ events }) { 
  
   
  return (
    <>
      <Head>
        <title>Asian Scool Bharain | Events</title>
        <meta name="description" content="Asian Scool Bharain" />
        <link rel="icon" href="/images/asbfavicon.png" />
      </Head>

      <main>
        <h2 className="page-title">Events</h2>
        <Container className="my-5"> 
            
 

          <Row>
            {events.map((event) => (
              <Col md={4} key={event.slug} className="events-card ">
                <Link href={`/student-life/events/${event.slug}`}>
                  <a>
                    <EventsCard
                      title={event.title}
                      date={event.date}
                      featuredImage={event.featuredImage.url}
                    />
                  </a>
                </Link>
              </Col>
            ))}
          </Row>
         </Container>
       </main>
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
        query: `
        query {
            eventCollection (order: date_ASC) {
              items {
                sys {
                  id
                }
                title
                slug
                year
                date 
                featuredImage {
                  url
                  title
                  description
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
  const events = data.eventCollection.items;

  return {
    props: { events },
  };
}
