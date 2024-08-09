import { FiGithub } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";
import { IoIosLink } from "react-icons/io";
import { Link } from "react-router-dom";
const ProjectBox = (props) => {
  return (
    <div className=" rounded-lg  dark:bg-white/20 bg-black/5   mt-4 p-2 flex flex-col gap-2">
      <div className="flex flex-row gap-4 items-center">
        <img
          className=" size-20 rounded-lg"
          src={`${props.img}`}
          alt="cha mud gyoi"
        />
        <div>
          <div className=" flex justify-between items-center">
            <div className="flex  items-center gap-2">
              <div className=" font-semibold tracking-tight		 text-gray-700 dark:text-white text-lg md:text-xl  ">
                {props.title}
              </div>
              <div className="hidden md:block">
                <div className=" dark:bg-white/20 bg-black/10 px-1 py-0.5  rounded-sm text-xs font-semibold dark:text-white text-black flex flex-row  items-center">
                  <GoDotFill className={`${props.statusColor}`} />
                  {props.status}
                </div>
              </div>
            </div>

            <div className="flex justify-between">
              <div className="text-lg flex flex-row gap-1.5">
                <Link
                  to={`${props.url}`}
                  target="_blank"
                  className=" cursor-pointer"
                >
                  <IoIosLink className="text-blue-500" />
                </Link>
                <Link
                  to={`${props.github}`}
                  target="_blank"
                  className=" cursor-pointer"
                >
                  <FiGithub />
                </Link>
              </div>
            </div>
          </div>
          <div>{props.content}</div>
        </div>
      </div>
      <div className="flex flex-row gap-2.5">
        <div className=" dark:bg-white/20 bg-black/10 px-1 py-0.5  rounded-sm text-xs  dark:text-white  flex flex-row  items-center">
          HTML
        </div>
        <div className=" dark:bg-white/20 bg-black/10 px-1 py-0.5  rounded-sm text-xs  dark:text-white  flex flex-row  items-center">
          CSS
        </div>
        <div className=" dark:bg-white/20 bg-black/10 px-1 py-0.5  rounded-sm text-xs  dark:text-white  flex flex-row  items-center">
          JavaScript
        </div>
        <div className=" dark:bg-white/20 bg-black/10 px-1 py-0.5  rounded-sm text-xs  dark:text-white  flex flex-row  items-center">
          React
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;
