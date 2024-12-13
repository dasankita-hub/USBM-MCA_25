// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const Form = () => {
  const userArr = JSON.parse(localStorage.getItem("users")) || [];
  const [username, setUsername] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handleChange = (e) => setUsername(e.target.value);
  const handleEmail = (e) => setUserEmail(e.target.value);
  const handlePassword = (e) => setUserPassword(e.target.value);

  const handleSubmit = () => {
  
    const userObj = {
      name: username,
      email: userEmail,
      password: userPassword,
    };

    userArr.push(userObj); // Add user to array
    localStorage.setItem("users", JSON.stringify(userArr)); // Save updated array to localStorage
    alert("Successfully registered!");
        
    // Reset form fields
    setUsername("");
    setUserEmail("");
    setUserPassword("");
  };

  return (
    <form
      className="flex flex-col justify-center items-center gap-y-2 mt-5 mx-auto"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="User name"
        required
        value={username}
        onChange={handleChange}
        className="bg-slate-300 text-black p-3 border-2 border-black"
      />
      <input
        type="email"
        placeholder="User Email"
        required
        value={userEmail}
        onChange={handleEmail}
        className="bg-slate-300 text-black p-3 border-2 border-black"
      />
      <input
        type="password"
        placeholder="User Password"
        required
        value={userPassword}
        onChange={handlePassword}
        className="bg-slate-300 text-black p-3 border-2 border-black"
      />
      <button
       onClick="handlesubmit"
        className="bg-slate-300 text-white border-2 border-black hover:bg-green-600 p-3" >
        Submit
      </button>
    </form>
  );
};

export default Form;
