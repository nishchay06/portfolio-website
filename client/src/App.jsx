import Main from "./components/Main"
import NavBar from "./components/Navbar"
import AboutPage from "./components/AboutPage"
import ExperiencePage from "./components/ExperiencePage"
import ProjectsPage from "./components/ProjectsPage"
import ScrollToTop from "./components/ScrollToTop"

import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <div className='text-3xl font-bold mx-auto max-w-5xl my-10 z-0'>
      <BrowserRouter>
        <NavBar />
        <ScrollToTop />
        <div className='app'>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/experience' element={<ExperiencePage />} />
            <Route path='/projects' element={<ProjectsPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
