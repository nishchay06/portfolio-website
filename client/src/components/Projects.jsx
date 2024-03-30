import { useNavigate } from "react-router-dom"

import { FaBowlRice } from "react-icons/fa6"
import { IoShapes } from "react-icons/io5"

const Projects = () => {
  const navigate = useNavigate()
  return (
    <div className='mt-32'>
      <h1 className='text-4xl'>Projects</h1>
      <div className='mt-4 lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
        <a
          href='https://github.com/nishchay06/RiceBowl-Social/tree/master/'
          target='_blank'
          className='p-5 m-2 flex flex-col items-start bg-gray-50 rounded-3xl cursor-pointer hover:bg-gray-100 text-left hover:scale-105 duration-300'
        >
          <div size='40' color='E0E6EB' className='go1550876186'>
            <span
              name='Shape35'
              color='2D3A46'
              size='20'
              role='img'
              className='go2599496350'
            >
              <FaBowlRice />
            </span>
          </div>
          <h3 className='text-2xl mt-4 font-medium'>RiceBowl</h3>
          <p className='mt-2 opacity-50 font-light text-base'>
            Connect with people worldwide through networking, communication, and
            content sharing.
          </p>
          <div className='flex justify-between mt-4'>
            <span className='text-sm py-2 px-4 bg-gray-200 rounded-3xl mr-1'>
              MERN
            </span>
            <span className='text-sm py-2 px-4 bg-gray-200 rounded-3xl mr-1'>
              Socket.io
            </span>
            <span className='text-sm py-2 px-4 bg-gray-200 rounded-3xl mr-1'>
              MUI
            </span>
          </div>
        </a>
        <a
          href='https://board-io.vercel.app'
          target='_blank'
          className='p-5 m-2 flex flex-col items-start bg-gray-50 rounded-3xl cursor-pointer hover:bg-gray-100 text-left hover:scale-105 duration-300'
        >
          <div size='40' color='E0E6EB' className='go1550876186'>
            <span
              name='Shape35'
              color='2D3A46'
              size='20'
              role='img'
              className='go2599496350'
            >
              <IoShapes />
            </span>
          </div>
          <h3 className='text-2xl mt-4 font-medium'>Board.io</h3>
          <p className='mt-2 opacity-50 font-light text-base'>
            Collaborative online whiteboard for real-time team collaboration and
            brainstorming.
          </p>
          <div className='flex justify-between mt-4'>
            <span className='text-sm py-2 px-4 bg-gray-200 rounded-3xl mr-1'>
              NextJS
            </span>
            <span className='text-sm py-2 px-4 bg-gray-200 rounded-3xl mr-1'>
              TypeScript
            </span>
            <span className='text-sm py-2 px-4 bg-gray-200 rounded-3xl mr-1'>
              shadcn/ui
            </span>
            <span className='text-sm py-2 px-4 bg-gray-200 rounded-3xl mr-1'>
              Vercel
            </span>
          </div>
        </a>
      </div>
      <div className='flex flex-col items-center w-full'>
        <div className='relative z-10 text-black flex flex-col items-center rounded-xl w-36 bg-white r shadow-lg shadow-sky-500 h-10 mt-4'>
          <div className='absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200' />
          <button
            onClick={() => navigate("/projects")}
            className='relative gradient-border px-4 py-2 rounded-xl justify-between bg-black hover:bg-white hover:text-black opacity-95 hover:opacity-100 text-white w-full text-base font-normal transform hover:scale-105 duration-300'
          >
            See more
          </button>
        </div>
      </div>
    </div>
  )
}

export default Projects
