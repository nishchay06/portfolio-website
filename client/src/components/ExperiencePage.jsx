import Footer from "./Footer"

const ExperiencePage = () => {
  return (
    <div className='mt-10 flex flex-col items-center'>
      <h1 className='text-5xl'>Internships</h1>
      <div className='flex flex-col mt-12'>
        <div className='w-full p-5 m-2 flex flex-col items-start bg-gray-50 rounded-3xl cursor-pointer hover:bg-gray-100 text-left'>
          <div className='w-full flex justify-between'>
            <span className='text-xl'>Software Developer Intern</span>
            <span className='text-lg opacity-50'>06/2023 ~ 08/2023</span>
          </div>
          <span className='text-sm font-normal text-gray-500'>
            Basys.ai (startup)
          </span>
          <span className='text-base font-normal mt-4'>
            <span className='font-bold'>Developed automated solutions</span> to
            streamline internal processes
            <span className='font-bold'>
              {" "}
              resulting in increased productivity.{" "}
            </span>
            <br />
            <br />
            Worked on <span className='font-bold'>Web Development</span>,{" "}
            <span className='font-bold'>Rest APIs</span>,{" and "}
            <span className='font-bold'>Web Scraping</span>
            <br />
            <br />
            <span className='font-bold'>
              Conducted web scraping activities
            </span>{" "}
            to gather data from external sources,{" "}
            <span className='font-bold'>
              enabling data-driven decision-making
            </span>{" "}
            and <span className='font-bold'>improving business insights</span>.
          </span>
        </div>
        <div className='w-full p-5 m-2 mt-5 flex flex-col items-start bg-gray-50 rounded-3xl cursor-pointer hover:bg-gray-100 text-left'>
          <div className='w-full flex justify-between'>
            <span className='text-xl'>AI Freelancer</span>
            <span className='text-lg opacity-50'>01/2024 ~ 02/2024</span>
          </div>
          <span className='text-sm font-normal text-gray-500'>Remotasks</span>
          <span className='text-base font-normal mt-4'>
            <span className='font-bold'>Sourced, analyzed</span>, and{" "}
            <span className='font-bold'>prepared data</span> to{" "}
            <span className='font-bold'>train</span> and{" "}
            <span className='font-bold'>improve AI models</span>.
            <br />
            <br />
            Worked closely with clients'{" "}
            <span className='font-bold'>AI development team</span>, focusing on{" "}
            <span className='font-bold'>prompt creation</span>,{" "}
            <span className='font-bold'>
              Reinforcement Learning from Human Feedback (RLHF)
            </span>
            , and <span className='font-bold'>data validation</span> in the
            realms of coding and math.
            <br />
            <br />
            <span className='font-bold'>Collected, structured</span>, and{" "}
            <span className='font-bold'>curated</span> large datasets for
            training <span className='font-bold'>generative AI models</span>,
            with a focus on <span className='font-bold'>coding</span> and{" "}
            <span className='font-bold'>mathematics</span>.
          </span>
        </div>
      </div>
      <h1 className='mt-20 text-5xl'>Relevant Experience</h1>
      <div className='flex flex-col mt-12'>
        <div className='w-full p-5 m-2 flex flex-col items-start bg-gray-50 rounded-3xl cursor-pointer hover:bg-gray-100 text-left'>
          <div className='w-full flex justify-between'>
            <span className='text-xl'>Club Web-Dev Lead</span>
            <span className='text-lg opacity-50'>08/2022 ~ 012/2022</span>
          </div>
          <span className='text-sm font-normal text-gray-500'>NSUT, Delhi</span>
          <span className='text-base font-normal mt-4'>
            Organized weekly assemblies with 50+ club members to practice
            solving algorithm problems, had workshops with computer science
            professors and notable alumni, and organized large-scale
            tech-related events.
          </span>
        </div>
        <div className='w-full p-5 m-2 mt-5 flex flex-col items-start bg-gray-50 rounded-3xl cursor-pointer hover:bg-gray-100 text-left'>
          <div className='w-full flex justify-between'>
            <div>
              <span className='text-xl mr-2'>Hackathon</span>
            </div>
            <span className='text-lg opacity-50'>05/2023</span>
          </div>
          <span className='text-sm font-normal text-gray-500'>NSUT, Delhi</span>
          <span className='text-base font-normal mt-4'>
            Developed a web application with 3 other teammates that allows users
            to browse and sign up for short-term classes held by educators.
            <br />
            <br />
            Implemented the front-end using React and Material UI, and
            implemented the back-end using Node and MongoDB.
          </span>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ExperiencePage
