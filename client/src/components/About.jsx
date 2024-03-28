import React from "react"
import { useNavigate } from "react-router-dom"

import { FaDownload } from "react-icons/fa"

const About = () => {
  const navigate = useNavigate()
  const handleDownloadResume = () => {
    const pdfUrl = "Nishchay_resume.pdf"
    const link = document.createElement("a")
    link.href = pdfUrl
    link.download = "Nishchay_resume.pdf" // specify the filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className='mt-20'>
      <div
        onClick={() => navigate("/about")}
        className='p-2 md:p-0 flex flex-col items-center'
      >
        <div className='mt-10 hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
          <div className='relative p-16 col-span-3 row-span-2 items-center bg-gray-50 rounded-2xl m-2 overflow-hidden hidden lg:flex hover:bg-gray-100'>
            <div className='flex flex-col gap-y-4 text-left w-1/2'>
              <h1 className='text-4xl font-semibold'>About me</h1>
              <p className='text-base font-normal text-gray-500 mt-4'>
                My name is Nishchay Mago, and I am a senior majoring in computer
                science at Netaji Subhas University of Techhnology(NSUT). I want
                to provide value to society through my knowledge and experience
                in technology. I would also love to work on projects with you,
                so please reach out to me if you need someone!
              </p>
              <div className='relative z-10 text-black flex flex-col items-start rounded-xl w-36 bg-white r shadow-lg shadow-sky-500'>
                <div className='absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200' />
                <button
                  onClick={handleDownloadResume}
                  className='relative gradient-border px-4 py-2 rounded-xl flex items-center justify-between bg-black hover:bg-white hover:text-black opacity-95 hover:opacity-100 text-white w-full text-base font-normal transform hover:scale-105 duration-300'
                >
                  <FaDownload />
                  My resume
                </button>
              </div>
            </div>
            <img
              src='src/assets/profile_pic.png'
              className='rounded-lg max-w-sm ml-10 left-48'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
// absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200
export default About
