// import './App.css';
// import { useState } from "react";

// function Form() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");

//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (username === "admin" && password === "1234") {
//       setMessage("Login Successful");
//     } else {
//       setMessage("invalid username or password. ");
//     }
//     setUsername("");
//     setPassword("");
//   };
//   return(
//     <div className='login-container'>
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <input
//         type='text'
//         placeholder='username'
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//         required/>
//         <input 
//         type='password'
//         placeholder='password'
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         required/>
//         <button type='submit'> Login</button>
//       </form>
//       {message && <p>{message}</p>}
//     </div>
//   );
// }
// export default Form;
// import React, { useState } from "react";
// import "./App.css";

// function App() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");

//   const handleLogin = (e) => {
//     e.preventDefault();

//     // Simple login logic
//     if (username === "admin" && password === "1234") {
//       setMessage("Login successful!");
//     } else {
//       setMessage("Invalid username or password.");
//     }

//     // Clear the input fields
//     setUsername("");
//     setPassword("");
//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button type="submit">Login</button>
//       </form>
//       {message && <p>{message}</p>}
//     </div>
//   );
// }

// export default App;


// import React, { useState } from "react";
// import "./App.css";

// function App() {
//   const [screen, setScreen] = useState("login");
//   const [email, setEmail] = useState("");
//   const [otp, setOtp] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   return (
//     <div className="container">
//       {screen === "login" && (
//         <LoginScreen
//           email={email}
//           setEmail={setEmail}
//           onNext={() => setScreen("otp")}
//         />
//       )}
//       {screen === "otp" && (
//         <OTPScreen
//           otp={otp}
//           setOtp={setOtp}
//           onNext={() => setScreen("reset")}
//         />
//       )}
//       {screen === "reset" && (
//         <ResetPasswordScreen
//           newPassword={newPassword}
//           confirmPassword={confirmPassword}
//           setNewPassword={setNewPassword}
//           setConfirmPassword={setConfirmPassword}
//         />
//       )}
//     </div>
//   );
// }

// function LoginScreen({ email, setEmail, onNext }) {
//   const [error, setError] = useState("");

//   const handleNext = () => {
//     if (!email.includes("@") || email.length < 5) {
//       setError("Please enter a valid email.");
//     } else {
//       setError("");
//       onNext();
//     }
//   };

//   return (
//     <div className="card">
//       <h2 className="title">Login</h2>
//       <input
//         type="email"
//         value={email}
//         placeholder="Enter your email"
//         className="input"
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       {error && <p className="error">{error}</p>}
//       <button onClick={handleNext} className="button">
//         Send OTP
//       </button>
//     </div>
//   );
// }

// function OTPScreen({ otp, setOtp, onNext }) {
//   const [error, setError] = useState("");

//   const handleNext = () => {
//     if (otp.length !== 6 || !/^\d+$/.test(otp)) {
//       setError("Please enter a 6-digit numeric OTP.");
//     } else {
//       setError("");
//       onNext();

//     }
//   };

//   return (
//     <div className="card">
//       <h2 className="title">Enter OTP</h2>
//       <input
//         type="text"
//         value={otp}
//         placeholder="Enter OTP"
//         className="input"
//         onChange={(e) => setOtp(e.target.value)}
//       />
//       {error && <p className="error">{error}</p>}
//       <button onClick={handleNext} className="button">
//         Verify OTP
//       </button>
//     </div>
//   );
// }

// function ResetPasswordScreen({
//   newPassword,
//   confirmPassword,
//   setNewPassword,
//   setConfirmPassword,
// }) {
//   const [message, setMessage] = useState("");

//   const handleSubmit = () => {
//     if (newPassword.length < 6) {
//       setMessage("Password must be at least 6 characters.");
//     } else if (newPassword !== confirmPassword) {
//       setMessage("Passwords do not match.");
//     } else {
//       setMessage("Password successfully reset!");
//     }
//   };

//   return (
//     <div className="card">
//       <h2 className="title">Reset Password</h2>
//       <input
//         type="password"
//         placeholder="New Password"
//         className="input"
//         value={newPassword}
//         onChange={(e) => setNewPassword(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Confirm Password"
//         className="input"
//         value={confirmPassword}
//         onChange={(e) => setConfirmPassword(e.target.value)}
//       />
//       {message && <p className={message.includes("success") ? "success" : "error"}>{message}</p>}
//       <button className="button" onClick={handleSubmit}>
//         Submit
//       </button>
//     </div>
//   );
// }

// export default App;
// import Header from './Header.js';
// import Footer from './Footer.js';
// function App() {
//   return(

//     <>
//       <Header/>
//       <Footer/>
      
//     </>
//   );
// }
// export default App;
// import Card from "./card";

// function App() {
//   return(
//     <>
//     <Card/> 
//     </>
//   );
// }
// export default App;

import React, { useState } from "react";
import StudentForm from "./StudentForm";
import StudentCard from "./StudentCard";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  }; 

  return (
    <div className="container">
      <StudentForm addStudent={addStudent} />
      <h2>Registered Students</h2>
      <div className="cards">
        {students.map((student, index) => (
          <StudentCard key={index} student={student} />
        ))}
      </div>
    </div>
  );
}

export default App;


