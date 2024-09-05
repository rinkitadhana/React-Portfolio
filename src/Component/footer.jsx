import LiveClockUpdate from "../tool/Clock";
import { motion } from "framer-motion";
const Footer = () => {
  const date = new Date();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const showDate =
    months[date.getMonth()] + " " + date.getDate() + "," + date.getFullYear();
  return (
    <div className="flex flex-col py-5 text-gray-700 dark:text-white mt-6">
      <div className="text-center mb-4 text-sm font-bricolage font-semibold  md:text-base">
        Always open to{" "}
        <a
          href="https://github.com/rinkitadhana/React-Portfolio"
          target="_blank"
          className="hover:underline text-theme-blue"
        >
          feedback
        </a>{" "}
        on my work.
      </div>
      <div className=" flex flex-row gap-2 justify-center">
        <div>{showDate}</div>
        <LiveClockUpdate />
      </div>

      <div className="font-serif text-sm  md:text-base text-center">
        ©2024{" "}
        <a
          href="https://github.com/rinkitadhana"
          target="_blank"
          className=" text-pink-500 hover:text-theme-blue"
        >
          therinkit{" "}
        </a>
        . All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
