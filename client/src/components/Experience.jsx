import { useNavigate } from "react-router-dom"

const Experience = () => {
  const navigate = useNavigate()
  return (
    <div className='mt-32'>
      <h1 className='text-4xl'>Internships</h1>
      <div className='flex flex-col mt-4'>
        <div className='w-full p-5 m-2 flex flex-col items-start bg-gray-50 rounded-3xl cursor-pointer hover:bg-gray-100 text-left'>
          <div className='w-full flex justify-between'>
            <span className='text-xl'>Software Tester / IT Intern</span>
            <span className='text-lg opacity-50'>06/2023 ~ 08/2023</span>
          </div>
          <span className='text-base font-normal mt-4'>
            Open source OS project contribution by reading and analyzing code
            written in <span className='font-bold'>C++</span> and{" "}
            <span className='font-bold'>python++</span> to test and identify
            defects on developing operating system.
            <br></br>
            <br></br>
            Performed data migration from{" "}
            <span className='font-bold'>GitLab++</span> to{" "}
            <span className='font-bold'>GitHub</span> using{" "}
            <span className='font-bold'>Git Large File Storage (LFS)</span>.
            <br></br>
            <br></br>
            Performed hardware compatibility testing for given OS – analyzed
            specifications of computers using{" "}
            <span className='font-bold'>Linux++</span> commands to test the
            developing OS compatibility with the computer.
          </span>
        </div>
        <div className='w-full p-5 m-2 mt-5 flex flex-col items-start bg-gray-50 rounded-3xl cursor-pointer hover:bg-gray-100 text-left'>
          <div className='w-full flex justify-between'>
            <span className='text-xl'>Front-end Software Engineer</span>
            <span className='text-lg opacity-50'>06/2022 ~ 09/2022</span>
          </div>
          <span className='text-base font-normal mt-4'>
            Front end development in the RFID / IoT Records Management team:
            created the main page and subsidiary pages from scratch using{" "}
            <span className='font-bold'>React, Cytoscape JS</span>, and{" "}
            <span className='font-bold'>Material UI</span> for a railroad
            monitoring system, a B2B platform.
            <br></br>
            <br></br>
            Integrated <span className='font-bold'>Axios</span> with the
            application's state management system to handle data fetching and
            updates seamlessly.
            <br></br>
            <br></br>
            Utilized <span className='font-bold'>SASS</span> for design to
            create an efficient and responsive UI.
          </span>
        </div>
        <div className='flex flex-col items-center'>
          <div className='relative z-10 text-black flex flex-col items-center rounded-xl w-36 bg-white r shadow-lg shadow-sky-500 h-10 mt-4'>
            <div className='absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200'></div>
            <button
              onClick={() => navigate("/experience")}
              className='relative gradient-border px-4 py-2 rounded-xl justify-between bg-black hover:bg-white hover:text-black opacity-95 hover:opacity-100 text-white w-full text-base font-normal transform hover:scale-105 duration-300'
            >
              See more
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
