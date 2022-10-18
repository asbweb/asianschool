import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function AdmissionSteps({ steps, description }) {
  return (
    <>
      <div className="step-container">
        <div>
          <h4 className="text-uppercase mb-4">{steps}</h4>
          {documentToReactComponents(description.json)}
        </div>
      </div>
    </>
  );
}
