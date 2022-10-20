import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function AdmissionEmailInfo({title, description}) {
  return (
    <>
    
      <div className="step-container bg-light border border-asb-main">
{/* <>{title}</> */}
<div> 
  {/* {documentToReactComponents(description.json)}  */}
</div>
 
        {/* <p>
          If you are applying for more than 1 child, please mention all
          children’s details and enclose all documents in one email.
        </p>
        <p> Emails with incomplete information will be disregarded.</p>
        <p> Emails sent to any other email ID will be disregarded.</p>
        <p>
          Do not call or come to the school regarding application status of your
          child. The reception staff cannot help you with matters regarding
          admission decisions.
        </p>
        <p>
          The school will only get in touch with you regarding further
          procedures if your application is being considered.
        </p> */}
      </div>
    </>
  );
}
