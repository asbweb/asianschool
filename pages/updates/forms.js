import React from "react";
import Head from "next/head"; 
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"; 
import FormsList from "../../data/forms.json";
import FormsItem from "../../components/display-items/forms-item";

export default function Forms() {
  return (
    <>
      <Head>
        <title>Asian Scool Bharain</title>
        <meta name="description" content="Asian Scool Bharain" />
        <link rel="icon" href="/images/asbfavicon.png" />
      </Head>
      <h2 className="page-title">Forms</h2> 
      <section className="my-5">
        <Container>
          <h5 className="text-center">
            Form should be downloaded and a hard copy with all details filled in
            should be submitted to the school office.
          </h5>
          <Row>
            {FormsList.forms.map((a, index) => (
              <FormsItem
                key={index}
                icon={a.icon}
                title={a.title}
                subtitle={a.subtitle}
                btnicon={a.btnicon}
                btntext={a.btntext}
                URL={a.URL}
              />
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}