import Link from "next/link"; 
import DownloadButton from "../buttons/download-button";

export default function NewsletterItem({ title, subtitle, URL, btnicon, btntext }) {
  return (
    <>
      <h5>{title}</h5>
      <h6 className="mb-0">{subtitle}</h6>
      <Link href={URL}>
        <a className="resource-link" target="_blank" rel="noopener noreferrer">
          <DownloadButton btnicon={btnicon}>{btntext}</DownloadButton>
        </a>
      </Link>
    </>
  );
}
