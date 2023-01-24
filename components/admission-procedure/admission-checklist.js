import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
 
const CheckListComp = ({ children }) => (
  <ul className="admission-checklist">
     {children} 
  </ul>
);

const options = {
  renderNode: { 
    [BLOCKS.UL_LIST]: (node, children) => <CheckListComp>{children}</CheckListComp>,
  },
}; 

export default function AdmissionChecklist({ description }) {
  return < >{documentToReactComponents(description.json, options)}</ >;
}
