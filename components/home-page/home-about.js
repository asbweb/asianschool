import Link from "next/link";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"; 
import DownloadButton from "@buttons/download-button";
 

export default function HomeAbout({
  title,
  description,
  btnIcon,
  btnText,
  onClick,
  pdf,
}) {
  return (
    <>
      <h3 className="text-center text-uppercase my-3">{title}</h3>
      <div>
        {documentToReactComponents(description.json)}
      </div>
      {/* {pdf ? (
        <Link href={pdf.url}>
          <a target="_blank" rel="noopener noreferrer">
            <DownloadButton btnicon={btnIcon} onClick={onClick}>
              {btnText}
            </DownloadButton>
          </a>
        </Link>
      ) : null} */}
    </>
  );
}
