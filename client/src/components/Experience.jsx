import { useNavigate } from "react-router-dom"

const Experience = () => {
  const navigate = useNavigate()
  return (
    <div className='mt-32'>
      <h1 className='text-4xl'>Experience</h1>
      <div className='flex flex-col mt-4'>
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
        <div className='flex flex-col items-center'>
          <div className='relative z-10 text-black flex flex-col items-center rounded-xl w-36 bg-white r shadow-lg shadow-sky-500 h-10 mt-4'>
            <div className='absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200' />
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
