import ProjectBox from "../Component/projectbox"
import Title from "../Component/Title"
import Screen from "../Layouts/Screen"

const Project = () => {
  const projects = [
    {
      id: 1,
      img: "./project/DailyCrime.png",
      title: "Daily Crimes",
      status: "Running",
      statusColor: "text-green-500",
      content:
        "This is a newspaper UI website designed to give you the authentic feel of reading a traditional newspaper. Explore news stories in a classic layout, blending modern web design with old-world charm.",
      url: "https://thedailycrimes.vercel.app/",
      github: "https://github.com/rinkitadhana/The-Daily-Crimes",
      skill: ["ReactJS", "TypeScript", "Tailwind", "GSAP"],
      preview: "./preview/dailycrimes.mp4",
    },
    {
      id: 2,
      img: "./project/apple.jpg",
      title: "Apple Clone",
      status: "Running",
      statusColor: "text-green-500",
      content:
        "This is a clone website of the iPhone 15 Pro, featuring 3D models and dynamic animations that bring the device to life. The smooth interactions and immersive visuals replicate the experience of a real product site. Explore every detail as if you’re navigating the official Apple page.",
      url: "https://therinkit-appleclone.vercel.app/",
      github: "https://github.com/rinkitadhana/iphone15-Apple-Clone",
      skill: ["ReactJs", "Tailwind", "GSAP", "ThreeJS"],
      preview: "",
    },
    {
      id: 3,
      img: "./project/brain-rot.png",
      title: "Brain-Rot Converter",
      status: "Running",
      statusColor: "text-green-500",
      content:
        "Transform your text into trendy Gen Z language with just a click. Our converter adds slang, abbreviations, and casual phrases to make your message sound like it’s straight out of a meme. Give it a try and speak like the cool crowd!",
      url: "https://brainrot-language-converter.vercel.app/",
      github: "https://github.com/rinkitadhana/BrainRot-Language-Converter",
      skill: ["React", "Tailwind", "Hugging face api"],
      preview: "",
    },
    {
      id: 4,
      img: "./project/promptopia.svg",
      title: "Promptopia",
      status: "Running",
      statusColor: "text-green-500",
      content:
        "A full-stack Next.js project for sharing your AI prompts and using others' shared prompts, featuring Google authentication, profile management, and options to like, edit, and delete prompts. It also includes advanced search and filtering capabilities to easily find and manage prompts.",
      url: "https://therinkit-promptopia.vercel.app",
      github: "https://github.com/rinkitadhana/Promptopia",
      skill: ["NextJS", "MongoDB", "Tailwind"],
      preview: "./preview/promptopia.mp4",
    },
    {
      id: 5,
      img: "./project/TweetSpree.png",
      title: "TweetSpree",
      status: "Running",
      statusColor: "text-green-500",
      content:
        "A project to boost your Twitter engagement by generating a variety of programming-related content, including fun questions, creative tweets, and useful advice. This tool helps you connect with your audience by providing fresh and engaging posts tailored to the programming community.",
      url: "https://therinkit-tweetspree.vercel.app/",
      github: "https://github.com/rinkitadhana/TweetSpree",
      skill: ["React", "Tailwind", "Node", "Express", "AI"],
      preview: "./preview/tweetspree.mp4",
    },
    {
      id: 6,
      img: "./project/LinkIt.png",
      title: "LinkIt",
      status: "Running",
      statusColor: "text-green-500",
      content:
        "A project that includes all your social media and project links, fully customizable with a simple and easy-to-use interface. It provides a streamlined way to showcase your online presence, allowing you to effortlessly update and manage your profiles.",
      url: "https://therinkit-linkit.vercel.app/",
      github: "https://github.com/rinkitadhana/LinkIt",
      skill: ["React", "Tailwind", "GSAP"],
      preview: "./preview/linkit.mp4",
    },
    {
      id: 7,
      img: "./project/Anecdot.png",
      title: "Anecdot.",
      status: "Building",
      statusColor: "text-blue-500",
      content:
        "A full stack blogging website built using the MERN stack, offering a variety of features to enhance user experience. The website allows users to manage their profiles, and engage through comments and likes. It also includes user authentication and real-time updates.",
      url: "https://therinkit-anecdot.vercel.app/",
      github: "https://github.com/rinkitadhana/Anecdot",
      skill: ["React", "Tailwind", "Node", "Express", "MongoDB"],
      preview: "",
    },
    {
      id: 8,
      img: "./project/TTS.png",
      title: "VoiceForge",
      status: "Running",
      statusColor: "text-green-500",
      content:
        "VoiceForge brings your words to life with cutting-edge AI technology, creating natural-sounding voices for various applications. Whether you're developing virtual assistants, enhancing video games, or producing content, VoiceForge offers a diverse range of customizable voices that seamlessly integrate into any project.",
      url: "https://therinkit-voiceforge.vercel.app/",
      github: "https://github.com/rinkitadhana/text-to-speech",
      skill: ["NextJs", "Tailwind", "V0"],
      preview: "./preview/voiceforge.mp4",
    },
    {
      id: 9,
      img: "./project/11Hack.png",
      title: "11Hack",
      status: "Building",
      statusColor: "text-blue-500",
      content:
        "A full-stack project showcasing the top 11 hackathon ideas from various students, ranked by popularity. This project helps you effectively implement these ideas and improve your chances of winning.",
      url: "https://therinkit-building.vercel.app",
      github: "https://therinkit-building.vercel.app",
      skill: ["React", "Tailwind", "Node", "Express", "MongoDB"],
      preview: "",
    },
    {
      id: 10,
      img: "./project/Xylem.png",
      title: "Clean-up connect",
      status: "Running",
      statusColor: "text-green-500",
      content:
        "This is a project and research paper on water pollution and its solutions, created for the Xylem-India hackathon. On the GitHub repository, you can find our solution, and the website contains additional representations.",
      url: "https://xylemcleanup.netlify.app/",
      github: "https://github.com/rinkitadhana/Xylem-Research-Paper",
      skill: ["HTML", "CSS", "Javascript", "Python", "Research"],
      preview: "./preview/xylem.mp4",
    },
    {
      id: 11,
      img: "./project/Snake.png",
      title: "Snake Game",
      status: "Running",
      statusColor: "text-green-500",
      content:
        "I made this snake game in my first year just for fun. At that time, I was a big Java fan and created this project using Java and JavaFX. This project really helped me deepen my understanding of object-oriented programming.",
      remove: true,
      github: "https://github.com/rinkitadhana/SnakeByJava",
      skill: ["Java", "JavaFX"],
      preview: "./preview/snake.mp4",
    },
    {
      id: 12,
      img: "./project/StopWatch.png",
      title: "Stop Watch",
      status: "Running",
      statusColor: "text-green-500",
      content:
        "I created this stopwatch to customize its functionality. It was built using only Java and JavaFX and is fully operational. This project helped me enhance my skills in Java programming and GUI design.",
      remove: true,
      github: "https://github.com/rinkitadhana/StopWatchByJava",
      skill: ["Java", "JavaFX"],
      preview: "",
    },
  ]

  return (
    <Screen>
      <div className="flex flex-row justify-between items-center">
        <Title title="Projects" />
        <a
          href="https://github.com/rinkitadhana?tab=repositories"
          target="_blank"
          className=" font-medium text-blue-500 hover:underline tracking-tight"
        >
          More on Github
        </a>
      </div>

      {projects.map((project) => (
        <div key={project.id} className=" md:px-1.5">
          <ProjectBox
            img={project.img}
            title={project.title}
            status={project.status}
            statusColor={project.statusColor}
            content={project.content}
            url={project.url}
            github={project.github}
            skill={project.skill}
            preview={project.preview}
            remove={project.remove}
          />
        </div>
      ))}
    </Screen>
  )
}

export default Project
