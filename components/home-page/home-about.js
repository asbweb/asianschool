import Link from "next/link";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"; 
import DownloadButton from "@buttons/download-button";
 

export default function HomeAbout({
  title,
  description
}) {
  return (
    <>
      <h3 className="text-center text-uppercase my-3">{title}</h3>
      <div>
        {documentToReactComponents(description.json)}
      </div> 
    </>
  );
}
