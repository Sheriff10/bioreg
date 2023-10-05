import React from "react";

export default function About() {
   return (
      <div className="about bg-info py-5" id="about">
         <div className="container py-5">
            <div className="row align-items-center">
               <div className="col-lg-6 col-sm-6 mb-4 col-12">
                  <div className="img-wrap">
                    <img src="/abt.avif" alt="Bioreg" className="img-fluid rounded" />
                  </div>
               </div>
               <div className="col-lg-6 col-sm-6 col-12">
                  <div className="abt-text">
                     <div className="heading mb-5">
                        <span className="badge bg-light text-dark">
                           Get to know Bioreg
                        </span>
                        <h2>A Few Word About Us </h2>
                     </div>
                     <div className="text">
                        <span>
                           Lorem ipsum dolor sit amet consectetur adipisicing
                           elit. Magnam dicta dolor sed. Quaerat cum
                           exercitationem at dolor sit rem numquam, eveniet sunt
                           rerum modi, atque dicta, voluptatibus laborum
                           consequatur nostrum.
                        </span>{" "}
                        <br /> <br />
                        <span>
                           Lorem ipsum dolor sit amet consectetur adipisicing
                           elit. Molestias distinctio, deserunt nihil fuga quia
                           dicta veritatis quam id ducimus ad iusto hic eveniet,
                           facilis eum labore recusandae necessitatibus culpa
                           eaque?
                        </span>
                     </div>
                     <div className="btn-wrap mt-4">
                        <button className="btn btn-light fw-bold ">Join Bioreg Today!!!</button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
