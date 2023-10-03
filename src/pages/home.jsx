import React from "react";
import About from "../components/about";
import ContactUs from "../components/contact";
import Intro from "../components/intro";
import Solution from "../components/solution";

const Home = () => {
   return (
      <div className="home">
         <Intro />
         <Solution />
         <About />
         <ContactUs />
      </div>
   );
};

export default Home;
