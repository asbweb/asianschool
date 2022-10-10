import Link from "next/link"; 
import DownloadButton from "../buttons/download-button";

export default function NewsletterItem({ title, URL, btnicon, btntext }) {
  return (
    <>
      <strong>{title}</strong>
      <Link href={URL}>
        <a className="resource-link" target="_blank" rel="noopener noreferrer">
          <DownloadButton btnicon={btnicon}>{btntext}</DownloadButton>
        </a>
      </Link>
    </>
  );
}
