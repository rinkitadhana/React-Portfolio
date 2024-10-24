import { FaArrowRightLong } from "react-icons/fa6"
import { Link } from "react-router-dom"

const Summary = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }
  return (
    <div className=" md:mt-6 mt-4 md:text-justify text-start  ">
      I'm currently in my Third year , pursuing B.Tech in Computer Science and
      Engineering at IPU, Delhi. Although I am familiar with many technologies,
      as listed in the "
      <span className=" font-bold font-sans opacity-70">Skills and Tools</span>"
      section, I primarily work with React with TypeScript and Tailwind for the
      frontend, and NodeJS and MongoDB for the backend. I have created many cool
      projects with these technologies, which you can view in the "
      <span className=" font-bold font-sans opacity-70">Projects</span>" section
      . Besides development, I am also skilled in Data Structures and Algorithms
      (DSA) and practice daily with LeetCode questions, which you can see on my
      LeetCode profile .
      <div className=" opacity-65 hover:opacity-95 transition-all  flex flex-row gap-1 items-center my-2 group cursor-pointer w-fit">
        <Link
          onClick={scrollToTop}
          to="/about"
          className="  font-sans font-semibold text-lg group-hover:underline transition-all "
        >
          See more about me
        </Link>
        <div className=" group-hover:-rotate-45 transition-all">
          <FaArrowRightLong />
        </div>
      </div>
    </div>
  )
}

export default Summary
