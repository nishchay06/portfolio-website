import Footer from "./Footer"

import { FaBowlRice } from "react-icons/fa6"
import { IoShapes } from "react-icons/io5"
import { FaPiggyBank } from "react-icons/fa"
import { FaEarthAmericas } from "react-icons/fa6"
import { IoIosJournal } from "react-icons/io"
import { CiChat1 } from "react-icons/ci"

const ProjectsPage = () => {
  return (
    <div className='mt-10 flex flex-col items-center'>
      <h1 className='text-5xl'>Projects</h1>
      <div className='mt-10 lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
        <a
          href='https://github.com/nishchay06/RiceBowl-Social/tree/master/'
          target='_blank'
          className='p-5 m-2 flex flex-col items-start bg-gray-50 rounded-3xl cursor-pointer hover:bg-gray-100 text-left hover:scale-105 duration-300'
        >
          <div size='40' color='E0E6EB' className='go1550876186 w-full'>
            <span
              name='Shape35'
              color='2D3A46'
              size='20'
              role='img'
              className='go2599496350 flex justify-between w-full'
            >
              <FaBowlRice />
              <span className='flex items-center mr-4'>
                <div className='h-3 w-3 bg-red-400 rounded-full mr-1' />
                <p className='text-base font-normal'>Live</p>
              </span>
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
          <div size='40' color='E0E6EB' className='go1550876186 w-full'>
            <span
              name='Shape35'
              color='2D3A46'
              size='20'
              role='img'
              className='go2599496350 w-full flex justify-between'
            >
              <IoShapes />
              <span className='flex items-center mr-4'>
                <div className='h-3 w-3 bg-red-400 rounded-full mr-1' />
                <p className='text-base font-normal'>Live</p>
              </span>
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
        <a
          href='https://koinx-frontend-two.vercel.app'
          target='_blank'
          className='p-5 m-2 flex flex-col items-start bg-gray-50 rounded-3xl cursor-pointer hover:bg-gray-100 text-left hover:scale-105 duration-300'
        >
          <div size='40' color='E0E6EB' className='go1550876186 w-full'>
            <span
              name='Shape35'
              color='2D3A46'
              size='20'
              role='img'
              className='go2599496350 w-full flex justify-between'
            >
              <IoShapes />
              <span className='flex items-center mr-4'>
                <div className='h-3 w-3 bg-red-400 rounded-full mr-1' />
                <p className='text-base font-normal'>Live</p>
              </span>
            </span>
          </div>
          <h3 className='text-2xl mt-4 font-medium'>TokenTracker</h3>
          <p className='mt-2 opacity-50 font-light text-base'>
            Monitor cryptocurrency with real-time updates on prices, portfolio
            performance, and market trends.
          </p>
          <div className='flex justify-between mt-4'>
            <span className='text-sm py-2 px-4 bg-gray-200 rounded-3xl mr-1'>
              React
            </span>
            <span className='text-sm py-2 px-4 bg-gray-200 rounded-3xl mr-1'>
              Redux
            </span>
            <span className='text-sm py-2 px-4 bg-gray-200 rounded-3xl mr-1'>
              TypeScript
            </span>
            <span className='text-sm py-2 px-4 bg-gray-200 rounded-3xl mr-1'>
              CoinGecko API
            </span>
          </div>
        </a>
      </div>
      <Footer />
    </div>
  )
}

export default ProjectsPage
