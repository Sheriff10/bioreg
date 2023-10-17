import React from "react";
import { useNavigate } from "react-router-dom";

export default function Intro() {
   const navi = useNavigate()
   return (
      <div className="intro">
         <div className="bg-wrap">
            <div className="container">
               <div className="row kk justify-content-center align-items-center">
                  <div className="col-lg-6 text-light">
                     <div className="intro-text py-4">
                        <h1>An automated student attendance system</h1>
                        <span>Securing the future of students.. </span> <br />
                        <span>Making impersonation impossible</span>
                     </div>
                     <div className="btn-wrap d-flex gap-3 justify-content-between">
                        <button className="btn btn-info rounded-pill col" onClick={navi('/enroll')}>
                           Enroll
                        </button>
                        <a href="#about" className="btn btn-outline-info rounded-pill col">
                           About Bioreg
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
