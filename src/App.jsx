import About from "./components/About"
import Home from "./components/Home"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className='text-3xl font-bold mx-auto max-w-5xl my-10'>
      <Navbar />
      <Home />
      <About />
    </div>
  )
}

export default App
