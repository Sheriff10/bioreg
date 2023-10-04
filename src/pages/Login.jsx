import React from "react";
import { FaFingerprint } from "react-icons/fa";
import { Link } from "react-router-dom";
import Failed from "./failed";
import Success from "./success";

export default function Login() {
   return (
      <div className="auth-form signup">
         <div className="container wrap py-3">
            <div className="col-lg-4  px-3 my-5 mx-auto shadow">
               <form action="">
                  {/* <Failed /> */}
                  {/* Fingerprint Record section */}
                  <div className="col">
                     <div className="record-wrap py-5 px-3 my-5 text-center">
                        <div className="heading">
                           <span className="fw-bold fs-5">
                              Mark Attendance with Fingerprint
                           </span>
                        </div>

                        {/* Matric and Course */}
                        <div className="form-group my-3">
                           <div className="d-flex flex-wrap gap-2 align-items-center">
                              <div className="col mb-3">
                                 <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Matric No"
                                 />
                              </div>
                              <div className="col mb-3">
                                 <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Course"
                                 />
                              </div>
                           </div>
                        </div>

                        {/* Fingerprint Section  */}
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

                  {/* Submit button */}
                  <div className="btn-wrap">
                     <div className="btn btn-info rounded-pill w-100">
                        Login
                     </div>
                  </div>

                  {/* Info */}
                  <div className="d-flex mt-3 pb-4">
                     <small>
                        <Link to={"/signup"} className="text-info fw-bold">
                           Not enrolled in this course? Enroll now!
                        </Link>
                     </small>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
}
