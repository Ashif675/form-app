import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Reset link sent to your email");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleReset}>
      <h2>Forgot Password</h2>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
      <button type="submit">Send Reset Link</button>
    </form>
  );
};

export default ForgotPassword;