import React from "react";

const StudentCard = ({ student }) => {
  return (
    <div className="card">
      <h3>{student.name}</h3>
      <p><strong>Matric Number:</strong> {student.matricNumber}</p>
      <p><strong>Email:</strong> {student.email}</p>
      <p><strong>Phone:</strong> {student.phone}</p>
      <p><strong>IT Center:</strong> {student.center}</p>
    </div>
  );
};

export default StudentCard;