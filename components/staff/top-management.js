import { imgblurDataURL } from "../../lib/constants";
import React from "react";
import Image from "next/future/image"; 
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import Card from "react-bootstrap/Card";
// import RichTextAsset from "./rich-text-asset";
import RichTextImage from "../display-items/rich-text-image";

const customMarkdownOptions = (description) => ({
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => (
      <RichTextImage
        id={node.data.target.sys.id}
        assets={description.links.assets.block}
      />
    ),
  },
});

export default function TopManagement({
  profilePicture,
  name,
  role,
  description,
}) {
  return (
    <>
      <Card className="border-0 mb-5">
        <Card.Body>
          <div className="float-md-start">
            <Image
              className="img-fluid mb-3 me-0 me-md-3 me-lg-5"
              src={profilePicture}
              layout="responsive"
              placeholder="blur"
              blurDataURL={imgblurDataURL}
              width="400"
              height="400"
              alt="Asian School Bharain"
            />
            <h6 className="text-center text-asb-secondary me-0 me-md-3 me-lg-5">{name}</h6>
          </div>
          <Card.Title className="mb-3">
            <h3 className="text-asb-main fw-bold">{role}</h3>
          </Card.Title>
          <div className="p-1 p-lg-3">
            {documentToReactComponents(description.json,customMarkdownOptions(description))}
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
