import { BiLogoPostgresql } from "react-icons/bi";
import { DiJavascript } from "react-icons/di";
import { FaRegPlayCircle } from "react-icons/fa";
import { FaBootstrap, FaCss3Alt, FaGitAlt, FaGithub } from "react-icons/fa6";
import { FiDatabase, FiFigma } from "react-icons/fi";
import { IoLogoNodejs } from "react-icons/io5";
import { motion } from "framer-motion";
import { PiDotsThreeOutlineDuotone } from "react-icons/pi";
import {
  RiHtml5Fill,
  RiJavaLine,
  RiNextjsLine,
  RiReactjsLine,
  RiTailwindCssFill,
} from "react-icons/ri";
import {
  SiExpress,
  SiInsomnia,
  SiMongodb,
  SiNetlify,
  SiPostman,
  SiVercel,
} from "react-icons/si";
import {
  TbBrandCpp,
  TbBrandFramerMotion,
  TbBrandTypescript,
  TbHexagonLetterC,
  TbHexagonLetterM,
} from "react-icons/tb";
import { VscTerminalLinux, VscTools } from "react-icons/vsc";
const Skills = () => {
  return (
    <div className="mt-7">
      <div className=" font-bricolage flex items-center   gap-1 text-2xl font-semibold">
        Skills & Tools
        <VscTools /> .
      </div>
      <div className=" mt-3 flex flex-wrap gap-1.5 dark:text-white text-lg   text-gray-700">
        <div className=" flex flex-row gap-1 rounded-md  justify-center items-center font-medium w-fit px-2  dark:bg-white/30 shadow shadow-gray-200 border-2 border-gray-200 dark:border-white/20 dark:shadow-none  hover:bg-gray-200 dark:hover:bg-white/20 cursor-pointer transition-all">
          <RiHtml5Fill /> HTML
        </div>
        <div className=" flex flex-row gap-1  rounded-md  justify-center items-center font-medium w-fit px-2  dark:bg-white/30 shadow shadow-gray-200 border-2 border-gray-200 dark:shadow-none dark:border-white/20 hover:bg-gray-200 dark:hover:bg-white/20  cursor-pointer transition-all">
          <FaCss3Alt /> CSS
        </div>
        <div className=" flex flex-row gap-1  rounded-md  justify-center items-center font-medium w-fit px-2  dark:bg-white/30 shadow shadow-gray-200 border-2 border-gray-200 dark:shadow-none dark:border-white/20 hover:bg-gray-200 dark:hover:bg-white/20  cursor-pointer transition-all">
          <DiJavascript /> JavaScript
        </div>
        <div className=" flex flex-row gap-1  rounded-md  justify-center items-center font-medium w-fit px-2  dark:bg-white/30 shadow shadow-gray-200 border-2 border-gray-200 dark:shadow-none dark:border-white/20 hover:bg-gray-200 dark:hover:bg-white/20  cursor-pointer transition-all">
          <TbBrandTypescript />
          TypeScript
        </div>
        <div className=" flex flex-row gap-1  rounded-md  justify-center items-center font-medium w-fit px-2  dark:bg-white/30 shadow shadow-gray-200 border-2 border-gray-200 dark:shadow-none dark:border-white/20 hover:bg-gray-200 dark:hover:bg-white/20  cursor-pointer transition-all">
          <RiTailwindCssFill /> Tailwind
        </div>
        <div className=" flex flex-row gap-1  rounded-md  justify-center items-center font-medium w-fit px-2  dark:bg-white/30 shadow shadow-gray-200 border-2 border-gray-200 dark:shadow-none dark:border-white/20 hover:bg-gray-200 dark:hover:bg-white/20  cursor-pointer transition-all">
          <RiReactjsLine /> ReactJs
        </div>
        <div className=" flex flex-row gap-1  rounded-md  justify-center items-center font-medium w-fit px-2  dark:bg-white/30 shadow shadow-gray-200 border-2 border-gray-200 dark:shadow-none dark:border-white/20 hover:bg-gray-200 dark:hover:bg-white/20  cursor-pointer transition-all">
          <RiNextjsLine />
          NextJs
        </div>
        <div className=" flex flex-row gap-1  rounded-md  justify-center items-center font-medium w-fit px-2  dark:bg-white/30 shadow shadow-gray-200 border-2 border-gray-200 dark:shadow-none dark:border-white/20 hover:bg-gray-200 dark:hover:bg-white/20  cursor-pointer transition-all">
          <FaRegPlayCircle /> Flowbite
        </div>
        <div className=" flex flex-row gap-1  rounded-md  justify-center items-center font-medium w-fit px-2  dark:bg-white/30 shadow shadow-gray-200 border-2 border-gray-200 dark:shadow-none dark:border-white/20 hover:bg-gray-200 dark:hover:bg-white/20  cursor-pointer transition-all">
          <TbBrandFramerMotion /> Framer Motion
        </div>

        <div className=" flex flex-row gap-1  rounded-md  justify-center items-center font-medium w-fit px-2  dark:bg-white/30 shadow shadow-gray-200 border-2 border-gray-200 dark:shadow-none dark:border-white/20 hover:bg-gray-200 dark:hover:bg-white/20  cursor-pointer transition-all">
          <IoLogoNodejs /> NodeJS
        </div>

        <div className=" flex flex-row gap-1  rounded-md  justify-center items-center font-medium w-fit px-2  dark:bg-white/30 shadow shadow-gray-200 border-2 border-gray-200 dark:shadow-none dark:border-white/20 hover:bg-gray-200 dark:hover:bg-white/20  cursor-pointer transition-all">
          <SiExpress /> ExpressJS
        </div>
        <div className=" flex flex-row gap-1  rounded-md  justify-center items-center font-medium w-fit px-2  dark:bg-white/30 shadow shadow-gray-200 border-2 border-gray-200 dark:shadow-none dark:border-white/20 hover:bg-gray-200 dark:hover:bg-white/20  cursor-pointer transition-all">
          <SiPostman /> Postman
        </div>

        <div className=" flex flex-row gap-1  rounded-md  justify-center items-center font-medium w-fit px-2  dark:bg-white/30 shadow shadow-gray-200 border-2 border-gray-200 dark:shadow-none dark:border-white/20 hover:bg-gray-200 dark:hover:bg-white/20  cursor-pointer transition-all">
          <BiLogoPostgresql /> PostgreSQL
        </div>
        <div className=" flex flex-row gap-1  rounded-md  justify-center items-center font-medium w-fit px-2  dark:bg-white/30 shadow shadow-gray-200 border-2 border-gray-200 dark:shadow-none dark:border-white/20 hover:bg-gray-200 dark:hover:bg-white/20  cursor-pointer transition-all">
          <SiMongodb /> MongoDB
        </div>
        <div className=" flex flex-row gap-1  rounded-md  justify-center items-center font-medium w-fit px-2  dark:bg-white/30 shadow shadow-gray-200 border-2 border-gray-200 dark:shadow-none dark:border-white/20 hover:bg-gray-200 dark:hover:bg-white/20  cursor-pointer transition-all">
          <FaGitAlt /> Git
        </div>
        <div className=" flex flex-row gap-1  rounded-md  justify-center items-center font-medium w-fit px-2  dark:bg-white/30 shadow shadow-gray-200 border-2 border-gray-200 dark:shadow-none dark:border-white/20 hover:bg-gray-200 dark:hover:bg-white/20  cursor-pointer transition-all">
          <FaGithub /> GitHub
        </div>
        <div className=" flex flex-row gap-1  rounded-md  justify-center items-center font-medium w-fit px-2  dark:bg-white/30 shadow shadow-gray-200 border-2 border-gray-200 dark:shadow-none dark:border-white/20 hover:bg-gray-200 dark:hover:bg-white/20  cursor-pointer transition-all">
          <RiJavaLine /> Java
        </div>
        <div className=" flex flex-row gap-1  rounded-md  justify-center items-center font-medium w-fit px-2  dark:bg-white/30 shadow shadow-gray-200 border-2 border-gray-200 dark:shadow-none dark:border-white/20 hover:bg-gray-200 dark:hover:bg-white/20  cursor-pointer transition-all">
          <TbHexagonLetterC /> C
        </div>

        <div className=" flex flex-row gap-1  rounded-md  justify-center items-center font-medium w-fit px-2  dark:bg-white/30 shadow shadow-gray-200 border-2 border-gray-200 dark:shadow-none dark:border-white/20 hover:bg-gray-200 dark:hover:bg-white/20  cursor-pointer transition-all">
          <TbBrandCpp /> C++
        </div>

        <div className=" flex flex-row gap-1  rounded-md  justify-center items-center font-medium w-fit px-2  dark:bg-white/30 shadow shadow-gray-200 border-2 border-gray-200 dark:shadow-none dark:border-white/20 hover:bg-gray-200 dark:hover:bg-white/20  cursor-pointer transition-all">
          <VscTerminalLinux /> Linux
        </div>

        <div className=" flex flex-row gap-1  rounded-md  justify-center items-center font-medium w-fit px-2  dark:bg-white/30 shadow shadow-gray-200 border-2 border-gray-200 dark:shadow-none dark:border-white/20 hover:bg-gray-200 dark:hover:bg-white/20  cursor-pointer transition-all">
          <SiVercel /> Vercel
        </div>
      </div>
    </div>
  );
};

export default Skills;
