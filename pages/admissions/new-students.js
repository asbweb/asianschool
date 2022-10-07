import Head from "next/head";
import Container from "react-bootstrap/Container";  
import NewStudentsMenu from "../../components/new-students/new-students-menu"

export default function NewStudents() { 

  return (
    <div>
      <Head>
        <title>Asian Scool Bharain</title>
        <meta name="description" content="Asian Scool Bharain" />
        <link rel="icon" href="/images/asbfavicon.png" />
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