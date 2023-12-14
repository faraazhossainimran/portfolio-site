import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
const Education = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <div className="pb-8 m-4">
        <h1 className="text-3xl text-[#a6c7e3] my-12 text-center">Education</h1>
        <ul className="timeline timeline-vertical ">
          <li>
            <div className="timeline-start ">
              <div
                data-aos="fade-right"
                className="timeline-end timeline-box bg-gradient-to-b from-gray-900 via-gray-900 to-gray-700 my-6 text-white border-t-2 border-[#a6c7e3]"
              >
                <h3 className="text-2xl text-[#a6c7e3]">
                  B.S.C Hon's in Botany
                </h3>
                <p className="text-xl text-slate-300">
                  November 2017 - November 2023 | Gov Bangla College
                </p>
              </div>
            </div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="#F9E795"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div data-aos="fade-left" className="text-slate-300 timeline-end timeline-box text-xl bg-gradient-to-b from-gray-900 via-gray-900 to-gray-700 my-6 border-t-2 border-[#a6c7e3]">
              I've completed my Hon's there. My major subject was Botany
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-start">
              <div data-aos="fade-right" className="timeline-end timeline-box bg-gradient-to-b from-gray-900 via-gray-900 to-gray-700 my-6 text-white border-t-2 border-[#a6c7e3]">
                <h3 className="text-2xl text-[#a6c7e3]">
                  Higher Secondary Certificate
                </h3>
                <p className="text-xl text-slate-300">
                  July 1015 - April 2017 | Dhaka Imperial College
                </p>
              </div>
            </div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="#F9E795"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div data-aos="fade-left" className="text-slate-300 timeline-end timeline-box text-xl bg-gradient-to-b from-gray-900 via-gray-900 to-gray-700 my-6  border-t-2 border-[#a6c7e3]">
              I've completed my HSC from Dhaka Imperial College at Aftafnagor.
            </div>
            <hr />
          </li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default Education;
