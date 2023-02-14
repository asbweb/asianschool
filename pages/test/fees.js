import {
  SITE_NAME,
  SITE_FAVICON,
  SITE_DESCRIPTION,
  imgblurDataURL,
  HOME_OG_IMAGE_URL,
} from "../../lib/constants";
import Head from "next/head";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";
import FeesTypeItem from "@fees/fees-type-item";
import FeesTableItem from "@fees/fees-table-item";
import FeesTypeList from "@data/fees/fees-types.json";
import FeesList from "@data/fees/fees.json";

export default function Fees() {
  return (
    <>
      <Head>
        {/* <title>{ SITE_NAME } | Fees </title> */}
        <title> The Asian School Bahrain | Fees </title>
        <meta name="description" content={SITE_DESCRIPTION} />
        <link rel="icon" href={SITE_FAVICON} />
      </Head>

      <main>
        <h2 className="page-title">{FeesTypeList.title}</h2>

        <section className="my-5">
          <Container>
            <h5 className="text-center">{FeesTypeList.subtitle}</h5>
            <Row className="text-center my-5">
              {FeesTypeList.feestypes.map((a, index) => (
                <FeesTypeItem key={index} title={a.title} text={a.text} />
              ))}
            </Row>

            <Table size="sm" striped bordered hover responsive>
              <thead>
                <tr className="bg-asb-main text-white">
                  <th scope="col"> </th>
                  {FeesTypeList.feestypes.map((a, index) => (
                    <th key={index} scope="col">
                      {a.title}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {FeesTypeList.feesamt.map((a, index) => (
                  <FeesTableItem
                    key={index}
                    title={a.title}
                    col1={a.col1}
                    col2={a.col2}
                    col3={a.col3}
                    col4={a.col4}
                  />
                ))}
              </tbody>
            </Table>
            
            <p className="text-center fs-6">
              <small>{FeesTypeList.subtext1}</small> <br/>
              <small>{FeesTypeList.subtext2}</small>
            </p>
          </Container>
        </section>

        <section className="py-5 bg-light">
          <Container>
            <h5>{FeesTypeList.refundtitle}</h5>
            <p className="mb-0">{FeesTypeList.refundtext}</p>
          </Container>
        </section>

        <section className="py-5">
          <Container>
            <h5>{FeesTypeList.feeguidelines}</h5>
            <ul>
              {FeesTypeList.feeguidelinesitems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </Container>
        </section>
      </main>
    </>
  );
}
