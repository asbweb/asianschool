import { SITE_NAME, SITE_FAVICON, SITE_DESCRIPTION,  imgblurDataURL, HOME_OG_IMAGE_URL } from "../../lib/constants";
import Head from "next/head";
import Container from "react-bootstrap/Container";  
import NewStudentsMenu from "../../components/new-students/new-students-menu"

export default function NewStudents() { 

  return (
    <div>
      <Head>
        <title>{ SITE_NAME } </title>
        <meta name="description" content={SITE_DESCRIPTION} />
        <link rel="icon" href={SITE_FAVICON} />
      </Head>

      <main>
      <h2 className="page-title">New Students</h2>
        <section className="my-5">
        <Container>
        <NewStudentsMenu/>
        </Container>
        </section>
      </main>
    </div>
  );
}