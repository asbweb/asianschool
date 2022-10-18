import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ListGroup from "react-bootstrap/ListGroup";
import QuickLinksItems from "@data/quick-links.json";
import QuickLinks from "./quick-links"; 

export default function HomeMenu() {
  return (
    <>
      <Tabs
        defaultActiveKey="parents"
        id="uncontrolled-tab-example"
        className="mx-auto"
        justify
      >
        <Tab eventKey="parents" title="Parents" className="homemenu ">
          <ListGroup
            horizontal
            className="d-flex flex-wrap justify-content-evenly border-0 rounded-0 p-2 p-lg-5 bg-asb-accent"
          >
            {QuickLinksItems.parents.map((a, index) => (
              <QuickLinks
                key={index}
                target={a.target}
                url={a.url}
                text={a.text}
                iconwidth={a.iconwidth}
                btnicon={a.btnicon}
              />
            ))}
          </ListGroup>
        </Tab>

        <Tab eventKey="students" title="Students">
          <ListGroup
            horizontal
            className="d-flex flex-wrap justify-content-evenly border-0 rounded-0 p-2 p-lg-5 bg-asb-accent"
          >
            {QuickLinksItems.students.map((a, index) => (
              <QuickLinks
                key={index}
                url={a.url}
                text={a.text}
                iconwidth={a.iconwidth}
                btnicon={a.btnicon}
              />
            ))}
          </ListGroup>
        </Tab>
      </Tabs>
    </>
  );
}