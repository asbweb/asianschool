import Link from "next/link";
import DownloadButton from "@buttons/download-button";
import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import RichTextBlock from "./rich-text-block";
import Image from "next/image";

export default function UpdatesModal({
  title,
  display,
  description,
  displayBtn,
  btnText,
  url,
  link,
}) {
  const [show, setShow] = useState(false);
  useEffect(() => setShow(true), []);
  const handleClose = () => setShow(false);

  return (
    <>
      {display ? (
        <Modal size="lg" show={show} onHide={handleClose} centered>
          <Modal.Header className="border-0">
            <Modal.Title className="fs-5 page-title text-center m-0">
              {title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <RichTextBlock description={description} />

            <div className={displayBtn}>
              {url ? (
                <Link href={url.url} target="_blank" rel="noopener noreferrer">
                  <DownloadButton>{btnText}</DownloadButton>
                </Link>
              ) : null}
              {link ? (
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <DownloadButton>{btnText}</DownloadButton>
                </a>
              ) : null}
            </div>
          </Modal.Body>
          <Modal.Footer className="border-0 mt-0 pt-0">
            <DownloadButton className="mt-0" onClick={handleClose}>
              Close
            </DownloadButton>
          </Modal.Footer>
        </Modal>
      ) : null}
    </>
  );
}
