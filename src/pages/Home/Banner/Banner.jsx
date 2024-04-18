import { useEffect } from "react";
import Button from "../../../components/Button/Button";
import "./Banner.css";
import Typewriter from "typewriter-effect/dist/core";
import resume from "../../../assets/files/resume-imran-hossain-dev.pdf"
import TechStack from "../../../components/TechStack/TechStack";

const Banner = () => {
  useEffect(()=> {
    const typewritter = new Typewriter("#typewriter", {
      strings: ['A Frontend Developer', 'Experienced in JavaScript and React.js'],
      autoStart: true,
      delay: 30,
      // start: true
      loop: true,
      deleteChars: 5,
    })
    return ()=> {
      typewritter.stop()
    }
  },[])
  return (
    <div>
      <div className="grid md:grid-cols-4 py-24">
        <div className="text-white relative col-span-3">
          <div className="flex items-center">
            <div className="relative text-left px-8">
              {/* <p className="text-xl">Introduction</p> */}
              <h1 className="text-3xl mt-6 leading-16 text-center md:text-left text-slate-400">
                Hello, My name's Imran Hossain
              </h1>
              <div id="typewriter" className="text-2xl mt-4 text-slate-400"></div>
              <p className="pt-6 pb-4 text-[18px] text-slate-400">
                I'm Passionate about creating solutions that enhance lives and solve
                real-world problems. Let's code for a better tomorrow! 🌍
              </p>
              <div className="flex my-4">
                <p className="text-xl pt-2 text-slate-400">Tech Stack: </p>
                <TechStack></TechStack>
              </div>
              <button className="">
                <a
                  href={resume}
                  download={"Frontend-Developer-Imran-Hossain-dev.pdf"}
                >
                  <Button label={"Download Resume"}></Button>
                </a>
                {/* <a
                  href="https://devfaraazhossainimran.netlify.app/resume/resume-imran-hossain.pdf"
                  target="_blank"
                >
                  <Button label={"Download Resume"}></Button>
                </a> */}
              </button>
            </div>
          </div>
        </div>
        <div className="avatar hidden md:block ">
          <div className="md:w-[250px] rounded-full border-2 border-slate-300">
            <img
              className=""
              src="https://i.ibb.co/fDDfWqn/369572563-1378054442779951-4673260431813722840-n-removebg-preview.png"
            ></img>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Banner;
