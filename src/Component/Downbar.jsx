import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

let tabs = [
  { id: "/", label: "home" },
  { id: "/about", label: "about" },
  { id: "/project", label: "projects" },
  { id: "/blog", label: "blogs" },
];

export function Downbar() {
  let [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className=" flex justify-center">
      <div className="flex space-x-1 bottom-5 fixed bg-black/80 p-2 rounded-xl z-50">
        {tabs.map((tab) => (
          <Link
            to={tab.id}
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`${
              activeTab === tab.id ? "" : "hover:text-white/60 "
            } relative rounded-full  px-3 py-1.5 text-sm font-medium text-white   outline-sky-400 transition focus-visible:outline-2`}
            style={{
              WebkitTapHighlightColor: "transparent",
            }}
          >
            {activeTab === tab.id && (
              <motion.span
                layoutId="bubble"
                className="absolute  inset-0 z-10 bg-white mix-blend-difference"
                style={{ borderRadius: 9 }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            {tab.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
