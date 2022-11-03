import Link from "next/link";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"; 
import DownloadButton from "@buttons/download-button";
 
export default function SchoolProfile({
  title,
  image,
  description,
  btnIcon,
  btnText,
  onClick,
  pdf,
}) {
  return (
    <>
      <Image
        className="d-block w-100 home-hero-img"
        src={image}
        alt={title}
        width={1920}
        height={720}
        layout="intrinsic"
      />

      <h3 className="text-center text-uppercase my-3">{title}</h3>
      <div>
        {documentToReactComponents(description.json)}
      </div>
      {pdf ? (
        <Link href={pdf.url}>
          <a target="_blank" rel="noopener noreferrer">
            <DownloadButton btnicon={btnIcon} onClick={onClick}>
              {btnText}
            </DownloadButton>
          </a>
        </Link>
      ) : null}
    </>
  );
}
