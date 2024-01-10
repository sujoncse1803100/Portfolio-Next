// "use client";
import Image from "next/image";
import React, { useState } from "react";
// import nodemailer from "nodemailer";
import "./style.css";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormData({
      name: "",
      email: "",
      description: "",
    });
    console.log("Email Sent");
  };

  return (
    <div className="flex flex-col md:flex-row justify-around items-center w-full mb-12">
      <div className="mb-5">
        <img src="/contact_image.jpg" className="contact_image" alt="Contact" />
      </div>

      <div className="flex flex-col justify-center items-center ">
        <form
          onSubmit={handleSubmit}
          classNmae="flex flex-col justify-center items-center  w-full"
        >
          <div className="mb-4 w-full">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border p-2 rounded-md"
              required
              placeholder="Name"
            />
          </div>
          <div className="mb-4 w-full">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border p-2 rounded-md"
              required
              placeholder="Email"
            />
          </div>
          <div className="mb-4" w-full>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border p-2 rounded-md"
              rows="4"
              required
              placeholder="Put your words....."
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
