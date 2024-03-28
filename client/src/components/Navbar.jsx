import React, { useState } from "react"
import Marquee from "react-fast-marquee"
import { useNavigate } from "react-router-dom"

import DropDown from "./Dropdown"

const NavBar = () => {
  const navigate = useNavigate()
  const [showMenu, setShowMenu] = useState(false)
  const handleClickLogo = () => {
    navigate("/")
    setShowMenu(false)
  }
  return (
    <div className='flex justify-between items-center w-full h-20 px-4 text-black bg-white'>
      <div>
        <h1 onClick={handleClickLogo} className='text-1xl ml-2 cursor-pointer'>
          Nishchay.
        </h1>
      </div>
      <div className='w-96 hidden md:block'>
        <div className='font-normal text-base rfm-marquee-container bg-gray-50 text-black p-2 rounded-full cursor-pointer border border-transparent hover:border hover:border-gray-200'>
          <Marquee>
            <span className='text-sm flex items-center gap-x-6'>
              <div className='relative flex items-center jutify-center'>
                <div className='h-3 w-3 absolute bg-green-400 rounded-full mr-2' />
                <div className='h-3 w-3 absolute bg-green-400 rounded-full mr-2 animate-ping' />
              </div>
              CURRENTLY LOOKING FOR SWE POSITION
            </span>
          </Marquee>
        </div>
      </div>
      <div className='place-items-center'>
        <DropDown showMenu={showMenu} setShowMenu={setShowMenu} />
      </div>
    </div>
  )
}

export default NavBar
