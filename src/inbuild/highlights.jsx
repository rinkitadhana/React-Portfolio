import { BsFeather } from "react-icons/bs";
import { PiDotsThreeOutlineDuotone } from "react-icons/pi";
import HighlightText from "../tool/highlightText";

const Highlights = () => {
  return (
    <div className="md:px-6 px-3 mt-6 md:mt-0 ">
      <PiDotsThreeOutlineDuotone className=" text-2xl text-pink-500" />
      <div className=" font-bricolage flex items-center  gap-1 text-2xl font-semibold">
        Highlights
        <BsFeather />.
      </div>
      <div className="mt-3">
        <div className="border-b-2 dark:border-white/30"></div>
        <HighlightText
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
        distinctio est consectetur ad aperiam. Dolores ipsum fugit assumenda,
        aliquid molestias illo hic libero explicabo ex aperiam sint illum atque,
        et dolorum, adipisci ea recusandae odit nemo porro delectus quas!
        Voluptatem?"
        />
        <HighlightText
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
        distinctio est consectetur ad aperiam. Dolores ipsum fugit assumenda,
        aliquid molestias illo hic libero explicabo ex aperiam sint illum atque,
        et dolorum, adipisci ea recusandae odit nemo porro delectus quas!
        Voluptatem?"
        />
        <HighlightText
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
        distinctio est consectetur ad aperiam. Dolores ipsum fugit assumenda,
        aliquid molestias illo hic libero explicabo ex aperiam sint illum atque,
        et dolorum, adipisci ea recusandae odit nemo porro delectus quas!
        Voluptatem?"
        />
      </div>
    </div>
  );
};

export default Highlights;
