import { FiGithub } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";
import { IoIosLink } from "react-icons/io";
const ProjectBox = () => {
  return (
    <div className=" rounded-lg backdrop-blur-sm dark:bg-white/20 bg-black/5   mt-4 p-2 flex flex-col gap-2">
      <div className="flex flex-row gap-4 items-center">
        <img
          className=" size-20 rounded-lg"
          src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Kala_Ghoda_Statue.jpg"
          alt="cha mud gyoi"
        />
        <div>
          <div className=" flex justify-between items-center">
            <div className="flex  items-center gap-2">
              <div className=" font-bold text-gray-800 dark:text-white text-lg md:text-xl  ">
                Ghoda With Loda
              </div>
              <div className="hidden md:block">
                <div className=" dark:bg-white/20 bg-black/10 px-1 py-0.5  rounded-sm text-xs font-semibold dark:text-white text-black flex flex-row  items-center">
                  <GoDotFill className="text-green-500" />
                  Building
                </div>
              </div>
            </div>

            <div className="flex justify-between">
              <div className="text-lg flex flex-row gap-1.5">
                <IoIosLink className="text-blue-500" />
                <FiGithub />
              </div>
            </div>
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            ullam, natus quia accusamus fuga debitis asperiores nemo adipisci
            error in!
          </div>
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
