import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";

const CheckListComp = ({ children }) => (
  <ul className="admission-checklist">{children}</ul>
);

const SuperScript = ({ children }) => (
  <sup style={{ marginLeft: "-4px" }}>{children}</sup>
);

const options = {
  renderMark: {
    [MARKS.CODE]: (text) => <SuperScript>{text}</SuperScript>,
  },
  renderNode: {
    [BLOCKS.UL_LIST]: (node, children) => (
      <CheckListComp>{children}</CheckListComp>
    ),
  },
};

export default function RichTextBlockTest({ description }) {
  return <>{documentToReactComponents(description.json, options)}</>;
}
