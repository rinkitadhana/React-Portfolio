import Skills from "../inbuild/skills";
import SelectedProjects from "../inbuild/selectedProjects";
import Highlights from "../inbuild/highlights";
import Chat from "../inbuild/chat";

const Home = () => {
  return (
    <>
      <div className=" text-gray-700 dark:text-white flex justify-center mt-2">
        <div className="md:w-3/5 ">
          <div>
            <h1 className=" text-gray-700 dark:text-white text-center md:text-6xl md:mt-8 text-3xl font-bold font-bricolage">
              Hola, I'm
              <span className="text-theme-blue"> Rinkit Adhana</span>.
            </h1>
            <div className="hidden md:block text-center mt-2 text-lg font-semibold">
              <span className="font-bold text-pink-500 ">
                Full Stack Developer{" "}
              </span>
              and <span className="font-bold text-pink-500">Freelancer</span>{" "}
              who loves to build and ship stuffs.
            </div>
            <div className="text-center font-bold text-lg mt-1 md:hidden">
              A <span className=" text-pink-500">Full Stack</span> Engineer
            </div>
            <div className=" md:mt-6 mt-4 text-justify leading-5 md:leading-6 tracking-tight md:px-6 px-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
              odit aut natus, ducimus, tempora velit exercitationem eum facilis
              magnam placeat debitis aliquam eveniet molestiae nostrum.
              Reiciendis, ut autem? Quod reiciendis tempora ratione non,
              deserunt possimus minus mollitia sapiente a neque, consequuntur
              voluptate repellendus esse ab dolor perferendis, animi accusantium
              illo hic sed culpa doloremque. Eos, dolorum optio non voluptate
              consequatur nobis veritatis quam distinctio quasi earum.
            </div>
          </div>
          <Chat />
          <Skills />
          <SelectedProjects />
          <Highlights />
        </div>
      </div>
    </>
  );
};

export default Home;
