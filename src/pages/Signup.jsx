import React from "react";
import { FaFingerprint } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Signup() {
   return (
      <div className="auth-form signup">
         <div className="container wrap py-3">
            <div className="d-flex flex-wrap gap-5 col-lg-10 mx-auto">
               {/* Text-Form section */}
               <div className="col py-5 px-3 my-5 shadow">
                  <form action="">
                     <div className="heading pb-4">
                        <span className="fw-bold fs-5">Create an Account</span>
                     </div>
                     {/* Matric and Course */}
                     <div className="form-group">
                        <div className="d-flex flex-wrap gap-2 align-items-center">
                           <div className="col mb-3">
                              <input
                                 type="text"
                                 className="form-control mb-3"
                                 placeholder="Matric No"
                              />
                           </div>
                           <div className="col mb-3">
                              <input
                                 type="text"
                                 className="form-control mb-3"
                                 placeholder="Department / Course"
                              />
                           </div>
                        </div>
                     </div>

                     {/* Name and Password */}
                     <div className="input-group">
                        <input
                           type="text"
                           className="form-control mb-3"
                           placeholder="Full name"
                        />
                     </div>
                     <div className="input-group">
                        <input
                           type="password"
                           className="form-control mb-3"
                           placeholder="Password"
                        />
                     </div>
                     <div className="input-group">
                        <input
                           type="password"
                           className="form-control mb-3"
                           placeholder="Confirm password"
                        />
                     </div>

                     {/* Submit button */}
                     <div className="btn-wrap">
                        <div className="btn btn-info rounded-pill w-100">
                           Signup
                        </div>
                     </div>

                     {/* Info */}
                     <div className="d-flex mt-3">
                        <small>
                           <Link to={"/login"} className="text-info fw-bold">
                              Already have an account? Login
                           </Link>
                        </small>
                     </div>
                  </form>
               </div>
               {/* Fingerprint Record section */}
               <div className="col">
                  <div className="record-wrap py-5 px-3 my-5 shadow text-center">
                     <div className="heading">
                        <span className="fw-bold fs-5">Record Fingerprint</span>
                     </div>
                     <div className="finger-wrap">
                        <small>
                           Place your thumb on the fingerprint scanner
                        </small>{" "}
                        <br />
                        <span className="finger">
                           <FaFingerprint />
                        </span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
