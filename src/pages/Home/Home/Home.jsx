import React from "react";
import Banner from "../Banner/Banner";
import NavBar from "../NavBar/NavBar";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Footer from "../Footer/Footer";
import Experience from "../Experience/Experience";
import Education from "../Education/Education";

const Home = () => {
  return (
    <div>
      <div className="w-[1000px] mx-auto">
        <NavBar></NavBar>
        <Banner></Banner>
        <Projects></Projects>
        {/* <About></About> */}
        <Skills></Skills>
        <Experience></Experience>
        <Education></Education>
        <Footer></Footer>
      </div>

    </div>
  );
};

export default Home;
