import DownloadButton from "@buttons/download-button";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function UpdatesModal() {
  const [show, setShow] = useState(false);

  useEffect(() => setShow(true), []);

  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal size="lg" show={show} onHide={handleClose} centered>
        <Modal.Header closeButton >
          <Modal.Title>
            ADMISSION TO KINDERGARTEN AND GRADE 1 FOR AY 2023-24
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Please note the dates for distribution of Prospectus and Application
          for Admission to Kindergarten and Grade 1 of The Asian School.  <br/>
          Issue of Prospectus with Application for Admission to siblings of our
          students only: 24th and 25th January, 2023. <br/>
          Issue of Prospectus with Application for Admission to others: 7th and 8th February Prospectus
          can be procured from the school office between 8:00 a.m. and 1:00 p.m.
          on the allotted dates only
        </Modal.Body>
         {/* <Modal.Footer>
          <DownloadButton  onClick={handleClose}>
            Close
          </DownloadButton> 
        </Modal.Footer> */}
      </Modal>
    </>
  );
}
