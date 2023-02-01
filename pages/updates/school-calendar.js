import { SITE_NAME, SITE_FAVICON, SITE_DESCRIPTION,  imgblurDataURL, HOME_OG_IMAGE_URL } from "../../lib/constants";
import Head from "next/head";
import Container from "react-bootstrap/Container";

export default function Admission() {
  return (
    <div>
      <Head>
        {/* <title>{ SITE_NAME } | School Calendar </title> */}
        <title> The Asian School Bahrain | School Calendar </title>
        <meta name="description" content={SITE_DESCRIPTION} />
        <link rel="icon" href={SITE_FAVICON} />
      </Head>

      <main>
      <h2 className="page-title">School Calendar</h2> 
        <section className="my-5">
          <Container>
            <iframe
              src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23D47A0C&ctz=Asia%2FQatar&src=aW5mb0Bhc2lhbnNjaG9vbC5iaA&color=%23039BE5" 
              style={{ borderWidth: "0" }}
              width="100%"
              height="800"
            ></iframe> 
          </Container>
        </section>
      </main>
    </div>
  );
}
