import Skills from "../Component/skills"
import SelectedProjects from "../Component/selectedProjects"
import Highlights from "../Component/highlights"
import Intro from "../Component/Intro"
import Screen from "../Layouts/Screen"
import Summary from "../Component/Summary"
import PopularPost from "../Component/PopularPost"

const Home = () => {
  return (
    <Screen>
      <Intro />
      <Summary />
      <Skills />
      <SelectedProjects />
      <Highlights />
    </Screen>
  )
}

export default Home
