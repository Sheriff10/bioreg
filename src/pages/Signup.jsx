import React, { useState } from "react";
import { FaFingerprint } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { PuffLoader } from "react-spinners";
import post from "../controller/post";
import EnrollSuccess from "./enroll-success";

export default function Signup() {
   const [matric, setMatric] = useState("");
   const [course, setCourse] = useState("");
   const [fullname, setFullname] = useState("");

   const [err, setErr] = useState(false);
   const [loading, setLoading] = useState(false);
   const [success, setSuccess] = useState(false);

   const navi = useNavigate()

   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         setLoading(true);
         const data = { matric, course, fullname };
         const response = await post("/enroll", data);
         console.log(response);
         setLoading(false);
         setSuccess(true);
      } catch (error) {
         console.log(error.response.data);
         setErr(true); // set err true
         setLoading(false);
      }
   };
   const handleSuccess = () => {
      setSuccess(false);
      navi('/verify')
   };
   return (
      <div className="auth-form signup" onSubmit={handleSubmit}>
         <div className="container wrap py-3">
            <div className="row justify-content-between flex-wrap  col-lg-10 mx-auto">
               {/* Text-Form section */}
               <div className="col-md-5 py-5 px-3 my-5 shadow">
                  {success && (
                     <EnrollSuccess
                        message={`Congratulation ${fullname}! You have successfully enrolled for ${course} course with matric number ${matric}. Proceed to mark attendance for this course `}
                        toggle={handleSuccess}
                     />
                  )}
                  <form action="">
                     <div className="heading pb-4">
                        <span className="fw-bold fs-5">
                           Enroll for a course
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
                                 className="form-control mb-3 mb-lg-0"
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
                                 Matric in use
                              </small>
                           </div>
                        )}
                     </div>

                     {/* Name  */}
                     <div className="input-group">
                        <input
                           type="text"
                           className="form-control mb-3"
                           placeholder="Full name"
                           value={fullname}
                           onChange={(e) => setFullname(e.target.value)}
                           required
                        />
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
                              "Enroll"
                           )}
                        </button>
                     </div>

                     {/* Info */}
                     <div className="d-flex mt-3">
                        <small>
                           <Link to={"/verify"} className="text-info fw-bold">
                              Already enrolled? Mark attendance!
                           </Link>
                        </small>
                     </div>
                  </form>
               </div>
               {/* Fingerprint Record section */}
               <div className="col-md-5">
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
