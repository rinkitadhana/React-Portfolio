import BlogStepHead from "../Component/BlogStepHead"
import BlogLayout from "../Layouts/BlogLayout"

const FirstBlog = () => {
  return (
    <BlogLayout
      title="Explaining how I made this project..."
      date="30th October 2024"
    >
      <div className=" flex flex-col gap-3">
        <div>
          <img
            src="/Blogs/TheDailyCrimes/preview.png"
            alt="bg-blog"
            className="w-full"
          />
        </div>
        <div className=" flex flex-col gap-1">
          <BlogStepHead title="Introduction" />
          <p>
            I posted my recent project, 'The Daily Crimes,' on{" "}
            <a
              href="https://x.com/damnGruz/status/1843546657750954191"
              className="hover:underline font-semibold text-blue-500"
            >
              Twitter
            </a>
            , and it somehow went viral. As of now, it has over 61K impressions,
            600+ likes. Obviously, I started getting tons of emails and messages
            on Twitter and LinkedIn, with many people asking for my help and
            wanting to create something similar. So, I thought, why not write a
            blog about it to help everyone and also kickstart my blogging
            journey. This is my first blog, so please don't judge me!
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <BlogStepHead title="Project Overview" />
          <p className=" animate-pulse text-lg hover:opacity-100 font-semibold font-sans">
            So, What's this project??
          </p>
          <div>
            <a
              href="https://thedailycrimes.vercel.app/"
              className=" hover:underline font-semibold text-blue-500"
            >
              Project link
            </a>{" "}
            & DEMO 👇
          </div>
          <video controls>
            <source src="/Blogs/TheDailyCrimes/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p>
            I saw this paper portfolio by Niccolò Miranda and completely fell in
            love with it — who wouldn't, right? So, I thought, why not make one
            for myself? But I already had a portfolio and wanted to create
            something unique. Then I came across the heartbreaking Kolkata rape
            case, and it inspired me to create a newspaper-style website focused
            on crimes in India, to address the issue while showcasing my
            front-end skills.
          </p>
          <p className=" text-lg hover:opacity-100 font-semibold animate-pulse font-sans">
            but, what did I use in this project?
          </p>
          I didn't use anything special or out of the box. I just used React
          with TypeScript, Tailwind CSS for the styles, and GSAP for the
          animations. And that's all you need to create a website like this.
        </div>
        <div>
          <BlogStepHead title="Step-by-Step Process" />
        </div>
      </div>
    </BlogLayout>
  )
}

export default FirstBlog
