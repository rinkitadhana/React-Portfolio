import Skills from "../Component/skills";
import SelectedProjects from "../Component/selectedProjects";
import Highlights from "../Component/highlights";
import { motion } from "framer-motion";
import Intro from "../Component/Intro";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import Certificate from "../Component/Certificates";

const Home = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className=" text-gray-700 dark:text-white flex justify-center mt-2">
      <div className="md:w-3/5 ">
        <div>
          <Intro />
        </div>
        <motion.div
          initial={{ opacity: 0, y: -30 }} // Start with 0 opacity and slightly above the final position
          animate={{ opacity: 1, y: 0 }} // Fade in and move down to the original position
          transition={{ duration: 0.6 }} // Duration of the animation
        >
          <div>
            <div className=" md:mt-6 mt-4 text-justify font-popins  px-6 ">
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
              <span className=" font-bold text-theme-blue dark:text-white">
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
              <span className=" font-bold text-theme-blue dark:text-white">
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
              <div className=" flex flex-row gap-1 items-center my-2 group cursor-pointer w-fit">
                <Link
                  onClick={scrollToTop}
                  to="/about"
                  className=" font-bricolage font-semibold text-lg group-hover:underline transition-all "
                >
                  See more about me
                </Link>
                <div className=" group-hover:-rotate-45 transition-all">
                  <FaArrowRightLong />
                </div>
              </div>
            </div>

            <div className=" text-center mt-3 font-bricolage font-semibold hidden md:block">
              Explore my{" "}
              <Link to="/" className="text-theme-blue hover:underline">
                portfolio
              </Link>
              . I hope you like it <span className=" text-pink-500">:)</span>
            </div>
          </div>
        </motion.div>

        <div></div>
        <div>
          <Skills />
          <SelectedProjects />
          <Certificate />
          <Highlights />
        </div>
      </div>
    </div>
  );
};

export default Home;
