import DownloadButton from "@buttons/download-button";
import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import UpdatesInfo from "@data/updates-modal.json";

export default function UpdatesModal() {
  const [show, setShow] = useState(false);
  useEffect(() => setShow(true), []);
  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true); 

  return (
    <>
      {/* <DownloadButton onClick={handleShow}> Updates </DownloadButton> */}

      <Modal size="lg" show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title className="fs-5 page-title m-0">
            {/* ADMISSION TO KINDERGARTEN AND GRADE 1 FOR AY 2023-24 */}
            {UpdatesInfo.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* {UpdatesInfo.text}   */}
          {UpdatesInfo.text.map((a, index) => (
            <p key={index}>{a}</p>
          ))}

          {/* Please note the dates for distribution of Prospectus and Application
          for Admission to Kindergarten and Grade 1 of The Asian School.  <br/>
          Issue of Prospectus with Application for Admission to siblings of our
          students only: 24<sup>th</sup> and 25<sup>th</sup> January, 2023. <br/>
          Issue of Prospectus with Application for Admission to others: 7<sup>th</sup>  and 8<sup>th</sup>  February Prospectus
          can be procured from the school office between 8:00 a.m. and 1:00 p.m.
          on the allotted dates only */}
        </Modal.Body>
        {/* <Modal.Footer>
          <DownloadButton  onClick={handleClose}> Close </DownloadButton> 
        </Modal.Footer> */}
      </Modal>
    </>
  );
}
