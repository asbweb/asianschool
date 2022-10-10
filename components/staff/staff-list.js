export default function StaffList({ name, qualification }) {
  return (
    <>
      <tr>
        <td>{name}</td>
        <td> {qualification} </td>
      </tr>
    </>
  );
}