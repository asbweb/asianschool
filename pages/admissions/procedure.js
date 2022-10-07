import Head from "next/head";
import Container from "react-bootstrap/Container";
import AdmissionMenu from "../../components/admission-procedure/admission-menu"

export default function Procedure() {
  return (
    <div>
      <Head>
        <title>Asian Scool Bharain</title>
        <meta name="description" content="Asian Scool Bharain" />
        <link rel="icon" href="/images/asbfavicon.png" />
      </Head>

      <main>
        <h2 className="page-title">Admissions Procedure</h2>
        <section className="my-5 ">
          <Container> 
          <AdmissionMenu />
          </Container>
        </section>
      </main>
    </div>
  );
}
