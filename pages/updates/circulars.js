import { SITE_NAME, SITE_FAVICON, SITE_DESCRIPTION,  imgblurDataURL, HOME_OG_IMAGE_URL } from "../../lib/constants";
import Head from "next/head";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import CircularsList from "../../data/circular.json";
import CircularsTable from "../../components/display-items/circulars-table";

export default function Circulars() {
  return (
    <div>
      <Head>
        <title>{ SITE_NAME } </title>
        <meta name="description" content={SITE_DESCRIPTION} />
        <link rel="icon" href={SITE_FAVICON} />
      </Head>

      <main>
        <h2 className="page-title">Circulars</h2>
        <section className="my-5">
          <Container>
            <Col md={8} className="mx-auto">
              <CircularsTable />

              {/* <Table striped hover className="text-center">
                <thead>
                  <tr className="bg-asb-main text-white">
                    <th>DATE PUBLISHED</th>
                    <th>VIEW CIRCULAR</th>
                  </tr>
                </thead>
                <tbody>
                  {CircularsList.circulars.map((circular, index) => (
                    <tr key={index}>
                      <td>{circular.date}</td>
                      <td>
                        <Link href={circular.URL}>
                          <a
                            className="resource-link"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                          <strong>{circular.title}</strong>                            
                          </a>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table> */}
            </Col>
          </Container>
        </section>
      </main>
    </div>
  );
}
