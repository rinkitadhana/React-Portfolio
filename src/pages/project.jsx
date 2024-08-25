import ProjectBox from "../tool/projectbox";

const Project = () => {
  return (
    <div className=" text-gray-700 dark:text-white flex md:flex-row flex-col   justify-center mt-2">
      <div className="md:w-3/5  ">
        <div className="flex flex-row justify-between px-2 items-center">
          <div className=" text-2xl font-bricolage font-semibold">Projects</div>
          <a
            href="https://github.com/rinkitadhana?tab=repositories"
            target="_blank"
            className=" font-medium text-blue-500 hover:underline tracking-tight"
          >
            More on Github
          </a>
        </div>
        <div className="px-2.5">
          <ProjectBox
            img="./project/Anecdot.png"
            title="Anecdot."
            status="Building"
            statusColor="text-blue-500"
            content="A full stack blogging website built using the MERN stack, offering a variety of features to enhance user experience. The website allows users to manage their profiles, and engage through comments and likes. It also includes user authentication and real-time updates."
            url="https://therinkit-building.vercel.app"
            github="https://github.com/rinkitadhana/Anecdot"
            skill={[
              "React",
              "Tailwind",
              "Node",
              "Express",
              "Mongo",
              "Redux Toolkit",
            ]}
          />
          <ProjectBox
            img="./project/LinkIt.png"
            title="LinkIt"
            status="Running"
            statusColor="text-green-500"
            content="A project that includes all your social media and project links, fully customizable with a simple and easy-to-use interface. It provides a streamlined way to showcase your online presence, allowing you to effortlessly update and manage your profiles."
            url="https://therinkit-linkit.vercel.app/"
            github="https://github.com/rinkitadhana/LinkIt"
            skill={["React", "Tailwind"]}
          />
          <ProjectBox
            img="./project/TweetSpree.png"
            title="TweetSpree"
            status="Running"
            statusColor="text-green-500"
            content="A project to boost your Twitter engagement by generating a variety of programming-related content, including fun questions, creative tweets, and useful advice. This tool helps you connect with your audience by providing fresh and engaging posts tailored to the programming community."
            url="https://therinkit-tweetspree.vercel.app/"
            github="github.com/rinkitadhana/TweetSpree"
            skill={["React", "Tailwind", "Node", "AI"]}
          />
          <ProjectBox
            img="./project/11Hack.png"
            title="11Hack"
            status="Building"
            statusColor="text-blue-500"
            content="A full-stack project showcasing the top 11 hackathon ideas from various students, ranked by popularity. This project helps you effectively implement these ideas and improve your chances of winning."
            url="https://therinkit-building.vercel.app"
            github="https://therinkit-building.vercel.app"
            skill={["React", "Tailwind", "Express", "MongoDB"]}
          />

          <ProjectBox
            img="./project/TTS.png"
            title="Text to Speech"
            status="Running"
            statusColor="text-green-500"
            content="I created this simple text-to-speech project to refine my JavaScript skills. The special feature of this project is its UI, and it is fully functional. Additionally, it integrates various speech synthesis options to enhance user interaction."
            url="https://ttsrinkit.netlify.app/"
            github="https://github.com/rinkitadhana/text-to-speech"
            skill={["HTML", "Javascript", "Tailwind"]}
          />
          <ProjectBox
            img="./project/LyteRate.png"
            title="LyteRate"
            status="Running"
            statusColor="text-green-500"
            content="It is an educational website created during one of my hackathons, using only HTML, CSS, and JavaScript when I was in my first year. The UI is really great, and it demonstrates my early ability to create user-friendly designs."
            url="https://lyterate.netlify.app/"
            github="https://github.com/rinkitadhana/LyteRate"
            skill={["HTML", "CSS", "Javascript", "Bootstrap"]}
          />
          <ProjectBox
            img="./project/Xylem.png"
            title="Clean-up connect"
            status="Running"
            statusColor="text-green-500"
            content="This is a project and research paper on water pollution and its solutions, created for the Xylem-India hackathon. On the GitHub repository, you can find our solution, and the website contains additional representations."
            url="https://xylemcleanup.netlify.app/"
            github="https://github.com/rinkitadhana/Xylem-Research-Paper"
            skill={["HTML", "CSS", "Javascript", "Research"]}
          />
          <ProjectBox
            img="./project/Snake.png"
            title="Snake Game"
            status="Running"
            statusColor="text-green-500"
            content="I made this snake game in my first year just for fun. At that time, I was a big Java fan and created this project using Java and JavaFX. This project really helped me deepen my understanding of object-oriented programming."
            url="https://github.com/rinkitadhana/SnakeByJava"
            github="https://github.com/rinkitadhana/SnakeByJava"
            skill={["Java", "JavaFX"]}
          />
          <ProjectBox
            img="./project/StopWatch.png"
            title="Stop Watch"
            status="Running"
            statusColor="text-green-500"
            content="I created this stopwatch to customize its functionality. It was built using only Java and JavaFX and is fully operational. This project helped me enhance my skills in Java programming and GUI design"
            url="https://github.com/rinkitadhana/StopWatchByJava"
            github="https://github.com/rinkitadhana/StopWatchByJava"
            skill={["Java", "JavaFX"]}
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
