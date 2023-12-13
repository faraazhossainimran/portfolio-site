import React from "react";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { PiMediumLogoFill } from "react-icons/pi";
import { FaSquareXTwitter } from "react-icons/fa6";
const Socials = () => {
  return (
    <div>
      <div className="flex items-center gap-4 text-4xl text-white">
        <a
          href="https://www.linkedin.com/in/faraazhossainimran/"
          className="hover:text-[#a6c7e3]"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/faraazhossainimran"
          className="hover:text-[#a6c7e3]"
        >
          <FaGithubSquare />
        </a>
        <a
          href="https://twitter.com/Ho34059710Imran"
          className="hover:text-[#a6c7e3]"
        >
          <FaSquareXTwitter />
        </a>
        <a
          href="https://medium.com/@faraazhossainimran"
          className="hover:text-[#a6c7e3]"
        >
          <PiMediumLogoFill />
        </a>
      </div>
    </div>
  );
};

export default Socials;
