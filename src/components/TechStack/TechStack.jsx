import React from 'react'
import { IoLogoReact } from "react-icons/io5";
import { BiLogoJavascript } from "react-icons/bi";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
const TechStack = () => {
    return (
        <div className='ml-2'>
            <div className="flex items-center gap-4 text-4xl text-white">
        <a
          href="https://react.dev"
          className="hover:text-[#a6c7e3] text-[#87CEEB] animate-spin"
        >
          <IoLogoReact />
        </a>
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          className="hover:text-[#a6c7e3] text-[#FFFF00]"
        >
         <BiLogoJavascript />
        </a>
        <a
          href="https://tailwindcss.com"
          className="hover:text-[#a6c7e3] text-[#87CEEB]"
        >
          <SiTailwindcss />
        </a>
        <a
          href="https://firebase.google.com"
          className="hover:text-[#a6c7e3] text-[#FFFF00]"
        >
          <IoLogoFirebase />
        </a>
        <a
          href="https://www.mongodb.com"
          className="hover:text-[#a6c7e3] text-[#00A36C] "
        >
          <SiMongodb />
        </a>
      </div> 
        </div>
    )
}

export default TechStack