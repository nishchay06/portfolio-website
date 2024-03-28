import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa"
import { SiLeetcode } from "react-icons/si"

import "./home.css"

const Home = () => {
  const senderEmail = "nishchay.mago1290@gmail.com"

  const handleComposeEmail = () => {
    const mailtoLink = `mailto:${senderEmail}`
    window.open(mailtoLink, "_blank")
  }
  return (
    <div className='mt-12'>
      <div className='p-2 md:p-0 flex flex-col items-center rounded-full'>
        <div className='relative text-black items-start rounded-full bg-white shadow-lg shadow-sky-500'>
          <div className='absolute rounded-full -inset-0 bg-gradient-to-r from-purple-600 to-pink-600 blur z-5' />
          <img
            src='src/assets/profile_pic.png'
            className='relative z-10 w-60 h-60 rounded-full object-cover border-4 border-black'
          />
        </div>
        <div className='flex flex-row items-center text-center text-5xl mt-12 animate-appear1'>
          <span className='ml-3'>Hi,</span>
          <span className='ml-3'>I'm</span>
          <span className='ml-3'>Nishchay</span>
          <span className='ml-3'>Mago!</span>
        </div>
        <div className='flex flex-row items-center text-center text-5xl mt-4 animate-appear2'>
          <span className='ml-3'>I</span>
          <span className='ml-3'>love</span>
          <span className='ml-3'>creating</span>
        </div>
        <div className='flex flex-row items-center text-center text-5xl mt-4 animate-appear3'>
          <span className='ml-3'>and</span>
          <span className='ml-3'>I</span>
          <span className='ml-3'>like</span>
          <span className='ml-3'>to</span>
          <span className='ml-3'>code.</span>
        </div>
        <ul className='bg-gray-100 flex items-center justify-center p-1 rounded-3xl shadow-sm mt-7'>
          <a
            className='p-2'
            target='_blank'
            href='https://github.com/nishchay06'
          >
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
        <div className='relative z-10 text-black top-6 flex flex-col items-start rounded-xl w-50 bg-white r shadow-lg shadow-sky-500 mt-4'>
          <div className='absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200' />
          <button
            onClick={handleComposeEmail}
            className='relative gradient-border rounded-xl flex items-center justify-center bg-black hover:bg-white hover:text-black opacity-95 hover:opacity-100 text-white px-5 py-3 md:px-10 md:py-6 text-xl transform hover:scale-105 duration-300'
          >
            Send me an email
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
