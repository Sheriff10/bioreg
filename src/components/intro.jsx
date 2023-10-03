import React from "react";

export default function Intro() {
   return (
      <div className="intro">
         <div className="bg-wrap">
            <div className="container">
               <div className="row kk justify-content-center align-items-center">
                  <div className="col-lg-6 text-light">
                     <div className="intro-text py-4">
                        <h1>UNILORIN Student Course Biometric Registration.</h1>
                        <span>Securing the future of students.. </span> <br />
                        <span>Making impersonation impossible</span>
                     </div>
                     <div className="btn-wrap d-flex gap-3 justify-content-between">
                        <button className="btn btn-info px-5 rounded-pill col">
                           Signup
                        </button>
                        <button className="btn btn-outline-info px-5 rounded-pill col">
                           Login
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
