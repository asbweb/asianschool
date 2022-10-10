import React from "react";
import Image from "next/future/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types"; 
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

export default function HouseSystem({ image, description, width, height }) {
  return (
    <>
      <div className="p-3">
        {documentToReactComponents(
          description.json,
          customMarkdownOptions(description)
        )}
      </div>
      <Image
        className="img-fluid mb-3 me-5"
        src={image}
        layout="fixed"
        // placeholder="blur"
        // blurDataURL={imgblurDataURL}
        width={width}
        height={height}
        alt="Asian School Bharain"
      />
    </>
  );
}
