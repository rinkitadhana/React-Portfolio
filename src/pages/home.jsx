import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FiLinkedin } from "react-icons/fi";
import { IoChatbubbleOutline } from "react-icons/io5";
import { LuGithub } from "react-icons/lu";

import { SiBuymeacoffee, SiLeetcode } from "react-icons/si";
import Skills from "../inbuild/skills";
import SelectedProjects from "../inbuild/selectedProjects";

const Home = () => {
  return (
    <>
      <div className=" text-gray-700 dark:text-white min-h-screen flex flex-col items-center mt-1 ">
        <div className="md:w-3/5 ">
          <div>
            <h1 className=" text-center md:text-6xl md:mt-10 text-3xl font-bold">
              Hola, I'm
              <span className="text-[#2978b5]"> Rinkit Adhana</span>.
            </h1>
            <div className="hidden md:block text-center mt-5 text-lg font-semibold">
              <span className="font-bold ">Full Stack Developer </span>
              and <span className="font-bold ">Freelancer</span> who loves to
              build and ship stuffs.
            </div>
            <div className="text-center font-bold text-lg mt-2 md:hidden">
              A Full Stack Engineer
            </div>
            <div className=" mt-4 text-justify  md:text-center  px-6">
              Hi there! I'm Rinkit Adhana, a second-year student at Maharaja
              Agrasen Institute of Technology. I'm all about full-stack
              development, especially with MERN. I'm also into Data Structure
              AND Algorithms(DSA) and software development. Take a look around
              my portfolio and see the projects I have been working on!
            </div>
          </div>
          <div className="px-6 mt-6">
            <div className=" flex items-center gap-1 text-2xl font-semibold">
              Let's have a chat
              <IoChatbubbleOutline /> .
            </div>
            <div className="flex flex-row gap-3 text-3xl mt-3">
              <FaXTwitter />
              <LuGithub />
              <FaInstagram />
              <FiLinkedin />
              <SiLeetcode />
              <SiBuymeacoffee />
            </div>
          </div>
          <Skills />
          <SelectedProjects />
        </div>
      </div>
    </>
  );
};

export default Home;
