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
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            ullam, natus quia accusamus fuga debitis asperiores nemo adipisci
            error in!"
            url="https://therinkit-building.vercel.app"
            github="https://therinkit-building.vercel.app"
            skill={["React", "Tailwind"]}
          />

          <ProjectBox
            img="./project/Apple.png"
            title="Apple Clone"
            status="Building"
            statusColor="text-blue-500"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            ullam, natus quia accusamus fuga debitis asperiores nemo adipisci
            error in!"
            url="https://therinkit-building.vercel.app"
            github="https://therinkit-building.vercel.app"
            skill={["React", "Tailwind"]}
          />
          <ProjectBox
            img="https://pbs.twimg.com/profile_images/1701878932176351232/AlNU3WTK_400x400.jpg"
            title="Text to Speech"
            status="Running"
            statusColor="text-green-500"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            ullam, natus quia accusamus fuga debitis asperiores nemo adipisci
            error in!"
            url="https://ttsrinkit.netlify.app/"
            github="https://github.com/rinkitadhana/text-to-speech"
            skill={["HTML", "Javascript", "Tailwind"]}
          />
          <ProjectBox
            img="https://pbs.twimg.com/profile_images/1701878932176351232/AlNU3WTK_400x400.jpg"
            title="LyteRate"
            status="Running"
            statusColor="text-green-500"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            ullam, natus quia accusamus fuga debitis asperiores nemo adipisci
            error in!"
            url="https://lyterate.netlify.app/"
            github="https://github.com/rinkitadhana/LyteRate"
            skill={["HTML", "CSS", "Javascript"]}
          />
          <ProjectBox
            img="https://pbs.twimg.com/profile_images/1701878932176351232/AlNU3WTK_400x400.jpg"
            title="Clean-up connect"
            status="Running"
            statusColor="text-green-500"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            ullam, natus quia accusamus fuga debitis asperiores nemo adipisci
            error in!"
            url="https://www.youtube.com/watch?v=m7OWXtbiXX8"
            github="https://www.youtube.com/watch?v=m7OWXtbiXX8"
            skill={["HTML", "CSS", "Javascript"]}
          />
          <ProjectBox
            img="./project/Snake.png"
            title="Snake Game"
            status="Running"
            statusColor="text-green-500"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            ullam, natus quia accusamus fuga debitis asperiores nemo adipisci
            error in!"
            url="https://www.youtube.com/watch?v=m7OWXtbiXX8"
            github="https://www.youtube.com/watch?v=m7OWXtbiXX8"
            skill={["Java", "JavaFX"]}
          />
          <ProjectBox
            img="./project/StopWatch.png"
            title="Stop Watch"
            status="Running"
            statusColor="text-green-500"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            ullam, natus quia accusamus fuga debitis asperiores nemo adipisci
            error in!"
            url="https://www.youtube.com/watch?v=m7OWXtbiXX8"
            github="https://www.youtube.com/watch?v=m7OWXtbiXX8"
            skill={["Java", "JavaFX"]}
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
