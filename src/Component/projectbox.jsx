import { FiGithub } from "react-icons/fi"
import { GoDotFill } from "react-icons/go"
import { IoIosLink } from "react-icons/io"
import { Link } from "react-router-dom"
import { Tooltip } from "../tool/ToolTip"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri"

const ProjectBox = (props) => {
  const [preview, setPreview] = useState(false)
  const handleClick = () => {
    setPreview(!preview)
  }

  return (
    <div>
      <div className=" rounded-lg  dark:bg-white/20  shadow-md shadow-gray-200 border-2 border-gray-100 dark:shadow-none dark:border-none mt-4 p-2 flex flex-col gap-2 ins">
        <AnimatePresence>
          {preview && (
            <motion.div
              initial={{ opacity: 0, y: 40 }} // Start with 0 opacity and slightly above the final position
              animate={{ opacity: 1, y: 0 }} // Fade in and move down to the original position
              transition={{ duration: 0.4 }} // Duration of the animation
              exit={{ opacity: 0, y: 40 }}
            >
              <video width="900" controls>
                <source src={props.preview} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex flex-row gap-4 items-center ">
          <img
            className=" size-20 rounded-lg"
            src={`${props.img}`}
            alt="oh no"
          />

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
                  <div className=" cursor-pointer " onClick={handleClick}>
                    {preview ? (
                      <Tooltip text="close">
                        <RiEyeOffLine className="hover:scale-125  transition-transform" />
                      </Tooltip>
                    ) : (
                      <Tooltip text="preview">
                        <RiEyeLine className="hover:scale-125  transition-transform" />
                      </Tooltip>
                    )}
                  </div>

                  {props.remove ? (
                    <></>
                  ) : (
                    <Tooltip text="live">
                      <Link
                        to={`${props.url}`}
                        target="_blank"
                        className=" cursor-pointer"
                      >
                        <IoIosLink className="text-blue-500 hover:scale-125 hover:text-blue-700 transition-transform" />
                      </Link>
                    </Tooltip>
                  )}
                  <Tooltip text="github">
                    <Link
                      to={`${props.github}`}
                      target="_blank"
                      className=" cursor-pointer"
                    >
                      <FiGithub className="hover:scale-125  transition-transform" />
                    </Link>
                  </Tooltip>
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
    </div>
  )
}

export default ProjectBox
