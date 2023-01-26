import { SITE_NAME, SITE_FAVICON, SITE_DESCRIPTION,  imgblurDataURL, HOME_OG_IMAGE_URL } from "../../lib/constants";
import React from "react";
import Head from "next/head";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

export default function Discipline() {
  return (
    <>
      <Head>
        {/* <title>{ SITE_NAME } | Discipline </title> */}
        <title> Asian Scool Bahrain |  Discipline </title>
        <meta name="description" content={SITE_DESCRIPTION} />
        <link rel="icon" href={SITE_FAVICON} />
      </Head>

      <main>
        <h2 className="page-title">Discipline</h2>
        <section className="my-5">
          <Container>
            <Col md={10} className="mb-5">
              <figure className="text-center">
                <blockquote className="blockquote">
                  <h2 className="text-end">
                    <em>
                      “True freedom is impossible without a mind made free by
                      discipline.”
                    </em>
                  </h2>
                </blockquote>

                <h2>
                  <figcaption className="text-end blockquote-footer">
                    <cite title="Source Title">Mortimer J Adler</cite>
                  </figcaption>
                </h2>
              </figure>
            </Col>

            <Col md={10} className="mb-5 mx-auto">
              <p>
                If education is to be imparted to a child, discipline is key.
                Hence the school accords optimal importance to values which
                build up discipline.
              </p>
              <ul>
                <li>
                  Students should strictly adhere to the following rules and
                  regulations of the school.
                </li>
                <li>Respect your teachers and fellow students.</li>
                <li>Remain indoors in the absence of a teacher.</li>
                <li>
                  A student sent out of class for any purpose should have with
                  him/her a pass from the teacher of that particular period.
                </li>
                <li>
                  Class room furniture should be kept neat and clean. Any damage
                  done to school property will result in a fine and the cost of
                  repair to the damaged property.
                </li>
                <li>
                  Defacing doors and walls, damaging toilet fixtures and chewing
                  gum in school is strictly prohibited.
                </li>
                <li>
                  Students are not allowed to carry USB drives, CDs, DVDs,
                  tablets, mobile phones, cameras, any electronic device or any
                  other contraband items to school. If found, it will be
                  confiscated.
                </li>
                <li>
                  Students should refrain from carrying or circulating any
                  novels, religious books or any type of literature other than
                  the school text books.
                </li>
                <li>
                  Students are strictly required to speak in the English
                  language while in school, except during the second or third
                  language classes.
                </li>
                <li>
                  Use of abusive language, disobedience to authority, quarrels
                  or any kind of misbehaviour is condemned by the school and
                  will be dealt with appropriately.
                </li>
                <li>
                  Cybercrimes such as the use of abusive language online,
                  posting of derogatory matter related to the school, class and
                  school mates or staff on the internet will be strictly dealt
                  with and will be liable for punishment.
                </li>
                <li>
                  In an effort to circumvent any untoward incident, school
                  authorities can and will search any student and his/her
                  belongings.
                </li>
              </ul>
              <p>
                Discipline is a matter of paramount importance for the school
                and hence has instituted a Discipline committee to redress
                issues.
              </p>
              <p>
                The discipline committee, in consultation with the Principal
                will be responsible for initiating any disciplinary action.
              </p>
              <p>
                Counseling is given to students who indulge in indiscipline.
                Regular defaulters are warned.
              </p>
              <p>
                When students repeatedly indulge in indiscipline, parents will
                be called. If parents do not turn up after repeated reminders,
                then the school will take appropriate action and the school’s
                decision will be final and binding.
              </p>
              <p>
                Extreme cases of indiscipline will lead to suspension/expulsion.
              </p>
            </Col>
          </Container>
        </section>
      </main>
    </>
  );
}
