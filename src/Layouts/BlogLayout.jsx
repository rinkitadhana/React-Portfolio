import { Link } from "react-router-dom"
import Screen from "../Layouts/Screen"
import { IoIosArrowBack } from "react-icons/io"

const BlogLayout = ({ children, title, date }) => {
  return (
    <Screen>
      <section className=" flex flex-col gap-4">
        <div className=" flex flex-col gap-3">
          <div>
            <Link
              to="/blog"
              className="w-fit flex gap-1 items-center hover:underline opacity-80 hover:opacity-100"
            >
              <IoIosArrowBack />
              back to blogs
            </Link>
          </div>

          <div className=" flex flex-col gap-1">
            <h1 className=" text-3xl ">{title}</h1>
            <p className=" text-sm opacity-70">{date}</p>
          </div>
        </div>
        <div>{children}</div>
        <div>
          <Link
            to="/blog"
            className="w-fit flex gap-1 items-center hover:underline opacity-80 hover:opacity-100"
          >
            <IoIosArrowBack />
            back to blogs
          </Link>
        </div>
      </section>
    </Screen>
  )
}

export default BlogLayout
