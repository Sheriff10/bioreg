import React, { useState } from "react";
import { FaFingerprint } from "react-icons/fa";
import { Link } from "react-router-dom";
import { PuffLoader } from "react-spinners";
import post from "../controller/post";
import Failed from "./failed";
import Success from "./success";

export default function Login() {
   const [matric, setMatric] = useState("");
   const [course, setCourse] = useState("");

   const [err, setErr] = useState(false);
   const [success, setSuccess] = useState(false);
   const [loading, setLoading] = useState(false);

   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         setLoading(true);
         const data = { matric, course };
         const response = await post("/verify", data);
         console.log(response);
         setLoading(false);
         setErr(false); // set err true

         // Show Success Page
         setSuccess(true)
      } catch (error) {
         console.log(error.response.data);
         setErr(true); // set err true
         setLoading(false);
         setSuccess("failed")
      }
   };
   const isSuccess = (boolean) => {
      if (boolean) return setSuccess(true);
      else return setSuccess("none");
   };
   return (
      <div className="auth-form signup" onSubmit={handleSubmit}>
         <div className="container wrap py-3">
            <div className="col-lg-4  px-3 my-5 mx-auto shadow">
               <form action="">
                  {success && <Success toggle={setSuccess} message={"Data and Fingerprint Verified. Your attendance has been marked"} />}
                  {success == "failed" && <Failed toggle={setSuccess} message={"Data and Fingerprint Verficiation Failed"} />}
                  {/* Fingerprint Record section */}
                  <div className="col">
                     <div className="record-wrap py-5 px-3 my-5 text-center">
                        <div className="heading">
                           <span className="fw-bold fs-5">
                              Mark Attendance with Fingerprint
                           </span>
                        </div>

                        {/* Matric and Course */}
                        <div className="form-group">
                           <div className="d-flex flex-wrap gap-2 align-items-center">
                              <div className="col mb-3">
                                 <input
                                    type="text"
                                    className={`form-control mb-3 mb-lg-0 ${
                                       err && "border-1 border-danger"
                                    }`}
                                    placeholder="Matric No"
                                    value={matric}
                                    onChange={(e) => setMatric(e.target.value)}
                                    required
                                 />
                              </div>
                              <div className="col mb-3">
                                 <input
                                    type="text"
                                    className={`form-control mb-3 mb-lg-0 ${
                                       err && "border-1 border-danger"
                                    }`}
                                    placeholder="Course"
                                    value={course}
                                    onChange={(e) => setCourse(e.target.value)}
                                    required
                                 />
                              </div>
                           </div>
                           {/* Error Section */}
                           {err && (
                              <div className="err-wrap col-12 mb-2">
                                 <small className="text-danger">
                                    Matric number isn't registered to this
                                    course. Kindly enroll to this course to mark
                                    attendance
                                 </small>
                              </div>
                           )}
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
                     <button
                        type="submit"
                        className="btn btn-info rounded-pill w-100"
                     >
                        {loading ? (
                           <PuffLoader size={25} color="#000" />
                        ) : (
                           "Verify"
                        )}
                     </button>
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
