import { useNavigate } from "react-router-dom"

import { FaEarthAmericas } from "react-icons/fa6"
import { IoIosJournal } from "react-icons/io"

const Projects = () => {
  const navigate = useNavigate()
  return (
    <div className='mt-32'>
      <h1 className='text-4xl'>Projects</h1>
      <div className='mt-4 lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
        <a
          href='https://mapbook-f381d1faf354.herokuapp.com/'
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
              <FaEarthAmericas />
            </span>
          </div>
          <h3 className='text-2xl mt-4 font-medium'>MapBook</h3>
          <p className='mt-2 opacity-50 font-light text-base'>
            Create, edit, and share maps with your friends or strangers!
          </p>
          <div className='flex justify-between mt-4'>
            <span className='text-sm py-2 px-4 bg-gray-200 rounded-3xl mr-1'>
              MERN
            </span>
            <span className='text-sm py-2 px-4 bg-gray-200 rounded-3xl mr-1'>
              Redux
            </span>
            <span className='text-sm py-2 px-4 bg-gray-200 rounded-3xl mr-1'>
              Firebase
            </span>
            <span className='text-sm py-2 px-4 bg-gray-200 rounded-3xl mr-1'>
              Heroku
            </span>
          </div>
        </a>
        <a
          href='https://main--subtle-biscotti-65378e.netlify.app/'
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
              <IoIosJournal />
            </span>
          </div>
          <h3 className='text-2xl mt-4 font-medium'>Day Logger</h3>
          <p className='mt-2 opacity-50 font-light text-base'>
            Keep track of your daily activities with Day Logger.
          </p>
          <div className='flex justify-between mt-4'>
            <span className='text-sm py-2 px-4 bg-gray-200 rounded-3xl mr-1'>
              MERN
            </span>
            <span className='text-sm py-2 px-4 bg-gray-200 rounded-3xl mr-1'>
              MUI
            </span>
            <span className='text-sm py-2 px-4 bg-gray-200 rounded-3xl mr-1'>
              Netlify
            </span>
          </div>
        </a>
      </div>
      <div className='flex flex-col items-center w-full'>
        <div className='relative z-10 text-black flex flex-col items-center rounded-xl w-36 bg-white r shadow-lg shadow-sky-500 h-10 mt-4'>
          <div className='absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200'></div>
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
