import { FaFingerprint } from "react-icons/fa";
import { Link } from "react-router-dom";

// import pdf from '../../public/TRIADDAO_whitepaper.pdf'
const Header = () => {
   const toggleMenu = () => {
      const menu = document.querySelector(".menu-btn .menu-btn-burger");
      const slide = document.querySelector(".menu-con");
      if (menu) menu.classList.toggle("open");
      if (slide) slide.classList.toggle("open");
   };
   // menu.addEventListener('click', () => {
   //   menu.classList.add('open')
   //   alert('moti tehh')
   // })
   return (
      <>
         <header className="py-2 text-dark shadow">
            <div className="container-fluid">
               <div className="row align-items-center">
                  <div className="col-4">
                     <div className="col logo-con">
                        {/* <img
                    src="../../vcLogo_head.png"
                    alt="traidDao"
                    className="header-logo"
                  /> */}
                        <Link className="text-dark" to={"/"}>
                           <span className="ms-3 fw-bold">
                              <span className="fs-2">
                                 <FaFingerprint />
                              </span>{" "}
                              <small>BIOREG</small>
                           </span>
                        </Link>
                     </div>
                  </div>
                  <div className="col-8 ">
                     <div className="menu-con">
                        <ul>
                           <li>
                              <a href="/#">Home</a>
                           </li>
                           <li>
                              <a href="/#about">About</a>
                           </li>
                           <li>
                              <a href="#solution">Solution</a>
                           </li>
                           <li>
                              <a href="#contact">Contact Us</a>
                           </li>
                           <li>
                              <div className="row">
                                 <Link to={"/enroll"} className="col-lg-6 mb-2">
                                    <div className="btn btn-info px-4 w-100 rounded-pill">
                                       Enroll
                                    </div>
                                 </Link>
                                 <Link to={"/verify"} className="col-lg-6 mb-2">
                                    <div className="btn btn-outline-info px-4 w-100 rounded-pill">
                                       Verify
                                    </div>
                                 </Link>
                              </div>
                           </li>
                        </ul>
                     </div>
                     <div className="menu-btn" onClick={toggleMenu}>
                        <div className="menu-btn-burger"></div>
                     </div>
                  </div>
               </div>
            </div>
         </header>
      </>
   );
};

export default Header;
