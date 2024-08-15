import Building from "../inbuild/building";

const About = () => {
  return (
    <div className=" text-gray-700 dark:text-white flex flex-col md:flex-row  justify-center mt-2 ">
      <div className="md:w-3/5 px-2  ">
        <div className="flex flex-row justify-start ">
          <div className=" text-2xl font-bricolage font-semibold">About Me</div>
        </div>
        <div className=" leading-5  md:leading-6  px-2">
          <div className=" mt-2 md:text-start text-justify ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            debitis inventore, quidem, quod dolorum, nihil soluta vitae magni
            possimus repellat cupiditate quae asperiores consequuntur suscipit
            magnam tenetur incidunt? Quasi officiis voluptatibus unde! Odit
            dolore, minus necessitatibus dicta quasi iusto debitis consequuntur
            nihil sunt laudantium sit pariatur? Quas laborum facilis voluptate
            iste hic quasi. Deleniti, repudiandae.
          </div>
          <div className=" mt-2 md:text-start text-justify ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            debitis inventore, quidem, quod dolorum, nihil soluta vitae magni
            possimus repellat cupiditate quae asperiores consequuntur suscipit
            magnam tenetur incidunt? Quasi officiis voluptatibus unde! Odit
            dolore, minus necessitatibus dicta quasi iusto debitis consequuntur
            nihil sunt laudantium sit pariatur? Quas laborum facilis voluptate
            iste hic quasi. Deleniti, repudiandae.
          </div>
        </div>
        <div className=" hidden mt-8 md:flex justify-center ">
          <img
            className=" hover:translate-y-1 transition delay-100  rounded-2xl  shadow-black shadow-2xl"
            src="https://miro.medium.com/v2/resize:fit:1080/1*vBi4Ycgdn5t3lu2SvQXuog.gif"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
