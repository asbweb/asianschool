import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import RichTextImage from "@display-items/rich-text-image";

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
export default function RichTextComponent({ description }) {
  return (
    <>
      <div className="text-center">
        {documentToReactComponents(
          description.json,
          customMarkdownOptions(description)
        )}
      </div>
    </>
  );
}
