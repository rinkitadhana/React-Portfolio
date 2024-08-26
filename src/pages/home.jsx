import Skills from "../inbuild/skills";
import SelectedProjects from "../inbuild/selectedProjects";
import Highlights from "../inbuild/highlights";
import Chat from "../inbuild/chat";
import helloInLanguages from "../tool/HelloData";
import { useEffect, useState } from "react";

const Home = () => {
  return (
    <>
      <div className=" text-gray-700 dark:text-white flex justify-center mt-2">
        <div className="md:w-3/5 ">
          <div>
            <h1 className=" text-gray-700  dark:text-white text-center md:text-6xl md:mt-8 text-3xl font-bold font-bricolage">
              <span>
                Hola, I'm <span className="text-theme-blue">Rinkit Adhana</span>
              </span>
            </h1>
            <div className="hidden md:block text-center mt-2 text-lg font-semibold">
              <span className="font-bold text-pink-500 ">
                Full Stack Developer{" "}
              </span>
              and <span className="font-bold text-pink-500">Freelancer</span>{" "}
              who loves to build and ship stuffs.
            </div>
            <div className="text-center font-bold text-lg mt-1 md:hidden">
              A <span className=" text-pink-500">Full Stack</span> Engineer
            </div>
            <div className=" md:mt-6 mt-4 text-justify  px-6 ">
              I'm currently in my{" "}
              <span className=" font-bold text-gray-500 dark:text-white">
                Third year
              </span>
              , pursuing B.Tech in{" "}
              <span className=" font-bold text-gray-500 dark:text-white">
                Computer Science and Engineering
              </span>{" "}
              at IPU, Delhi. Although I am familiar with many technologies, as
              listed in the "
              <span className=" font-bold text-gray-500 dark:text-white">
                Skills and Tools
              </span>
              " section, I primarily work with{" "}
              <span className=" font-bold text-gray-500 dark:text-white">
                React and Tailwind
              </span>{" "}
              for the frontend, and{" "}
              <span className=" font-bold text-gray-500 dark:text-white">
                Express and MongoDB
              </span>{" "}
              for the backend. I have created many cool projects with these
              technologies, which you can view in the "
              <span className=" font-bold text-gray-500 dark:text-white">
                Projects
              </span>
              " section . Besides development, I am also skilled in{" "}
              <span className=" font-bold text-gray-500 dark:text-white">
                Data Structures and Algorithms
              </span>{" "}
              (DSA) and practice daily with LeetCode questions, which you can
              see on my{" "}
              <span className=" font-bold text-gray-500 dark:text-white">
                LeetCode profile
              </span>
              .
            </div>
            <div className=" text-center mt-3 font-bricolage font-semibold text-sm md:text-base">
              Explore my <span className="text-theme-blue">portfolio</span>. I
              hope you like it <span className=" text-pink-500">:)</span>
            </div>
          </div>
          <div>
            <Chat />
            <Skills />
            <SelectedProjects />
            <Highlights />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
