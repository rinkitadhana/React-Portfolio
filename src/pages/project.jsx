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
            img="https://upload.wikimedia.org/wikipedia/commons/c/c3/Kala_Ghoda_Statue.jpg"
            title="abc"
            status="Building"
            statusColor="text-blue-500"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            ullam, natus quia accusamus fuga debitis asperiores nemo adipisci
            error in!"
            url="https://www.youtube.com/watch?v=m7OWXtbiXX8"
            github="https://www.youtube.com/watch?v=m7OWXtbiXX8"
            skill={["React", "HTML", "CSS"]}
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
