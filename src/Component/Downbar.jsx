import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

let tabs = [
  { id: "/", label: "home" },
  { id: "/about", label: "about" },
  { id: "/project", label: "projects" },
  { id: "/blog", label: "blogs" },
];

export function Downbar() {
  let location = useLocation();
  let [activeTab, setActiveTab] = useState(location.pathname);

  useEffect(() => {
    // Add a slight delay for scroll reset, to prevent layout shifts from affecting animation
    const scrollTimeout = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 300);

    return () => clearTimeout(scrollTimeout);
  }, [location.pathname]);

  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex justify-center">
      <div className="flex space-x-1 bottom-5 fixed bg-black/80 p-2 rounded-xl z-50">
        {tabs.map((tab) => (
          <Link
            to={tab.id}
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`${
              activeTab === tab.id ? "" : "hover:opacity-50"
            } relative rounded-full px-3 py-1.5 text-sm font-medium text-white outline-sky-400 transition focus-visible:outline-2`}
            style={{
              WebkitTapHighlightColor: "transparent",
            }}
          >
            {activeTab === tab.id && (
              <motion.span
                className="absolute inset-0 z-10 bg-white mix-blend-difference"
                style={{ borderRadius: 9 }}
                layout
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
