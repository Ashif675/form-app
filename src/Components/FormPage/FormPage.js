import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FormPage.css";

// Firebase Firestore imports
import { db, auth } from "../../firebase"; // adjust the path as needed
import { doc, setDoc } from "firebase/firestore";

const FormPage = () => {
  const [formData, setFormData] = useState({
    id: "",
    dob: "",
    name: "",
    pin: "",
  });

  const [isSaved, setIsSaved] = useState(false);
  const navigate = useNavigate();

  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
  const handleSave = async () => {
    try {
      const user = auth.currentUser;

      if (!user) {
        alert("User not logged in");
        return;
      }

     
      await setDoc(doc(db, "users", user.uid), {
        formData: formData,
      });

      setIsSaved(true);
      alert("Data saved to Firebase!");
    } catch (error) {
      console.error("Error saving data:", error);
      alert("Failed to save data.");
    }
  };


  const handleNext = () => {
    navigate("/address");
  };

  return (
    <div className="form-container">
      <h2>Form Page</h2>

      <input
        type="text"
        name="id"
        placeholder="Enter ID"
        value={formData.id}
        onChange={handleChange}
        disabled={isSaved}
      />

      <input
        type="date"
        name="dob"
        placeholder="Enter DOB"
        value={formData.dob}
        onChange={handleChange}
        disabled={isSaved}
      />

      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        value={formData.name}
        onChange={handleChange}
        disabled={isSaved}
      />

      <input
        type="text"
        name="pin"
        placeholder="Enter PIN Code"
        value={formData.pin}
        onChange={handleChange}
        disabled={isSaved}
      />

      {/* Show Save button only if not already saved */}
      {!isSaved && <button onClick={handleSave}>Save</button>}

      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default FormPage;
