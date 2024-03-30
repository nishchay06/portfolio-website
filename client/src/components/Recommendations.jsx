import { useEffect, useState } from "react"
import Marquee from "react-fast-marquee"
import { useNavigate } from "react-router-dom"

import { getAllNotesAPI } from "../api/notes"

const Recommendations = () => {
  const navigate = useNavigate()
  const [notes, setNotes] = useState([])

  useEffect(() => {
    getAllNotesAPI().then((n) => {
      setNotes(n)
    })
  }, [])

  return (
    <div className='mt-28'>
      <div
        className='rfm-marquee-container'
        onClick={() => navigate("/allMessages")}
      >
        <div
          className='rfm-overlay'
          style={{ "--gradient-color": "white", "--gradient-width": "200px" }}
        />
        <Marquee autoFill pauseOnHover>
          <div className='marquee flex'>
            {notes.map((note) => (
              <div className='w-[500px] flex h-78 md:h-72 lg:h-64 flex-col justify-between gap-y-2 mx-6 border border-gray-200 p-6 rounded-2xl hover:border-gray-400 cursor-pointer hover:bg-gray-50'>
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
        </Marquee>
      </div>
    </div>
  )
}

export default Recommendations
