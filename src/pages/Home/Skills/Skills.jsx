import React, { useEffect } from "react";
import './Skills.css'
import 'aos/dist/aos.css';
import Aos from "aos";
const Skills = () => {
  useEffect(()=> {
    Aos.init()
  },[])
  return (
    <div className="py-16 " >
      <h1 className="text-3xl my-16 text-center text-[#a6c7e3]">My Skills</h1>
      <div className="grid grid-cols-2 md:grid-cols-6 place-items-center gap-12 " data-aos="fade-left">
        <div>
          <div
            className="radial-progress text-[#097969]"
            style={{ "--value": 70 }}
            role="progressbar"
          >
            85%
          </div>
          <h2 className="text-[#a6c7e3] text-center pt-4 ">React.js</h2>
        </div>
        <div>
          <div
            className="radial-progress text-[#FFC300]"
            style={{ "--value": 70 }}
            role="progressbar"
          >
            60%
          </div>
          <h2 className="text-[#a6c7e3] text-center pt-4">Node.js</h2>
        </div>
        <div>
          <div
            className="radial-progress text-[#F9E795]"
            style={{ "--value": 70 }}
            role="progressbar"
          >
            70%
          </div>
          <h2 className="text-[#a6c7e3] text-center pt-4">MongoDb.js</h2>
        </div>
        <div>
          <div
            className="radial-progress text-[#50C878]"
            style={{ "--value": 90 }}
            role="progressbar"
          >
            82%
          </div>
          <h2 className="text-[#a6c7e3] text-center pt-4">JavaScript.js</h2>
        </div>
        <div>
          <div
            className="radial-progress text-[#50C878]"
            style={{ "--value": 90 }}
            role="progressbar"
          >
            80%
          </div>
          <h2 className="text-[#a6c7e3] text-center pt-4">Tailwind.css</h2>
        </div>
        <div>
          <div
            className="radial-progress text-[#097969]"
            style={{ "--value": 90 }}
            role="progressbar"
          >
            90%
          </div>
          <h2 className="text-[#a6c7e3] text-center pt-4">Html/CSS</h2>
        </div>
      </div>
    </div>
  );
};

export default Skills;
