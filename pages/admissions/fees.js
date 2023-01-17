import { SITE_NAME, SITE_FAVICON, SITE_DESCRIPTION,  imgblurDataURL, HOME_OG_IMAGE_URL } from "../../lib/constants";
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
        <title> Asian Scool Bahrain |  Fees </title>
        <meta name="description" content={SITE_DESCRIPTION} />
        <link rel="icon" href={SITE_FAVICON} />
      </Head>

      <main>
        <h2 className="page-title">Fees</h2>

        <section className="my-5">
          <Container>
            <h5 className="text-center">
              There are 4 types of fees payable and the details of each are
              outlined below
            </h5>
            <Row className="text-center my-5">
              {FeesTypeList.map((a, index) => (
                <FeesTypeItem key={index} title={a.title} text={a.text} 
                // feesamount={a.feesamount} 
                />
              ))}
            </Row>

            <Table size="sm" striped bordered hover responsive>
              <thead>
                <tr className="bg-asb-main text-white">
                  <th scope="col"> </th>
                  <th scope="col">Admission Fee</th>
                  <th scope="col">Annual Fee</th>
                  <th scope="col">Tuition Fee</th>
                  <th scope="col">Transport Fee</th>
                </tr>
              </thead>
              <tbody>
                {FeesList.map((a, index) => (
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
              <small>
                * Admission Fee is not applicable to Grade 10 students of the
                The Asian School who join Grade 11
              </small>
            </p>
          </Container>
        </section>

        <section className="my-5 py-5 bg-light">
          <Container>
            <h5>REFUNDABLE DEPOSIT</h5>
            <p>
              At the time of admission, an interest free refundable deposit of
              BD. 30/- has to be paid. This amount will be refunded when the
              child leaves the school after clearing all outstanding dues if
              any, to the school.
            </p>
          </Container>
        </section>

        <section className="my-5 py-5">
          <Container>
            <h5>FEE PAYMENT GUIDELINES</h5>
            <ul>
              <li>
                In the first month of every academic year, the Annual Fee,
                Tuition Fee and Transport Fee needs to be paid. Thereafter, the
                Tuition Fee and the Transport Fee have to be paid on or before
                the 10th of every month.
              </li>
              <li>
                If fees are not paid for a period of two months the defaulter’s
                name will be struck off from the school register hence making
                the student ineligible to attend classes. BD. 5/- will be
                charged if re-admission is granted. In such cases, all pending
                dues along with fees for the month of re-admission have to be
                paid.
              </li>
              <li>
                All payments are to be made at the school office between 7:15
                a.m. and 2:00 p.m. or via the school approved third party vendor
                and a receipt should be obtained. The school will not be
                responsible for any claim of payment without a proper receipt.
              </li>
              <li>
                Parents are requested to not send fees with small children.
                School authorities will not bear responsibility for loss of
                money sent through children and the parents alone will be fully
                responsible for any such loss.
              </li>
              <li>
                Contrary to this rule, if parents send the fees with their
                children, they must remit the exact amount at the counter and
                get a proper receipt. No money should be handed over to any
                employee of the School other than the cashier at the counter.
              </li>
              <li>
                Fees can be paid by a crossed cheque drawn in favor of “The
                Asian School”. Post-dated cheques will not be accepted. Credit /
                Debit cards and payment wallets will not be accepted.
              </li>
              <li>
                Students withdrawn during the term will be required to pay full
                fees for the remainder of the term.
              </li>
              <li>
                Fees for the month of March for Grades 8 to 12 students should
                be paid along with the February fees.
              </li>
              <li>
                In the case of an admission during the session, the full
                admission fee and all other fees will be charged.
              </li>
              <li>
                No reduction or refund of fees will be made on account of any
                holiday, leave or absence for any reason. Parents going on
                holiday with their children are required to pay tuition and
                transport fees in advance along with the leave application.
              </li>
              <li>
                Fees once collected will not be refunded under any
                circumstances.
              </li>
              <li>
                The result of the Half Yearly / Annual Examination will not be
                declared until all pending dues are cleared.
              </li>
              <li>
                Any original/duplicate Certificate will only be issued after all
                pending fees and other dues are cleared.
              </li>
              <li>
                Cost of books and other stationery are not included in the fees.
              </li> 
              <li>Part payments will not be accepted.</li>
              <li>
                In the beginning of the new academic year, second term or third
                term, if any student remains absent continuously for six days
                without a proper leave application, his/her name will be struck
                off from the school register and if re-admission is granted, a
                re-admission fee of BD. 5/- will be charged.
              </li>
            </ul>
          </Container>
        </section>
      </main>
    </>
  );
}
