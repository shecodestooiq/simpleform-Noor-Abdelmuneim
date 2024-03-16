import { useState } from "react";
import InputField from "../InputField/InputField"
import TextAreaField from "../TextAreaField/TextAreaField";

export default function HW() {
  const [myData, setMyData] = useState({name: "",email: "",message: ""});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMyData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${myData.name}, Email: ${myData.email}, Message: ${myData.message}`
    );
};
  return (
    <div className="container">    
    <form onSubmit={handleSubmit}>
      <InputField label='Name' type="text" id="name" name="name" placeholder="Enter Your Name.." required value={myData.name} onChange={handleChange}/><br />

      <InputField label='Email' type="email" id="email" name="email" placeholder="Enter Your Email.." required value={myData.email} onChange={handleChange}/><br />

      <TextAreaField label='Message' id="message" name="message" value={myData.message} onChange={handleChange}/><br />

      <button type="submit" className="submitButton">Submit</button>
    </form>
    </div>
  );
}