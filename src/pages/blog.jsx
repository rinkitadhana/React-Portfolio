import BlogCard from "../Component/BlogCard"
import Title from "../Component/Title"
import Screen from "../Layouts/Screen"

const Blog = () => {
  const blogCard = [
    {
      title: "The Daily Crimes",
      description:
        "In this blog, I dive deep into how I built this project from scratch, sharing each step of the process, the challenges I faced, and the solutions I discovered along the way.",
      date: "30th October 2024",
      path: "/",
    },
  ]
  return (
    <Screen>
      <div className="flex flex-row justify-start ">
        <Title title="Blogs" />
      </div>
      {blogCard.map((item) => (
        <div key={item.title} className="md:px-1.5">
          <BlogCard
            title={item.title}
            description={item.description}
            date={item.date}
            path={item.path}
          />
        </div>
      ))}
    </Screen>
  )
}

export default Blog
