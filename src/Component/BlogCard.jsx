import { Link } from "react-router-dom"

const BlogCard = ({ title, description, date, path }) => {
  return (
    <Link to={path}>
      <div className=" mt-4">
        <div className="rounded-lg p-2 dark:hover:bg-white/20 hover:bg-black/10 transition-all cursor-pointer">
          <h1 className="text-lg font-bold">{title}</h1>
          <p className=" text-sm opacity-80 ">{description}</p>
          <p className=" text-xs opacity-50">{date}</p>
        </div>
      </div>
    </Link>
  )
}

export default BlogCard
