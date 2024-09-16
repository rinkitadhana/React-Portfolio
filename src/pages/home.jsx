import Skills from "../Component/skills"
import SelectedProjects from "../Component/selectedProjects"
import Highlights from "../Component/highlights"
import { motion } from "framer-motion"
import Intro from "../Component/Intro"
import { Link } from "react-router-dom"
import { FaArrowRightLong } from "react-icons/fa6"
import Certificate from "../Component/Certificates"

const Home = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.99 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <div className=" text-gray-700 dark:text-white flex justify-center mt-2">
        <div className="md:w-[900px] ">
          <div>
            <Intro />
          </div>

          <div>
            <div className=" md:mt-6 mt-4 md:text-justify text-start font-popins  md:px-6 px-4">
              I'm currently in my Third year , pursuing B.Tech in Computer
              Science and Engineering at IPU, Delhi. Although I am familiar with
              many technologies, as listed in the "
              <span className=" font-semibold font-sans text-theme-blue dark:text-white">
                Skills and Tools
              </span>
              " section, I primarily work with React and Tailwind for the
              frontend, and Express and MongoDB for the backend. I have created
              many cool projects with these technologies, which you can view in
              the "
              <span className=" font-semibold font-sans text-theme-blue dark:text-white">
                Projects
              </span>
              " section . Besides development, I am also skilled in Data
              Structures and Algorithms (DSA) and practice daily with LeetCode
              questions, which you can see on my LeetCode profile .
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
              Explore my <span className="text-theme-blue ">portfolio</span>. I
              hope you like it <span className=" text-pink-500">:)</span>
            </div>
          </div>

          <div></div>
          <div>
            <Skills />
            <SelectedProjects />
            <div id="cer">
              <Certificate />
            </div>
            <Highlights />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Home
