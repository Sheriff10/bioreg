import React from "react";
import { FaFingerprint } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Failed() {
   return (
      <div className="auth-form success position-fixed top-0 bottom-0 start-0 end-0 ">
         <div className="container h-100 d-flex align-items-center wrap py-3">
            <div className="col-lg-4 col-12 bg-white px-3 my-5 mx-auto shadow">
               <form action="">
                  {/* Fingerprint Record section */}
                  <div className="col">
                     <div className="record-wrap py-5 px-3 my-5 text-center">
                        <div className="heading">
                           <span className="fw-bold fs-5 text-danger">
                              FAILED
                           </span>
                        </div>

                        {/* Fingerprint Section  */}
                        <div className="finger-wrap">
                           <small>Fingerprint Unverified!</small> <br />
                           <span className="finger text-danger">
                              <FaFingerprint />
                           </span>
                        </div>
                     </div>
                  </div>

                  {/* Submit button */}
                  <div className="btn-wrap mb-4">
                     <div className="btn btn-danger rounded-pill w-100">OK</div>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
}