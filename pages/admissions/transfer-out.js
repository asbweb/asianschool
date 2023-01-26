import {
  SITE_NAME,
  SITE_FAVICON,
  SITE_DESCRIPTION,
  imgblurDataURL,
  HOME_OG_IMAGE_URL,
} from "../../lib/constants";
import React, { useMemo } from "react";
import Link from "next/link";
import Head from "next/head";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import { Icon } from "@iconify/react";
import TransferOutTable from "@transfer-out/transfer-out-table";
import DateFormatter from "@display-items/date-formatter"; 
import RichTextBlock from "@display-items/rich-text-block"
import CustomToggle from "@buttons/custom-toggle"

export default function TransferOut({
  contentCollection,
  transferCertificatesCollection,
}) {
  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Scholar Number",
        accessor: "scholarNumber",
      },
      {
        Header: "Grade",
        accessor: "grade",
      },
      {
        Header: "Last Date",
        accessor: "lastAttendanceDate",
        Cell: ({ value }) => {
          return <DateFormatter dateString={value} />;
        },
      },
      {
        Header: "Download",
        accessor: "url",
        Cell: ({ value }) => {
          return (
            <Link href={value.url}  target="_blank">
                <Icon icon="bi:download" width={15} />{" "} 
            </Link>
          );
        },
      },
    ],
    []
  );
  const data = useMemo(
    () => transferCertificatesCollection,
    [transferCertificatesCollection]
  );

  return (
    <div>
      <Head>
        {/* <title>{SITE_NAME} | Transfer Out </title> */}
        <title> The Asian School Bahrain |  Transfer Out </title>
        <meta name="description" content={SITE_DESCRIPTION} />
        <link rel="icon" href={SITE_FAVICON} />
      </Head>

      <main>
        <h2 className="page-title">Transfer Out</h2>
        <section>
          <Container>
            {contentCollection.map((a) => ( 
              <RichTextBlock key={a.sys.id} description={a.description} />
            ))}
          </Container>
        </section>

        <section className="my-5 py-5">
          <Accordion>
            <Card className="rounded-0">
              <Card.Header className="bg-asb-accent rounded-0">
                <CustomToggle eventKey="4">Transfer Certificates</CustomToggle>
              </Card.Header>
              <Accordion.Collapse eventKey="4">
                <Card.Body>
                  <Col md={8} className="mx-auto">
                    <TransferOutTable columns={columns} data={data} />
                  </Col>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </section>
      </main>
    </div>
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
        query: `query {
          contentCollection (
            limit: 1
            where: { title: "Transfer Out" }
          ) {
            items {
              sys{
                id
              }
              title
              subtitle
              description {
                json
              }
            }
          }
          transferCertificatesCollection {
            items {
              name
              scholarNumber
              grade
              lastAttendanceDate
              url {
                url
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
  const contentCollection = data.contentCollection.items;
  const transferCertificatesCollection =
    data.transferCertificatesCollection.items;

  return {
    props: {
      contentCollection,
      transferCertificatesCollection,
    },
    revalidate: 60,
  };
}
