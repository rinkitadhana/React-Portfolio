import { FaRegFile } from "react-icons/fa6";
import ProjectBox from "./projectbox";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CompScreen from "../Layouts/CompScreen";
import Title from "./Title";

const SelectedProjects = () => {
  const projects = [
    {
      id: 1,
      img: "./project/promptopia.svg",
      title: "Promptopia",
      status: "Building",
      statusColor: "text-blue-500",
      content:
        "A full-stack Next.js project for sharing your AI prompts and using others' shared prompts, featuring Google authentication, profile management, and options to like, edit, and delete prompts. It also includes advanced search and filtering capabilities to easily find and manage prompts.",
      url: "https://therinkit-promptopia.vercel.app",
      github: "https://github.com/rinkitadhana/Promptopia",
      skill: ["NextJS", "MongoDB", "Tailwind"],
      preview: "./preview/building.mp4",
    },
    {
      id: 2,
      img: "./project/LinkIt.png",
      title: "LinkIt",
      status: "Running",
      statusColor: "text-green-500",
      content:
        "A project that includes all your social media and project links, fully customizable with a simple and easy-to-use interface. It provides a streamlined way to showcase your online presence, allowing you to effortlessly update and manage your profiles.",
      url: "https://therinkit-linkit.vercel.app/",
      github: "https://github.com/rinkitadhana/LinkIt",
      skill: ["React", "Tailwind"],
      preview: "./preview/linkit.mp4",
    },
    {
      id: 3,
      img: "./project/TweetSpree.png",
      title: "TweetSpree",
      status: "Running",
      statusColor: "text-green-500",
      content:
        "A project to boost your Twitter engagement by generating a variety of programming-related content, including fun questions, creative tweets, and useful advice. This tool helps you connect with your audience by providing fresh and engaging posts tailored to the programming community.",
      url: "https://therinkit-tweetspree.vercel.app/",
      github: "https://github.com/rinkitadhana/TweetSpree",
      skill: ["React", "Tailwind", "Node", "AI"],
      preview: "./preview/tweetspree.mp4",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <CompScreen>
      <Title title="Selected Projects" icon={<FaRegFile />} />
      {projects.map((project) => (
        <div key={project.id} className=" md:px-1.5">
          <ProjectBox
            img={project.img}
            title={project.title}
            status={project.status}
            statusColor={project.statusColor}
            content={project.content}
            url={project.url}
            github={project.github}
            skill={project.skill}
            preview={project.preview}
          />
        </div>
      ))}

      <div className="flex justify-center mt-4">
        <Link to="/project" whileTap={{ scale: 0.85 }} onClick={scrollToTop}>
          <motion.div
            whileHover={{
              scale: 1.07,
            }}
            transition={{ duration: 0.2 }}
            whileTap={{ scale: 0.85 }}
            onClick={() => handleNavigation("/project")}
            className="px-2 py-1.5 font-sans  cursor-pointer dark:shadow-none dark:border-none hover:bg-gray-200 dark:hover:bg-white/20 border-2 border-gray-200 shadow-md shadow-gray-300 font-medium text-black dark:text-white dark:bg-white/30 w-fit rounded-md "
          >
            show more
          </motion.div>
        </Link>
      </div>
    </CompScreen>
  );
};

export default SelectedProjects;
