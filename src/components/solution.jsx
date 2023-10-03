import React from "react";
import { FaClock, FaFingerprint, FaShieldAlt, FaTimesCircle } from "react-icons/fa";

export default function Solution() {
   const cardFunc = (icon, title, text) => {
      return { icon, title, text };
   };
   const cardArr = [
      cardFunc(
         <FaFingerprint />,
         "Efficient and Accurate Attendance Tracking",
         "Biometric attendance tracking ensures quick andaccurate records, eliminating manual errors."
      ),
      cardFunc(
         <FaShieldAlt />,
         "Enhanced Security and Fraud Prevention:",
         "Biometric authentication boosts security by using unique student data, reducing fraud risk and ensuring only authorized students mark attendance."
      ),
      cardFunc(
         <FaClock />,
         "Time and Resource Optimization:",
         "Biometric attendance automation saves class time, improves instruction efficiency, reduces disruptions, and streamlines administrative tasks, freeing up resources for other activities"
      ),
   ];
   return (
      <div className="solution py-5">
         <div className="container">
            <div className="heading mb-5">
               <span className="badge bg-info">SOLUTIONS</span>
               <h2>Solutions We Offer</h2>
            </div>
            <div className="row">
               {cardArr.map((card, index) => (
                  <div className="col-lg-4 col-md-6 col-12 mb-4" key={index}>
                     <div className="card p-4 shadow mb-4 h-100">
                        <div className="card-icon mb-3 text-center d-flex justify-content-center fs-1">
                           <span className="bg-info rounded-circle">
                              {card.icon}
                           </span>
                        </div>
                        <div className="card-text">
                           <span className="fw-bold fs-5">{card.title}</span>{" "}
                           <br /> <br />
                           <span className="text-muted">{card.text}</span>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
}
