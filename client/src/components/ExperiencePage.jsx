import Footer from "./Footer"

const ExperiencePage = () => {
  return (
    <div className='mt-10 flex flex-col items-center'>
      <h1 className='text-5xl'>Internships</h1>
      <div className='flex flex-col mt-12'>
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
      </div>
      <h1 className='mt-20 text-5xl'>Relevant Experience</h1>
      <div className='flex flex-col mt-12'>
        <div className='w-full p-5 m-2 flex flex-col items-start bg-gray-50 rounded-3xl cursor-pointer hover:bg-gray-100 text-left'>
          <div className='w-full flex justify-between'>
            <span className='text-xl'>Club President</span>
            <span className='text-lg opacity-50'>08/2022 ~ 012/2022</span>
          </div>
          <span className='text-base font-normal mt-4'>
            Organized weekly assemblies with 50+ club members to practice
            solving algorithm problems, had workshops with computer science
            professors and notable alumni, and organized large-scale
            tech-related events.
          </span>
        </div>
        <div className='w-full p-5 m-2 mt-5 flex flex-col items-start bg-gray-50 rounded-3xl cursor-pointer hover:bg-gray-100 text-left'>
          <div className='w-full flex justify-between'>
            <span className='text-xl'>Teaching Assistant</span>
            <span className='text-lg opacity-50'>06/2022 ~ 09/2022</span>
          </div>
          <span className='text-base font-normal mt-4'>
            Assisted professor for computer science major class “Object Oriented
            Programming”.
            <br></br>
            <br></br>
            Held office hours (8.5 hours/week) - responded to inquiries and
            supported students on class material.
          </span>
        </div>
        <div className='w-full p-5 m-2 mt-5 flex flex-col items-start bg-gray-50 rounded-3xl cursor-pointer hover:bg-gray-100 text-left'>
          <div className='w-full flex justify-between'>
            <div>
              <span className='text-xl mr-2'>Hackathon</span>
              <span className='text-sm font-normal opacity-50'> 3rd place</span>
            </div>
            <span className='text-lg opacity-50'>05/2023</span>
          </div>
          <span className='text-base font-normal mt-4'>
            Developed a web application with 3 other teammates that allows users
            to browse and sign up for short-term classes held by educators.
            <br></br>
            <br></br>
            Implemented the front-end using React and Material UI, and
            implemented the back-end using Node and MongoDB.
          </span>
        </div>
        <div className='w-full p-5 m-2 mt-5 flex flex-col items-start bg-gray-50 rounded-3xl cursor-pointer hover:bg-gray-100 text-left'>
          <div className='w-full flex justify-between'>
            <div>
              <span className='text-xl mr-2'>Hackathon</span>
              <span className='text-sm font-normal opacity-50'> 3rd place</span>
            </div>
            <span className='text-lg opacity-50'>05/2022</span>
          </div>
          <span className='text-base font-normal mt-4'>
            Formulated a business model and a product prototype with 3 other
            teammates in 24 hours.
            <br></br>
            <br></br>
            Developed an application that keeps track of the amount of the
            amount of garbage recycled to promote an eco-friendly environment.
            <br></br>
            <br></br>
            Utilized React, Node, and Material UI to implement the front-end.
          </span>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ExperiencePage
