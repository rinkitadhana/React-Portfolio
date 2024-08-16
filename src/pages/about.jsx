import Building from "../inbuild/building";

const About = () => {
  return (
    <div className=" text-gray-700 dark:text-white flex flex-col md:flex-row  justify-center mt-2 ">
      <div className="md:w-3/5 px-2  ">
        <div className="flex flex-row justify-start ">
          <div className=" text-2xl font-bricolage font-semibold">About Me</div>
        </div>
        <div className="   px-2">
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
  );
};

export default About;
