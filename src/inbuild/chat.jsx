import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FiLinkedin } from "react-icons/fi";
import { IoChatbubbleOutline } from "react-icons/io5";
import { LuGithub } from "react-icons/lu";

import { SiBuymeacoffee, SiLeetcode } from "react-icons/si";
import { PiDotsThreeOutlineDuotone } from "react-icons/pi";
const Chat = () => {
  return (
    <div className="md:px-6 px-3 mt-7">
      <PiDotsThreeOutlineDuotone className=" text-2xl text-pink-500" />

      <div className=" font-bricolage flex items-center gap-1 text-2xl font-semibold  ">
        Find Me on
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
  );
};

export default Chat;
<div className="md:px-6 px-3 mt-6">
  <PiDotsThreeOutlineDuotone className=" text-2xl text-pink-500" />

  <div className=" font-bricolage flex items-center gap-1 text-2xl font-semibold text-gray-800 dark:text-white ">
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
</div>;
