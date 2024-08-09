import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FiLinkedin } from "react-icons/fi";
import { IoChatbubbleOutline } from "react-icons/io5";
import { LuGithub } from "react-icons/lu";

import { SiBuymeacoffee, SiLeetcode } from "react-icons/si";
import Skills from "../inbuild/skills";
import SelectedProjects from "../inbuild/selectedProjects";
import { PiDotsThreeOutlineDuotone } from "react-icons/pi";

const Home = () => {
  return (
    <>
      <div className=" text-gray-700 dark:text-white flex justify-center mt-2">
        <div className="md:w-3/5 ">
          <div>
            <h1 className=" text-center md:text-6xl md:mt-8 text-3xl font-bold font-bricolage">
              Hola, I'm
              <span className="text-theme-blue"> Rinkit Adhana</span>.
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
            <div className=" md:mt-6 mt-4 text-justify px-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
              odit aut natus, ducimus, tempora velit exercitationem eum facilis
              magnam placeat debitis aliquam eveniet molestiae nostrum.
              Reiciendis, ut autem? Quod reiciendis tempora ratione non,
              deserunt possimus minus mollitia sapiente a neque, consequuntur
              voluptate repellendus esse ab dolor perferendis, animi accusantium
              illo hic sed culpa doloremque. Eos, dolorum optio non voluptate
              consequatur nobis veritatis quam distinctio quasi earum.
            </div>
          </div>
          <div className="px-6 mt-3">
            <PiDotsThreeOutlineDuotone className=" text-2xl text-pink-500" />

            <div className=" flex items-center gap-1 text-2xl font-semibold">
              Let's have a chat
              <IoChatbubbleOutline /> .
            </div>

            <div className="flex flex-row gap-3 text-3xl mt-3">
              <a
                href="https://x.com/rnkktt"
                target="_blank"
                className="hover:text-theme-blue"
              >
                <FaXTwitter />
              </a>
              <a
                href="https://github.com/rinkitadhana"
                target="_blank"
                className="hover:text-theme-blue"
              >
                <LuGithub />
              </a>
              <a
                href="https://www.instagram.com/rnkktt/"
                target="_blank"
                className="hover:text-theme-blue"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/in/rinkitadhana/"
                target="_blank"
                className="hover:text-theme-blue"
              >
                <FiLinkedin />
              </a>
              <a
                href="https://leetcode.com/u/therinkit/"
                target="_blank"
                className="hover:text-theme-blue"
              >
                <SiLeetcode />
              </a>
              <a href="" target="_blank" className="hover:text-theme-blue">
                <SiBuymeacoffee />
              </a>
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
