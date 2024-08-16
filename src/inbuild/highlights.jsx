import { BsFeather } from "react-icons/bs";
import { PiDotsThreeOutlineDuotone } from "react-icons/pi";
import HighlightText from "../tool/highlightText";

const Highlights = () => {
  return (
    <div className="md:px-6 px-3 mt-7 md:mt-0 ">
      <PiDotsThreeOutlineDuotone className=" text-2xl text-pink-500" />
      <div className=" font-bricolage flex items-center  gap-1 text-2xl font-semibold">
        Highlights
        <BsFeather />.
      </div>
      <div className="mt-3">
        <div className="border-b-2 dark:border-white/30"></div>
        <div>
          <div className=" border-b-2 dark:border-white/30">
            <div className=" py-4 text-center  md:text-start">
              I'm currently on a{" "}
              <span className=" font-bold text-gray-500 dark:text-white/50 ">
                100 Days of Code
              </span>{" "}
              journey, which I started on{" "}
              <span className=" font-bold text-gray-500 dark:text-white/50 ">
                July 9, 2024
              </span>
              . Every day, I'm learning something new in both{" "}
              <span className=" font-bold text-gray-500 dark:text-white/50 ">
                DSA and Development
              </span>
              . If you'd like to follow my progress, feel free to follow me on{" "}
              <a
                href="https://x.com/rnkktt"
                target="_blank"
                className="text-blue-500 font-medium hover:underline cursor-pointer"
              >
                Twitter
              </a>
              . You can also check my overall progress in this{" "}
              <a
                href="https://github.com/rinkitadhana/100-days-of-code"
                target="_blank"
                className="text-blue-500 font-medium hover:underline cursor-pointer"
              >
                Repository
              </a>
              .
            </div>
          </div>
          <div className=" border-b-2 dark:border-white/30">
            <div className=" py-4 text-center  md:text-start">
              I created my{" "}
              <span className=" font-bold text-gray-500 dark:text-white/50 ">
                first website
              </span>{" "}
              during my first-ever hackathon, held at{" "}
              <span className=" font-bold text-gray-500 dark:text-white/50 ">
                MSIT, Delhi
              </span>
              , using only{" "}
              <span className=" font-bold text-gray-500 dark:text-white/50 ">
                HTML, CSS, and JavaScript
              </span>{" "}
              with my team. I had no idea about any of it at the time, but I
              managed to create a simple website. Unfortunately, we didn't win,
              but we learned a lot and really enjoyed meeting fellow tech
              nerds... haha!{" "}
              <a
                href="https://enviroplus.netlify.app"
                target="_blank"
                className="text-blue-500 font-medium hover:underline cursor-pointer"
              >
                Project link
              </a>
            </div>
          </div>
          <div className=" border-b-2 dark:border-white/30">
            <div className=" py-4 text-center  md:text-start">
              I started learning programming with{" "}
              <span className=" font-bold text-gray-500 dark:text-white/50 ">
                Java
              </span>{" "}
              in my first year, with no prior knowledge of programming at all.
              Java quickly became my{" "}
              <span className=" font-bold text-gray-500 dark:text-white/50 ">
                first love {":)"}
              </span>{" "}
              Learning programming was so challenging for me that I switched
              teachers three times:{" "}
              <span className=" font-bold text-gray-500 dark:text-white/50 ">
                Ranga, Tim, and finally Mosh
              </span>
              . Mosh's Java course was exceptional and on point, ig that’s why
              he's the{" "}
              <span className=" font-bold text-gray-500 dark:text-white/50 ">
                GOAT
              </span>{" "}
              of tech community. I still use Java for DSA and plan to continue
              using it.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
