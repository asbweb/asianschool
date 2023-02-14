// Render post.body.json to the DOM using
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from '@contentful/rich-text-types';

const document = {
    nodeType: 'document',
    data: {},
    content: [
      {
        nodeType: 'paragraph',
        data: {},
        content: [
          {
            nodeType: 'text',
            value: 'Hello world!',
            marks: [],
            data: {}
          },
        ],
      },
    ],
  };

const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}s</p>,
    } 
  };

export default function RichTextAsset(description) { 
  
    return <>{documentToReactComponents(document, description.json, options )}</>;
  }