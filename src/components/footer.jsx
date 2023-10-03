// Footer.js

import React from "react";
import {
   FaFacebook,
   FaTwitter,
   FaLinkedin,
   FaFingerprint,
} from "react-icons/fa";

const Footer = () => {
   return (
      <footer className="bg-dark pt-5 text-light py-3">
         <div className="container">
            <div className="row py-3">
               {/* Logo Section */}
               <div className="col-lg-3 mb-4">
                  <div className="box">
                     {/* <h5 className="font-weight-bold text-info">
                        Logo Section
                     </h5> */}
                     <div className="logo-con">
                        <span className="l-img">
                           <FaFingerprint />
                        </span>
                        <span className="fs-3 me-2">BIOREG</span>
                     </div>
                  </div>
               </div>

               {/* Link Section */}
               <div className="col-lg-3 mb-4">
                  <div className="box">
                     <h5 className="font-weight-bold text-info">Links</h5>
                     <ul className="list-unstyled">
                        <li>About</li>
                        <li>Contact</li>
                        <li>Offers</li>
                     </ul>
                  </div>
               </div>

               {/* About Section */}
               <div className="col-lg-3 mb-4">
                  <div className="box">
                     <h5 className="font-weight-bold text-info">About</h5>
                     <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse et semper metus.
                     </p>
                  </div>
               </div>

               {/* Contact Section */}
               <div className="col-lg-3 text-light  mb-4">
                  <div className="box">
                     <h5 className="font-weight-bold text-info">Contact</h5>
                     <ul className="list-unstyled ">
                        <li>
                           <FaTwitter />
                           <a
                              href="#twitter"
                              className="text-light fw-bold ms-2"
                              target="_blank"
                           >
                              Twitter
                           </a>
                        </li>

                        <li>
                           <FaFacebook />
                           <a
                              href="#facebook"
                              className="text-light fw-bold ms-2"
                              target="_blank"
                           >
                              Facebook
                           </a>
                        </li>

                        <li>
                           <FaLinkedin />
                           <a
                              href="#linkedin"
                              className="text-light fw-bold ms-2"
                              target="_blank"
                           >
                              LinkedIn
                           </a>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>

            {/* Copyright Section */}
            <div className="text-center">
               <span>&copy; 2023 <span className="text-info"><FaFingerprint /> Bioreg</span>. All rights reserved.</span>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
