import { FaRegFile } from "react-icons/fa6";

const SelectedProjects = () => {
  return (
    <div>
      <div className="px-6 mt-6">
        <div className=" flex items-center gap-1 text-2xl font-semibold">
          Selected Projects
          <FaRegFile />.
        </div>
      </div>
    </div>
  );
};

export default SelectedProjects;
