import React, { useEffect, useRef, useState } from "react"
import { NavLink, useLocation } from "react-router-dom"

const Navbar = () => {
  const location = useLocation()
  const [activeTab, setActiveTab] = useState(location.pathname)
  const [indicatorStyle, setIndicatorStyle] = useState({})
  const navRef = useRef(null)

  const tabs = [
    { id: "/", label: "home" },
    { id: "/about", label: "about" },
    { id: "/project", label: "projects" },
    { id: "/blog", label: "blogs" },
  ]

  useEffect(() => {
    window.scrollTo(0, 0)
    setActiveTab(location.pathname)
  }, [location])

  useEffect(() => {
    const activeElement = navRef.current?.querySelector(
      `a[href="${activeTab}"]`
    )
    if (activeElement) {
      const { offsetLeft, offsetWidth } = activeElement
      setIndicatorStyle({
        left: `${offsetLeft}px`,
        width: `${offsetWidth}px`,
      })
    }
  }, [activeTab])

  return (
    <div className="fixed bottom-8 left-0 right-0 flex justify-center z-50">
      <nav
        ref={navRef}
        className="flex gap-2 border dark:border-zinc-800 p-2 bg-white dark:bg-nav-dark rounded-xl font-semibold shadow-custom relative"
      >
        <div
          className="absolute bottom-2 h-8 bg-black/80 dark:bg-white rounded-lg transition-all duration-300 ease-in-out"
          style={{ ...indicatorStyle, zIndex: 0 }}
        />
        {tabs.map((item) => (
          <NavLink
            key={item.id}
            to={item.id}
            className={({ isActive }) =>
              `py-1 px-1.5 rounded-lg relative ${
                isActive
                  ? "text-white dark:text-black transition-all delay-100"
                  : "hover:opacity-60 dark:text-white"
              }`
            }
            style={{ zIndex: 1 }}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </div>
  )
}

export default Navbar
