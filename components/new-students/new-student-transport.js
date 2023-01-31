import TransportList from "@data/new-students/transport.json";

export default function NewStudentTransport() {
  return (
    <>
      <section className="p-1 p-md-2 p-lg-5 bg-asb-accent">
        <h3 className="page-title">{TransportList.title}</h3>
        <p>{TransportList.subtitle}</p>
        <h5>{TransportList.itemstitle}</h5>
        <ul>
          {TransportList.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
          <li>
            {TransportList.mailtext} {' '}
            <a href={TransportList.mailurl}>{TransportList.mailid}</a>.
          </li>
        </ul>
      </section>
    </>
  );
}
