import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function RichTextBlock({ description }) {
  return (
    <>
      {documentToReactComponents(description.json)}
    </>
  );
}
