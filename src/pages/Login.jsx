import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
   return (
      <div className="auth-form signup">
         <div className="container wrap py-3">
            <div className="col-lg-4 py-5 px-3 my-5 mx-auto shadow">
               <form action="">
                  <div className="heading pb-4">
                     <span className="fw-bold fs-5">Login to Account</span>
                  </div>

                  {/* Name and Password */}
                  <div className="input-group">
                     <input
                        type="text"
                        className="form-control mb-3"
                        placeholder="Matric Number"
                     />
                  </div>
                  <div className="input-group">
                     <input
                        type="password"
                        className="form-control mb-3"
                        placeholder="Password"
                     />
                  </div>

                  {/* Submit button */}
                  <div className="btn-wrap">
                     <div className="btn btn-info rounded-pill w-100">
                        Login
                     </div>
                  </div>

                  {/* Info */}
                  <div className="d-flex mt-3">
                     <small>
                        <Link to={"/signup"} className="text-info fw-bold">
                           Don't have an account? Signup
                        </Link>
                     </small>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
}
