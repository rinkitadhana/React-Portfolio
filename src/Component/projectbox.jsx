import { FiGithub } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";
import { IoIosLink } from "react-icons/io";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProjectBox = (props) => {
  return (
    <div className=" rounded-lg  dark:bg-white/20  shadow-md shadow-gray-200 border-2 border-gray-100 dark:shadow-none dark:border-none mt-4 p-2 flex flex-col gap-2 font-popins">
      <div className="flex flex-row gap-4 items-center ">
        <img className=" size-20 rounded-lg" src={`${props.img}`} alt="oh no" />

        <div>
          <div className=" flex justify-between items-center">
            <div className="flex  items-center gap-2">
              <div className=" font-semibold tracking-tight text-gray-700 dark:text-white text-lg md:text-xl  ">
                {props.title}
              </div>
              <div className="hidden md:block">
                <div className=" dark:bg-white/20 shadow shadow-gray-200 border-[1.5px] border-gray-200 px-1.5 py-0.5 dark:shadow-none dark:border-none  rounded-md text-xs font-semibold dark:text-white text-black flex flex-row  items-center">
                  <GoDotFill className={`${props.statusColor}`} />
                  {props.status}
                </div>
              </div>
            </div>

            <div className="flex justify-between">
              <div className="text-lg flex flex-row gap-1.5">
                {props.remove ? (
                  <></>
                ) : (
                  <Link
                    title="live"
                    to={`${props.url}`}
                    target="_blank"
                    className=" cursor-pointer"
                  >
                    <IoIosLink className="text-blue-500 hover:scale-125 hover:text-blue-700 transition-transform" />
                  </Link>
                )}

                <Link
                  title="github"
                  to={`${props.github}`}
                  target="_blank"
                  className=" cursor-pointer"
                >
                  <FiGithub className="hover:scale-125  transition-transform" />
                </Link>
              </div>
            </div>
          </div>
          <div className=" text-[0.9rem] ">{props.content}</div>
        </div>
      </div>
      <ul className="flex flex-wrap gap-2.5">
        {props.skill.map((skills, index) => (
          <li
            key={index}
            className=" dark:bg-white/20 shadow shadow-gray-200 border-[1.5px] border-gray-200 px-1.5 py-0.5 dark:shadow-none dark:border-none rounded-md
          text-xs dark:text-white font-medium flex flex-row items-center"
          >
            {skills}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectBox;
