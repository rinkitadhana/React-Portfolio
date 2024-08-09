import { FaRegFile } from "react-icons/fa6";

import ProjectBox from "../tool/projectbox";
import { Link } from "react-router-dom";
import { PiDotsThreeOutlineDuotone } from "react-icons/pi";

const SelectedProjects = () => {
  return (
    <div>
      <div className="px-6 mt-3">
        <PiDotsThreeOutlineDuotone className=" text-2xl text-pink-500" />
        <div className=" flex items-center gap-1 text-2xl font-semibold">
          Selected Projects
          <FaRegFile />.
        </div>
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
        />
        <ProjectBox
          img="https://upload.wikimedia.org/wikipedia/commons/c/c3/Kala_Ghoda_Statue.jpg"
          title="def"
          status="Running"
          statusColor="text-green-500"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            ullam, natus quia accusamus fuga debitis asperiores nemo adipisci
            error in!"
          url="https://www.youtube.com/watch?v=m7OWXtbiXX8"
          github="https://www.youtube.com/watch?v=m7OWXtbiXX8"
        />
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
        />

        <div className="flex justify-center mt-4">
          <Link to="/project">
            <div className="px-2 py-1.5 cursor-pointer hover:bg-black/10 dark:hover:bg-white/20 bg-black/15 font-semibold text-black dark:text-white dark:bg-white/30 w-fit rounded-md">
              show more
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SelectedProjects;
