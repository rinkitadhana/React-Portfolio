import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.99 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <div className=" page transition-opacity duration-500 opacity-100 text-gray-700 dark:text-white flex flex-col md:flex-row  justify-center mt-2  ">
        <div className="md:w-[900px] px-2  ">
          <div className="flex flex-row justify-start ">
            <div className=" text-2xl font-bricolage font-semibold">
              About Me
            </div>
          </div>
          <div className="px-2 mt-6 md:mt-0">
            <div className=" flex md:flex-row flex-col-reverse gap-2 items-center justify-between ">
              <div className=" md:text-start text-start w-full hidden md:block ">
                <ul className="text-[1.101rem]   ">
                  <li className=" flex flex-row gap-2 items-center">
                    <i className="fa-solid fa-paper-plane"></i> Lives in{" "}
                    <a
                      href="https://en.wikipedia.org/wiki/Delhi"
                      target="_blank"
                      className=" font-semibold underline cursor-pointer hover:text-blue-500"
                    >
                      Delhi, India.
                    </a>
                  </li>
                  <li className=" flex flex-row gap-1 items-center">
                    <i className="fa-solid fa-graduation-cap"></i>
                    Pursuing a Bachelor’s degree in{" "}
                    <span className="text-blue-500 font-semibold">
                      Computer Science and Engineering
                    </span>
                    .
                  </li>
                  <li className=" flex flex-row gap-2 items-center">
                    <i className="fa-solid fa-screwdriver-wrench"></i>
                    Primarily work with{" "}
                    <span>
                      <span className="text-blue-500 font-semibold">React</span>
                      ,
                      <span className="text-blue-500 font-semibold">
                        Tailwind CSS
                      </span>
                      ,{" "}
                      <span className="text-blue-500 font-semibold">
                        Node.js
                      </span>
                      , and{" "}
                      <span className="text-blue-500 font-semibold">
                        MongoDB
                      </span>
                      .
                    </span>
                  </li>
                  <li className=" flex flex-row gap-2 items-center">
                    <i className="fa-solid fa-briefcase"></i>
                    Open to new opportunities and freelancing. Any support is
                    appreciated!
                  </li>
                  <li className=" flex flex-row gap-2 items-center">
                    <i className="fa-solid fa-people-group"></i>
                    Always open to collaborating on research or development.
                  </li>
                  <li className=" flex flex-row gap-2 items-center">
                    <i className="fa-solid fa-medal"></i>
                    Professional Volleyball player with a strong interest in
                    football.
                  </li>

                  <li className=" flex flex-row gap-1 items-center">
                    <i className="fa-solid fa-code"></i>Code with music is my
                    therapy.{" "}
                    <a
                      href="https://open.spotify.com/playlist/1s4o3U5fmDvhGp3kA0W3Mf?si=149bd9a8df3e4d8f"
                      target="_blank"
                      className="  font-semibold underline hover:text-blue-500"
                    >
                      Playlist
                    </a>
                  </li>
                </ul>
              </div>
              <img
                className=" border md:size-56 rounded-full md:hover:scale-105  transition delay-100"
                src="/IMG/dp2.jpg"
              />
            </div>

            <div className="px-2 md:px-0 font-popins">
              <div className=" my-4  text-justify mt-6 ">
                Hey, I'm Rinkit Adhana, a third-year student exploring the field
                of engineering. I live in Delhi, India, and I'm a full-stack
                developer who loves building things and learning something new
                every day from them. I mainly work with React and Tailwind for
                frontend development and Express and MongoDB for backend. As a
                computer science student, I'm also skilled in data structures
                and algorithms and practice my problem-solving skills daily. I'm
                looking for opportunities in both web development and software
                engineering roles.
              </div>
              <div className=" my-4  text-justify ">
                With a strong foundation in various technologies, I have
                participated in multiple hackathons where I implemented
                innovative ideas using different tech stacks. I also earned some
                exciting merchandise and prizes, including{" "}
                <a
                  href="https://github.com/rinkitadhana/Certificates"
                  target="_blank"
                  className="font-semibold hover:underline text-blue-500"
                >
                  Certificates
                </a>
                . These experiences highlight my ability to work as a team
                player and lead a team effectively. I've successfully worked
                under various circumstances and tight timelines, adapting
                quickly to ensure the success of every project.
              </div>
              <div className=" my-4  text-justify ">
                Besides coding, I'm also a volleyball player on my college team,
                which has taught me how to effectively work with any team in any
                situation. Additionally, I've been a member of various societies
                and attended several orientations, which provided me with a
                broad understanding of how things work in computer science and
                helped me explore this field more deeply.
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-row justify-start mt-4">
              <div className=" text-2xl font-bricolage font-semibold">
                Days I code
              </div>
            </div>
            <div className=" p-4">
              <img
                className=" size-full"
                src="https://ghchart.rshah.org/008000/rinkitadhana"
                alt="rinkitadhana's Github chart"
              />

              <div className="mt-8 flex flex-col md:flex-row gap-2 ">
                <div>
                  <img src="https://leetcard.jacoblin.cool/therinkit?theme=light" />
                </div>
                <div>
                  <img src="https://streak-stats.demolab.com/?user=rinkitadhana&theme=light" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
