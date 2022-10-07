import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ListGroup from "react-bootstrap/ListGroup";
import QuickLinksItems from "../../data/quick-links.json";
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
            className="d-flex flex-wrap justify-content-evenly border-0 rounded-0 p-5 bg-asb-accent"
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
            className="d-flex flex-wrap justify-content-evenly border-0 rounded-0 p-5 bg-asb-accent"
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

{
  /* <Tab eventKey="parents" title="Parents" className="homemenu ">
<ListGroup
  horizontal
  className="d-flex justify-content-between border-0 rounded-0 p-5 bg-asb-accent"
>
  <ListGroup.Item className="quick-link-container border-0 bg-asb-accent">
    <div className="quick-link-icon-container bg-asb-main">
      <Icon icon="lucide:graduation-cap" width="40" />
    </div>
    <h4 className="text-center text-asb-secondary mt-2 fs-5">
      Admissions
    </h4>
  </ListGroup.Item>

  <ListGroup.Item className="quick-link-container border-0 bg-asb-accent">
    <div className="quick-link-icon-container bg-asb-main">
      <Icon icon="fa-solid:door-open" width="36" />
    </div>
    <h4 className="text-center text-asb-secondary mt-2 fs-5">
      Parent Portal
    </h4>
  </ListGroup.Item>

  <ListGroup.Item className="quick-link-container border-0 bg-asb-accent">
    <div className="quick-link-icon-container bg-asb-main">
      <Icon icon="fa-solid:pen" width="36" />
    </div>
    <h4 className="text-center text-asb-secondary mt-2 fs-5">
      Forms
    </h4>
  </ListGroup.Item>

  <ListGroup.Item className="quick-link-container border-0 bg-asb-accent">
    <div className="quick-link-icon-container bg-asb-main">
      <Icon icon="fa-solid:newspaper" width="36" />
    </div>
    <h4 className="text-center text-asb-secondary mt-2 fs-5">
      Press
    </h4>
  </ListGroup.Item>
</ListGroup>
</Tab>
<Tab eventKey="students" title="Students">
<ListGroup
  horizontal
  className="d-flex justify-content-between border-0 rounded-0  p-5  bg-asb-accent"
>
  <ListGroup.Item className="quick-link-container border-0 bg-asb-accent">
    <div className="quick-link-icon-container bg-asb-main">
      <Icon icon="fa-solid:calendar-alt" width="30" />
    </div>
    <h4 className="text-center text-asb-secondary mt-2 fs-5">
      Calendar
    </h4>
  </ListGroup.Item>

  <ListGroup.Item className="quick-link-container border-0 bg-asb-accent">
    <div className="quick-link-icon-container bg-asb-main">
      <Icon icon="ion:newspaper-sharp" width="36" />
    </div>
    <h4 className="text-center text-asb-secondary mt-2 fs-5">
      Circular
    </h4>
  </ListGroup.Item>

  <ListGroup.Item className="quick-link-container border-0 bg-asb-accent">
    <div className="quick-link-icon-container bg-asb-main">
      <Icon icon="clarity:document-solid" width="36" />
    </div>
    <h4 className="text-center text-asb-secondary mt-2 fs-5">
      Newsletter
    </h4>
  </ListGroup.Item>

  <ListGroup.Item className="quick-link-container border-0 bg-asb-accent">
    <div className="quick-link-icon-container bg-asb-main">
      <Icon icon="icomoon-free:books" width="36" />
    </div>
    <h4 className="text-center text-asb-secondary mt-2 fs-5">
      Resources
    </h4>
  </ListGroup.Item>
</ListGroup>
</Tab>
</Tabs> */
}
