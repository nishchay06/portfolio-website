import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import { getAllNotesAPI } from "../api/notes"
import Footer from "./Footer"

const AllNotes = () => {
  const navigate = useNavigate()
  const [notes, setNotes] = useState([])

  useEffect(() => {
    getAllNotesAPI().then((n) => {
      setNotes(n)
    })
  }, [])

  return (
    <div className='mt-10 flex flex-col items-center'>
      <h1 className='text-5xl'>All Notes</h1>
      <div className='grid grid-cols-2 items-center w-full mt-10'>
        {notes.map((note) => (
          <div className='flex h-78 md:h-72 lg:h-64 flex-col justify-between gap-y-2 mx-3 mb-6 border border-gray-200 p-6 rounded-2xl hover:border-gray-400 cursor-pointer hover:bg-gray-50'>
            <p className='text-base font-normal'>{note.message}</p>
            <div>
              <h3 className='text-base'>{note.name}</h3>
              <p className='text-xs font-normal text-gray-500'>
                {note.position}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className='flex flex-col items-center'>
        <div className='relative z-10 text-black flex flex-col items-center rounded-xl w-44 h-full bg-white r shadow-lg shadow-sky-500 mt-4'>
          <div className='absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200'></div>
          <button
            onClick={() => navigate("/messages")}
            class='relative gradient-border px-4 py-4 rounded-xl justify-between bg-black hover:bg-white hover:text-black opacity-95 hover:opacity-100 text-white w-full text-base font-normal transform hover:scale-105 duration-300'
          >
            Write a note!
          </button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AllNotes
