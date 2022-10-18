import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs"; 
import NewStudentRulesAndRecommendations from "./new-student-rules-and-recommendations";
import NewStudentTransport from "./new-student-transport";
import NewStudentUniform from "./new-student-uniform";
import NewStudentSchoolTimings from "./new-student-school-timings";

export default function NewStudentsMenu() {
  return (
    <>
      <Tabs
        defaultActiveKey="uniform"
        id="uncontrolled-tab-example"
        className="mx-auto"
        justify
      >
        <Tab eventKey="uniform" title="Uniform" className="homemenu  bg-asb-accent ">
        <NewStudentUniform/>
        </Tab>
        <Tab eventKey="transport" title="Transport">
        <NewStudentTransport/>
        </Tab>
        <Tab eventKey="rules-and-recommendations" title="Rules And Recommendations">
        <NewStudentRulesAndRecommendations/>
        </Tab>
        <Tab eventKey="school-timings" title="School Timings">
        <NewStudentSchoolTimings/>
        </Tab> 
      </Tabs>
    </>
  );
}
