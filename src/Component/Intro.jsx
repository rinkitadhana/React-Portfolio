import { useEffect, useState } from "react"
import { FaInstagram, FaXTwitter } from "react-icons/fa6"
import { FiLinkedin } from "react-icons/fi"
import { LuGithub } from "react-icons/lu"
import { SiBuymeacoffee, SiLeetcode } from "react-icons/si"

const Intro = () => {
  const links = [
    {
      href: "https://x.com/damnGruz",
      logo: <FaXTwitter />,
    },
    {
      href: "https://github.com/rinkitadhana",
      logo: <LuGithub />,
    },
    {
      href: "https://www.linkedin.com/in/rinkitadhana/",
      logo: <FiLinkedin />,
    },
    {
      href: "https://leetcode.com/u/therinkit/",
      logo: <SiLeetcode />,
    },
    {
      href: "https://www.instagram.com/rnkktt/",
      logo: <FaInstagram />,
    },
    {
      href: "",
      logo: <SiBuymeacoffee />,
    },
  ]

  return (
    <div className=" flex flex-row gap-3 items-center">
      <img
        src="./IMG/dp2.jpg"
        className=" border md:size-40 size-32 rounded-full"
      />
      <div className=" flex flex-col">
        <div className=" md:text-4xl text-2xl font-bold font-bricolage">
          <span className=" text-theme-blue">Rinkit</span> Adhana
        </div>
        <div className=" md:text-lg hidden md:block text-sm font-semibold font-bricolage text-gray-600 dark:text-white">
          <span className=" text-pink-500">Full-Stack Developer</span> and{" "}
          <span className=" text-pink-500">Freelancer</span>, always building
          and learning.
        </div>
        <div className=" md:hidden font-semibold">
          A <span className=" text-pink-500">Full-Stack Developer</span>.
        </div>

        <div className="flex flex-wrap gap-2 text-2xl mt-1">
          {links.map((item) => (
            <a
              key={item.logo}
              href={item.href}
              target="_blank"
              className="hover:text-theme-blue hover:scale-125 transition-transform delay-100"
            >
              {item.logo}
            </a>
          ))}
        </div>
        <a
          href="https://therinkit-linkit.vercel.app/"
          target="_blank"
          className=" hover:underline mt-1 w-fit text-blue-500"
        >
          therinkit-linkit.online
        </a>
      </div>
    </div>
  )
}

export default Intro
