import { NavLink } from "react-router-dom";

const Downbar = () => {
  let tabs = [
    { id: "/", label: "home" },
    { id: "/about", label: "about" },
    { id: "/project", label: "projects" },
    { id: "/blog", label: "blogs" },
  ];
  return (
    <div className=" flex justify-center">
      <nav className=" flex gap-2 border dark:border-zinc-800 p-2  bg-white dark:bg-nav-dark z-50 rounded-lg font-semibold fixed bottom-5 shadow-custom">
        {tabs.map((items) => (
          <NavLink
            key={items.id}
            to={items.id}
            className={({ isActive }) =>
              isActive
                ? "bg-black/80 rounded-lg text-white dark:text-black dark:bg-white py-1 px-1.5"
                : "hover:opacity-60 py-1 px-1.5 rounded-lg dark:text-white"
            }
          >
            {items.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Downbar;
