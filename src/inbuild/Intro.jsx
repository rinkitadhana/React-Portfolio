import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FiLinkedin } from "react-icons/fi";
import { LuGithub } from "react-icons/lu";

import { SiBuymeacoffee, SiLeetcode } from "react-icons/si";

const Intro = () => {
  return (
    <div className="md:px-6 px-3 md:mt-6 ">
      <div className=" flex flex-row gap-3 items-center">
        <img
          src="./IMG/dp2.jpg"
          className=" border md:size-40 size-32 rounded-full"
        />
        <div className=" flex flex-col">
          <div className=" md:text-4xl text-2xl font-bold font-bricolage">
            <span className=" text-theme-blue">Rinkit</span> Adhana
          </div>
          <div className=" md:text-lg hidden md:block text-sm font-semibold font-bricolage text-gray-600 dark:text-white">
            <span className=" text-pink-500">Full-Stack Developer</span> and{" "}
            <span className=" text-pink-500">Freelancer</span>, always building
            and learning.
          </div>
          <div className=" md:hidden font-semibold">
            A <span className=" text-pink-500">Full-Stack Developer</span>.
          </div>

          <div className="flex flex-row gap-2 text-2xl mt-1">
            <a
              href="https://x.com/rnkktt"
              target="_blank"
              className=" hover:text-theme-blue hover:scale-125 transition-transform delay-100"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://github.com/rinkitadhana"
              target="_blank"
              className="hover:text-theme-blue hover:scale-125 transition-transform delay-100"
            >
              <LuGithub />
            </a>
            <a
              href="https://www.instagram.com/rnkktt/"
              target="_blank"
              className="hover:text-theme-blue hover:scale-125 transition-transform delay-100"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/rinkitadhana/"
              target="_blank"
              className="hover:text-theme-blue hover:scale-125 transition-transform delay-100"
            >
              <FiLinkedin />
            </a>
            <a
              href="https://leetcode.com/u/therinkit/"
              target="_blank"
              className="hover:text-theme-blue hover:scale-125 transition-transform delay-100"
            >
              <SiLeetcode />
            </a>
            <a
              href=""
              target="_blank"
              className="hover:text-theme-blue hover:scale-125 transition-transform delay-100"
            >
              <SiBuymeacoffee />
            </a>
          </div>
          <a
            href="https://therinkit-linkit.vercel.app/"
            target="_blank"
            className=" hover:underline mt-1 w-fit "
          >
            therinkit-linkit.vercel.app
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
