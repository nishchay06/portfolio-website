import { useNavigate } from "react-router-dom"

import { FaGithub, FaLinkedin } from "react-icons/fa"
import { SiLeetcode } from "react-icons/si"

const Footer = () => {
  const navigate = useNavigate()
  return (
    <div className='my-10 w-full relative mt-14 flex flex-col items-center text-center'>
      <div className='flex flex-col md:flex-row items-center text-base font-normal'>
        <a
          className='cursor-pointer mx-2 opacity-50 transition-opacity duration-200 ease-in-out hover:opacity-100'
          onClick={() => navigate("/")}
        >
          Home
        </a>

        <a
          className=' cursor-pointer mx-2 opacity-50 transition-opacity duration-200 ease-in-out hover:opacity-100'
          onClick={() => navigate("/about")}
        >
          About
        </a>
        <a
          className='mx-2 opacity-50 transition-opacity duration-200 cursor-pointer ease-in-out hover:opacity-100'
          onClick={() => navigate("/experience")}
        >
          Experience
        </a>
        <a
          className='mx-2 opacity-50 transition-opacity duration-200 cursor-pointer ease-in-out hover:opacity-100'
          onClick={() => navigate("/projects")}
        >
          Projects
        </a>
        <a
          className='mx-2 opacity-50 transition-opacity duration-200 cursor-pointer ease-in-out hover:opacity-100'
          onClick={() => navigate("/allMessages")}
        >
          Notes
        </a>
      </div>
      <ul className='bg-gray-100 flex items-center justify-center p-1 rounded-3xl shadow-sm mt-5'>
        <a className='p-2' target='_blank' href='https://github.com/nishchay06'>
          <FaGithub className='opacity-50 transition-opacity duration-200 ease-in-out hover:opacity-100' />
        </a>
        <a
          className='p-2'
          target='_blank'
          href='https://www.linkedin.com/in/nishchay-mago-94364a200/'
        >
          <FaLinkedin className='opacity-50 transition-opacity duration-200 ease-in-out hover:opacity-100' />
        </a>
        <a
          className='p-2'
          target='_blank'
          href='https://leetcode.com/nishchay_/'
        >
          <SiLeetcode className='opacity-50 transition-opacity duration-200 ease-in-out hover:opacity-100' />
        </a>
      </ul>
      {/* <div class="text-5xl my-10 cursor-pointer">⚡</div> */}
      <div className='text-sm font-normal flex mt-6'>
        <span>©2024 Copyright: Nishchay Mago</span>
      </div>
    </div>
  )
}

export default Footer
