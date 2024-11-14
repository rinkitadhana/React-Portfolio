import { FaXTwitter } from "react-icons/fa6"
import CompScreen from "../Layouts/CompScreen"
import Title from "./Title"
import { TwitterTweetEmbed } from "react-twitter-embed"

const PopularPost = () => {
  return (
    <CompScreen>
      <Title title="Popular Posts" icon={<FaXTwitter />} />
      <div className=" flex flex-col items-center">
        <div>
          <TwitterTweetEmbed
            tweetId="1843546657750954191"
            options={{ theme: "dark" }}
          />
        </div>
        <div>
          <TwitterTweetEmbed
            tweetId="1854230045096919496"
            options={{ theme: "dark" }}
          />
        </div>
      </div>
    </CompScreen>
  )
}

export default PopularPost
