import React, { useEffect } from "react";
import Button from "../../../components/Button/Button";
import resume from "../../../assets/files/resume-imran-hossain.pdf";
import { Link } from "react-scroll";
import Socials from "../../../components/Socials/Socials";
import 'aos/dist/aos.css';
import Aos from "aos";
const Promotion = () => {
  useEffect(()=> {
    Aos.init({duration: 1200})
  },[])
  return (
    <div className="py-12" data-aos="fade-up">
      <div class="grid grid-rows-1 md:grid-cols-12 gap-4 m-2 md:m-0">
        <div class="row-span-3 col-span-8">
          <div className="card py-2 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-700 my-6 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-4xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
                Let's <br />
                work together
              </h2>
              <p className="text-slate-300 my-2">Mobile: 01986348295</p>
              <p className="text-slate-300">
                Email: faraazhossainimran@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-4">
          <div className="">
            <div class="text-3xl my-[4px] text-center">
              <div className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
              Social Profiles
              </div>
              
            </div>
            <div class="row-span-2 text-white">
              <div className="card bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 shadow-xl">
                <div className="card-body">
                  <Socials></Socials>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <a href={resume} download={"resume-imran-hossain.pdf"}>
              <Button label={"Download Resume"}></Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotion;
