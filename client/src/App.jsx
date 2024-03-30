import Main from "./components/Main"
import AboutPage from "./components/AboutPage"
// import NavBar from "./components/NavBar"
import ExperiencePage from "./components/ExperiencePage"
import ProjectsPage from "./components/ProjectsPage"
import ScrollToTop from "./components/ScrollToTop"
import NotesPage from "./components/NotesPage"
import AllNotes from "./components/AllNotes"
import TopBar from "./components/TopBar"

import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  document.title = "Nishchay Mago"
  return (
    <div className='text-3xl font-bold mx-auto max-w-5xl my-10 z-0'>
      <BrowserRouter>
        <TopBar />
        {/* <NavBar /> */}
        <ScrollToTop />
        <div className='app'>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/experience' element={<ExperiencePage />} />
            <Route path='/projects' element={<ProjectsPage />} />
            <Route path='/messages' element={<NotesPage />} />
            <Route path='/allMessages' element={<AllNotes />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
