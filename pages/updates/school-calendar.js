import { SITE_NAME, SITE_FAVICON, SITE_DESCRIPTION,  imgblurDataURL, HOME_OG_IMAGE_URL } from "../../lib/constants";
import Head from "next/head";
import Container from "react-bootstrap/Container";

export default function Admission() {
  return (
    <div>
      <Head>
        {/* <title>{ SITE_NAME } | School Calendar </title> */}
        <title> Asian Scool Bahrain | School Calendar </title>
        <meta name="description" content={SITE_DESCRIPTION} />
        <link rel="icon" href={SITE_FAVICON} />
      </Head>

      <main>
      <h2 className="page-title">School Calendar</h2> 
        <section className="my-5">
          <Container>
            <iframe
              src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FKolkata&showTitle=0&showPrint=0&src=YXNid2ViMjYzQGdtYWlsLmNvbQ&color=%23039BE5"
              style={{ borderWidth: "0" }}
              width="100%"
              height="800"
              frameBorder="0"
              scrolling="no"
            ></iframe>
          </Container>
        </section>
      </main>
    </div>
  );
}
