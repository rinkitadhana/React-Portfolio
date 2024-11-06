import { FaRegFile } from "react-icons/fa6"
import ProjectBox from "./projectbox"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import CompScreen from "../Layouts/CompScreen"
import Title from "./Title"

const SelectedProjects = () => {
  const projects = [
    {
      id: 1,
      img: "./project/DailyCrime.png",
      title: "Daily Crimes",
      status: "Running",
      statusColor: "text-green-500",
      content:
        "This is a newspaper UI website designed to give you the authentic feel of reading a traditional newspaper. Explore news stories in a classic layout, blending modern web design with old-world charm.",
      url: "https://thedailycrimes.vercel.app/",
      github: "https://github.com/rinkitadhana/The-Daily-Crimes",
      skill: ["ReactJS", "TypeScript", "Tailwind", "GSAP"],
      preview: "./preview/dailycrimes.mp4",
    },
    {
      id: 2,
      img: "./project/apple.jpg",
      title: "Apple Clone",
      status: "Running",
      statusColor: "text-green-500",
      content:
        "This is a clone website of the iPhone 15 Pro, featuring 3D models and dynamic animations that bring the device to life. The smooth interactions and immersive visuals replicate the experience of a real product site. Explore every detail as if you’re navigating the official Apple page.",
      url: "https://therinkit-appleclone.vercel.app/",
      github: "https://github.com/rinkitadhana/iphone15-Apple-Clone",
      skill: ["ReactJs", "Tailwind", "GSAP", "ThreeJS"],
      preview: "",
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
      skill: ["React", "Tailwind", "Node", "Express", "AI"],
      preview: "./preview/tweetspree.mp4",
    },
  ]

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }
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
  )
}

export default SelectedProjects
