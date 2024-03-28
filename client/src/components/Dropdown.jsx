import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"

const DropDown = ({showMenu, setShowMenu}) => {
  const navigate = useNavigate()

  const links = [
    {
      id: 1,
      name: "Home",
      url: "/",
    },
    {
      id: 2,
      name: "About",
      url: "/about",
    },
    {
      id: 3,
      name: "Experience",
      url: "/experience",
    },
    {
      id: 4,
      name: "Projects",
      url: "/projects",
    },
    {
      id: 5,
      name: "Notes",
      url: "/allMessages",
    },
  ]

  const handleClick = (url) => {
    navigate(`${url}`)
    setShowMenu(false)
  }

  return (
    <div className='relative flex flex-col items-center z-10'>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className='text-black font-normal bg-gray-100 w-full flex items-center justify-between text-base rounded-lg px-4 py-3'
      >
        Menu
        {!showMenu ? <IoIosArrowDown /> : <IoIosArrowUp />}
      </button>
      {showMenu && (
        <div>
          <div className='absolute z-10 text-black top-14 right-0 flex flex-col items-start rounded-lg w-48 bg-white r shadow-lg shadow-sky-500'>
            <div className='absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200'></div>
            <div className='relative w-full px-2 py-2 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex flex-col items-top justify-start'>
              {links.map((link, i) => (
                <div
                  onClick={() => handleClick(link.url)}
                  className='font-normal text-base justify-between hover:bg-gray-100 cursor-pointer rounded-lg p-2 m-0'
                >
                  <h3 className=''>{link.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default DropDown
