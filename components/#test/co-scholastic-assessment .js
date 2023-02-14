import CoScholasticAssessmentItems from "@data/curriculum/co-scholastic-assessment.json";

export default function CoScholasticAssessment() {
  return (
    <>
      <h4 className="fw-bold">{CoScholasticAssessmentItems.heading}</h4>
      <div className="my-5">
        <h5 className="fw-bold">
          {CoScholasticAssessmentItems.lkggrade8.title}
        </h5>
        <p>{CoScholasticAssessmentItems.lkggrade8.subtitle}</p>
        <ol>
          {CoScholasticAssessmentItems.lkggrade8.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))} 
        </ol>
      </div>
      <div className="my-5">
        <h5 className="fw-bold">
          {CoScholasticAssessmentItems.grades9and10.title}
        </h5>
        <p>{CoScholasticAssessmentItems.grades9and10.subtitle}</p>
        <ol>
          {CoScholasticAssessmentItems.grades9and10.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))} 
        </ol>
      </div> 
      <div className="my-5">
        <h5 className="fw-bold">
        {CoScholasticAssessmentItems.grades11and12.title}
        </h5>
        <p>
        {CoScholasticAssessmentItems.grades11and12.subtitle}
        </p>
        <ol>
        {CoScholasticAssessmentItems.grades11and12.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))} 
        </ol>
      </div>
      <div className="my-5">
        <h5 className="fw-bold">
          {CoScholasticAssessmentItems.discipline.title}
        </h5>
        <p>{CoScholasticAssessmentItems.discipline.subtitle}</p>
      </div>
    </>
  );
}
