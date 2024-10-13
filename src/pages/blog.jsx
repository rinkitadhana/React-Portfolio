import BlogCard from "../Component/BlogCard"
import Title from "../Component/Title"
import Screen from "../Layouts/Screen"

const Blog = () => {
  const blogCard = [
    {
      title: "How i made this?",
      description: "here i'll show how i made this thing from scrach",
      date: "13 october 2024",
    },
    {
      title: "How i made this?",
      description: "here i'll show how i made this thing from scrach",
      date: "13 october 2024",
    },
    {
      title: "How i made this?",
      description: "here i'll show how i made this thing from scrach",
      date: "13 october 2024",
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
          />
        </div>
      ))}
    </Screen>
  )
}

export default Blog
