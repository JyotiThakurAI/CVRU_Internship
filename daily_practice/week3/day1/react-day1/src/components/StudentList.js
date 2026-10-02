function StudentList() {
  const students = ["Ravi", "Neha", "Aman"];

  return (
    <ul>
      {students.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
  );
}

export default StudentList;