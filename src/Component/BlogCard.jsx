import CompScreen from "../Layouts/CompScreen"

const BlogCard = ({ title, description, date }) => {
  return (
    <CompScreen>
      <div className="rounded-lg p-2 dark:hover:bg-white/20 hover:bg-black/10 transition-all delay-75 cursor-pointer">
        <h1 className="text-lg font-bold">{title}</h1>
        <p className=" text-sm ">{description}</p>
        <p className=" text-xs">{date}</p>
      </div>
    </CompScreen>
  )
}

export default BlogCard
