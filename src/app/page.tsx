import Image from "next/image";
import Header from "./components/Header"
import Intro from "./components/Intro"
import Portfolio from "./components/Portfolio"
import AboutMe from "./components/AboutMe"
import Contact from "./components/Contact"

export default function Home() {
  return (
    <div>
      <h1>JOE'S WEBSITE</h1>
      < Header />
      <div id="main">
        < Intro />
        < Portfolio />
        < AboutMe />
        < Contact />
      </div>
    </div>
  );
}
