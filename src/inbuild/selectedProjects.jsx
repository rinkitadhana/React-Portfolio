import { FaRegFile } from "react-icons/fa6";

import ProjectBox from "../tool/projectbox";
import { PiDotsThreeOutlineDuotone } from "react-icons/pi";
import { Link } from "react-router-dom";

const SelectedProjects = () => {
  return (
    <div>
      <div className=" mt-7 md:px-6 px-3">
        <PiDotsThreeOutlineDuotone className=" text-2xl text-pink-500" />
        <div className=" font-bricolage flex items-center   gap-1 text-2xl font-semibold">
          Selected Projects
          <FaRegFile />.
        </div>
        <ProjectBox
          img="./project/Anecdot.png"
          title="Anecdot."
          status="Building"
          statusColor="text-blue-500"
          content="A full stack blogging website built using the MERN stack, offering a variety of features to enhance user experience. The website allows users to manage their profiles, and engage through comments and likes. It also includes user authentication and real-time updates."
          url="https://therinkit-building.vercel.app"
          github="https://github.com/rinkitadhana/Anecdot"
          skill={[
            "React",
            "Flowbite",
            "Tailwind",
            "Node",
            "Express",
            "Mongo",
            "Redux Toolkit",
          ]}
        />
        <ProjectBox
          img="./project/LinkIt.png"
          title="LinkIt"
          status="Running"
          statusColor="text-green-500"
          content="A project that includes all your social media and project links, fully customizable with a simple and easy-to-use interface. It provides a streamlined way to showcase your online presence, allowing you to effortlessly update and manage your profiles."
          url="https://therinkit-linkit.vercel.app/"
          github="https://github.com/rinkitadhana/LinkIt"
          skill={["React", "Tailwind"]}
        />
        <ProjectBox
          img="./project/TweetSpree.png"
          title="TweetSpree"
          status="Running"
          statusColor="text-green-500"
          content="A project to boost your Twitter engagement by generating a variety of programming-related content, including fun questions, creative tweets, and useful advice. This tool helps you connect with your audience by providing fresh and engaging posts tailored to the programming community."
          url="https://therinkit-tweetspree.vercel.app/"
          github="github.com/rinkitadhana/TweetSpree"
          skill={["React", "Tailwind", "Node", "AI"]}
        />

        <div className="flex justify-center mt-4">
          <a href="/project">
            <div className="px-2 py-1.5 cursor-pointer dark:shadow-none dark:border-none hover:bg-gray-200 dark:hover:bg-white/20 border-2 border-gray-200 shadow-md shadow-gray-300 font-semibold text-black dark:text-white dark:bg-white/30 w-fit rounded-md">
              show more
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SelectedProjects;
