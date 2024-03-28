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
        ></div>
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

  /* return (
        <div className='mt-32'>
            <div className="rfm-marquee-container">
                <div className="rfm-overlay" style={{ "--gradient-color": 'white', "--gradient-width": "200px" }}></div>
                <Marquee pauseOnHover>
                    {notes.map((note) => (
                        <div className="">
                            <div className="w-full flex h-78 md:h-72 lg:h-64 flex-col justify-between gap-y-2 mx-6 border border-gray-200 p-6 rounded-2xl hover:border-gray-400 cursor-pointer hover:bg-gray-50">
                                <p className="text-base font-light">
                                    {note.message}
                                </p>
                                <div>
                                    <h3 className="font-bold">{note.name}</h3>
                                    <p className="text-sm text-gray-500">{note.position}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                    {notes.map((note) => (
                        <div className="rfm-marquee">
                            <div className="rfm-child" >
                                <div className="flex h-78 md:h-72 lg:h-64 flex-col justify-between gap-y-2 mx-6 border border-gray-200 p-6 rounded-2xl hover:border-gray-400 cursor-pointer hover:bg-gray-50">
                                    <p className="sm:max-w-xs md:max-w-md lg:max-w-xl max-w-xs text-base font-light">
                                        {note.message}
                                    </p>
                                    <div>
                                        <h3 className="font-bold">{note.name}</h3>
                                        <p className="text-sm text-gray-500">{note.position}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                </Marquee>
            </div>
            <div className="flex flex-col items-center w-full mt-8">
                <div className="relative z-10 text-black flex flex-col items-center rounded-xl w-48 bg-white r shadow-lg shadow-sky-500 h-10 mt-4">
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200">
                    </div>
                    <button onClick={() => navigate('/messages')} className="relative gradient-border px-4 py-2 rounded-xl justify-between bg-black hover:bg-white hover:text-black opacity-95 hover:opacity-100 text-white w-full text-base font-normal transform hover:scale-105 duration-300">
                        Say something nice
                    </button>
                </div>
            </div>
        </div >
    ) */
}

export default Recommendations
