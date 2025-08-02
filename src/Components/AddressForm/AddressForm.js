import React, { useState, useEffect } from "react";
import { db, auth } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import "./AddressForm.css";

const AddressForm = () => {
  const [address, setAddress] = useState({
    street: "",
    city: "",
    state: "",
    country: "",
    zip: "",
  });

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const formData = JSON.parse(localStorage.getItem("formData"));
    const user = auth.currentUser;

    if (!user) {
      alert("User not logged in");
      return;
    }

    const fullData = {
      ...formData,
      ...address,
      uid: user.uid,
      timestamp: new Date(),
    };

    try {
      await addDoc(collection(db, "users"), fullData);
      alert("Data saved to Firebase!");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div className="address-form">
      <h2>Address Form</h2>
      <input
        type="text"
        name="street"
        placeholder="Street"
        onChange={handleChange}
      />
      <input
        type="text"
        name="city"
        placeholder="City"
        onChange={handleChange}
      />
      <input
        type="text"
        name="state"
        placeholder="State"
        onChange={handleChange}
      />
      <input
        type="text"
        name="country"
        placeholder="Country"
        onChange={handleChange}
      />
      <input
        type="text"
        name="zip"
        placeholder="ZIP Code"
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default AddressForm;
