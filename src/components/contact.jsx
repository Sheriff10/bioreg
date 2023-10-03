// ContactUs.js

import React, { useState } from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const ContactUs = () => {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [message, setMessage] = useState("");

   const handleSubmit = (e) => {
      e.preventDefault();

      // Add your logic here to handle the form submission, e.g., sending an email or saving to a database

      // For demonstration purposes, we'll log the form data to the console
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Message:", message);

      // Reset the form after submission
      setName("");
      setEmail("");
      setMessage("");
   };

   return (
      <div className="contact">
         <div className="container py-5">
            <div className="row align-items-center">
               {/* Social Media Section */}
               <div className="col-lg-6  mb-4 mb-lg-0">
                  <h4 className="text-info">Connect With Us </h4>
                  <div>
                     <ul>
                        <li>
                           <FaTwitter />
                           <a
                              href="#twitter"
                              className=" text-dark fw-bold ms-2"
                              target="_blank"
                           >
                              Twitter
                           </a>
                        </li>

                        <li>
                           <FaFacebook />
                           <a
                              href="#facebook"
                              className=" text-dark fw-bold ms-2"
                              target="_blank"
                           >
                              Facebook
                           </a>
                        </li>

                        <li>
                           <FaLinkedin />
                           <a
                              href="#linkedin"
                              className=" text-dark fw-bold ms-2"
                              target="_blank"
                           >
                              LinkedIn
                           </a>
                        </li>
                     </ul>
                  </div>
               </div>

               {/* Contact Form Section */}
               <div className="col-lg-6">
                <small className="badge bg-info ">Message us</small>
                  <h2>Contact Us</h2>
                  <form onSubmit={handleSubmit}>
                     <div className="form-group mb-2 mb-2">
                        <label htmlFor="name">Name:</label>
                        <input
                           type="text"
                           id="name"
                           value={name}
                           onChange={(e) => setName(e.target.value)}
                           required
                           className="form-control"
                        />
                     </div>
                     <div className="form-group mb-2">
                        <label htmlFor="email">Email:</label>
                        <input
                           type="email"
                           id="email"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                           required
                           className="form-control"
                        />
                     </div>
                     <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea
                           id="message"
                           value={message}
                           onChange={(e) => setMessage(e.target.value)}
                           required
                           className="form-control"
                        />
                     </div>
                     <div className="btn-wrap mt-4">
                        <button type="submit" className="btn btn-info w-100">
                           Submit
                        </button>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ContactUs;
