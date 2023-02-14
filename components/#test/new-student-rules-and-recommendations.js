import RulesAndRecommendationsList from "@data/new-students/rulesandrecommendations.json";

export default function NewStudentRulesAndRecommendations() {
  return (
    <>
      <section className="p-1 p-md-2 p-lg-5 bg-asb-accent">
        <h3 className="page-title">{RulesAndRecommendationsList.title}</h3>
        <ul>
          {RulesAndRecommendationsList.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>
    </>
  );
}
