import { BsFeather } from "react-icons/bs";
import { PiDotsThreeOutlineDuotone } from "react-icons/pi";

const Highlights = () => {
  return (
    <div className="px-6 mt-3 md:mt-0 ">
      <PiDotsThreeOutlineDuotone className=" text-2xl text-pink-500" />
      <div className=" flex items-center gap-1 text-2xl font-semibold">
        Highlights
        <BsFeather />.
      </div>
      <div className="mt-3">
        <div className=" border-y-2 dark:border-white/30">
          <div className=" py-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos,
            beatae reprehenderit consequatur quisquam dolorum quis tempore, ut
            ducimus, esse veniam maiores blanditiis eligendi soluta? Cumque
            eveniet, fuga tenetur nihil voluptatum repudiandae quam! Repudiandae
            nisi voluptatem modi, veritatis quas accusantium impedit?
          </div>
        </div>
        <div className=" border-b-2 dark:border-white/30">
          <div className=" py-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
            distinctio est consectetur ad aperiam. Dolores ipsum fugit
            assumenda, aliquid molestias illo hic libero explicabo ex aperiam
            sint illum atque, et dolorum, adipisci ea recusandae odit nemo porro
            delectus quas! Voluptatem?
          </div>
        </div>
        <div className=" border-b-2 dark:border-white/30">
          <div className=" py-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
            distinctio est consectetur ad aperiam. Dolores ipsum fugit
            assumenda, aliquid molestias illo hic libero explicabo ex aperiam
            sint illum atque, et dolorum, adipisci ea recusandae odit nemo porro
            delectus quas! Voluptatem?
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
