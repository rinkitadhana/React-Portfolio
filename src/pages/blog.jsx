import BlogCard from "../Component/BlogCard"
import Title from "../Component/Title"
import Screen from "../Layouts/Screen"

const Blog = () => {
  const blogCard = [
    {
      title: "Blog's title",
      description: "this is the description of this blog",
      date: "13 october 2024",
      path: "/blog/first",
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
