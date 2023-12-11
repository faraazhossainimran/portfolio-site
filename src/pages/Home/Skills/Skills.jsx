import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
const Skills = () => {
  return (
    <div className="py-16">
      <h1 className="text-3xl my-16 text-center text-white">My Skills</h1>
      <div className="grid grid-cols-6 place-items-center gap-12">
        <div>
          <div
            className="radial-progress text-white"
            style={{ "--value": 70 }}
            role="progressbar"
          >
            70%
          </div>
          <h2 className="text-white text-center pt-4">React.js</h2>
        </div>
        <div>
          <div
            className="radial-progress text-white"
            style={{ "--value": 70 }}
            role="progressbar"
          >
            70%
          </div>
          <h2 className="text-white text-center pt-4">Node.js</h2>
        </div>
        <div>
          <div
            className="radial-progress text-white"
            style={{ "--value": 70 }}
            role="progressbar"
          >
            70%
          </div>
          <h2 className="text-white text-center pt-4">MongoDb.js</h2>
        </div>
        <div>
          <div
            className="radial-progress text-white"
            style={{ "--value": 90 }}
            role="progressbar"
          >
            90%
          </div>
          <h2 className="text-white text-center pt-4">JavaScript.js</h2>
        </div>
        <div>
          <div
            className="radial-progress text-white"
            style={{ "--value": 90 }}
            role="progressbar"
          >
            90%
          </div>
          <h2 className="text-white text-center pt-4">Tailwind.css</h2>
        </div>
        <div>
          <div
            className="radial-progress text-white"
            style={{ "--value": 90 }}
            role="progressbar"
          >
            90%
          </div>
          <h2 className="text-white text-center pt-4">Html/CSS</h2>
        </div>
      </div>
    </div>
  );
};

export default Skills;
