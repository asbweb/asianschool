import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs"; 
import AdmissionProcedureKGandGrade1 from "./admission-kg-grade1";
import AdmissionGrade2andAbove from "./admission-grade-2-and-above";


export default function AdmissionMenu() {
  return (
    <>
      <Tabs
        defaultActiveKey="kg-grade1"
        id="uncontrolled-tab-example"
        className="mx-auto"
        justify
      >
        <Tab eventKey="kg-grade1" title="KG & GRADE 1" className="homemenu ">
          <AdmissionProcedureKGandGrade1 />
        </Tab>

        <Tab eventKey="grade2andabove" title="GRADE 2 & ABOVE">
        <AdmissionGrade2andAbove/>
        </Tab>
      </Tabs>
    </>
  );
}
