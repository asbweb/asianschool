import SchoolTimingsList from "@data/new-students/schooltimings.json";

export default function NewStudentSchoolTimings() {
  return (
    <>
      <section className="p-1 p-md-2 p-lg-5 bg-asb-accent">
        <h3 className="page-title">{SchoolTimingsList.title}</h3>
        <ul>
          {SchoolTimingsList.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>
    </>
  );
}
