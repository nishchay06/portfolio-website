import About from "./About"
import Connect from "./Connect"
import Experience from "./Experience"
import Footer from "./Footer"
import Home from "./Home"
import Projects from "./Projects"
import Recommendations from "./Recommendations"
import Skills from "./Skills"

function Main() {
  return (
    <div className='text-3xl font-bold mx-auto max-w-5xl my-10'>
      <Home />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Recommendations />
      <Connect />
      <Footer />
    </div>
  )
}

export default Main
