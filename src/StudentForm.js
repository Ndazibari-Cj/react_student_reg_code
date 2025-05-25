import React, { useState } from "react";

const StudentForm = ({ addStudent }) => {
  const [name, setName] = useState("");
  const [matricNumber, setMatricNumber] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [center, setCenter] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && matricNumber && email && phone && center) {
      addStudent({ name, matricNumber, email, phone, center });
      setName(""); setMatricNumber(""); setEmail(""); setPhone(""); setCenter("");
    }
  };

  return (
    <div className="form-container">
      <h2 className="student_reg">Student Registration</h2>
      <form onSubmit={handleSubmit}>
        <h4 className="head">Students Full Name</h4>
        <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <h4 className="head">Matric Number</h4>
        <input type="text" placeholder="Matric Number" value={matricNumber} onChange={(e) => setMatricNumber(e.target.value)} required />
        <h4 className="head">E-mail Address</h4>
        <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <h4 className="head">Phone number</h4>
        <input type="tel" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        <h4 className="head">IT Placement Center</h4>
        <input type="text" placeholder="IT Placement Center" value={center} onChange={(e) => setCenter(e.target.value)} required />
        <button className="reg" type="submit">Register</button>
      </form>
    </div>
  );
};

export default StudentForm;