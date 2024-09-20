import { BsFeather } from "react-icons/bs";
import CompScreen from "../Layouts/CompScreen";
import Title from "./Title";

const Highlights = () => {
  return (
    <CompScreen>
      {" "}
      <Title title="Highlights" icon={<BsFeather />} />
      <div className="mt-3 text-base ">
        <div className="border-b-2 dark:border-white/30 "></div>
        <div className=" divide-y-2 dark:divide-white/30 ">
          <div>
            <div className=" py-4 md:text-justify text-start  ">
              I'm currently on a 100 Days of Code journey, which I started on
              July 9, 2024 . Every day, I'm learning something new in both DSA
              and Development . If you'd like to follow my progress, feel free
              to follow me on{" "}
              <a
                href="https://x.com/rnkktt"
                target="_blank"
                className="text-blue-500 font-semibold font-sans hover:underline cursor-pointer"
              >
                Twitter
              </a>
              . You can also check my overall progress in this{" "}
              <a
                href="https://github.com/rinkitadhana/100-days-of-code"
                target="_blank"
                className="text-blue-500 font-semibold font-sans hover:underline cursor-pointer"
              >
                Repository
              </a>
              .
            </div>
          </div>
          <div>
            <div className=" py-4 md:text-justify text-start ">
              I created my first website during my first-ever hackathon, held at
              MSIT, Delhi , using only HTML, CSS, and JavaScript with my team. I
              had no idea about any of it at the time, but I managed to create a
              simple website. Unfortunately, we didn't win, but we learned a lot
              and really enjoyed meeting fellow tech nerds... haha!{" "}
              <a
                href="https://enviroplus.netlify.app"
                target="_blank"
                className="text-blue-500 font-semibold font-sans hover:underline cursor-pointer"
              >
                Project link
              </a>
            </div>
          </div>
          <div>
            <div className=" py-4 md:text-justify text-start ">
              I started learning programming with Java in my first year, with no
              prior knowledge of programming at all. Java quickly became my
              first love :) Learning programming was so challenging for me that
              I switched teachers three times: Ranga, Tim, and finally Mosh .
              Mosh's Java course was exceptional and on point, ig that’s why
              he's the GOAT of tech community. I still use Java for DSA and plan
              to continue using it.
            </div>
          </div>
        </div>
        <div className="border-b-2 dark:border-white/30"></div>
      </div>
    </CompScreen>
  );
};

export default Highlights;
