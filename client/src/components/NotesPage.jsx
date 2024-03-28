import { createNoteAPI } from "../api/notes"
import Footer from "./Footer"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

const MessagePage = () => {
  const navigate = useNavigate()
  const [successModal, setSuccessModal] = useState(false)
  const [faileModal, setFailModal] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    position: "",
    message: "",
  })

  // Event handler for input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({
      name: "",
      position: "",
      message: "",
    })

    const result = await createNoteAPI(formData)
    if (result) {
      setSuccessModal(true)
    } else {
      setFailModal(true)
    }
  }

  /* useEffect(() => {
        setSuccessModal(successModal);
        if (successModal) {
            // Set a timeout to close the modal after the specified duration
            const timeoutId = setTimeout(() => {
                setSuccessModal(false);
            }, 5000);
            // Clear the timeout if the modal is closed manually before the timeout
            return () => clearTimeout(timeoutId);
        }
    }, [successModal]); */

  return (
    <div>
      {/* <div className="absolute w-full top-12 left-0 flex items-center justify-center">
                <div
                    className={`flex items-center z-10 max-w-sm px-5 py-3 rounded bg-green-500 text-white transition-all ${successModal
                        ? 'opacity-100 transform -translate-y-130'
                        : 'opacity-0 top-0 transform -translate-y-full'
                        }`}
                >
                    <p className="text-white text-base">Success!</p>
                </div>
            </div> */}
      {successModal && (
        <div className='fixed overlay bg-black opacity-50 w-screen h-screen top-0 left-0 z-20'></div>
      )}
      <div
        className={`flex items-center z-30 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
          successModal ? "visible" : "invisible"
        } opacity-100 transition-opacity duration-300 ease-in-out`}
      >
        <div className='bg-white px-12 py-10 rounded shadow-md flex flex-col items-center justify-center'>
          <p>Thanks for your kind words!</p>
          <p className='text-sm mt-4 opacity-50'>
            Your message has been successfully posted.
          </p>
          <button
            className='text-base mt-12 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600'
            onClick={() => navigate("/")}
          >
            Return to Main Page
          </button>
        </div>
      </div>
      <div class='flex flex-col items-center'>
        <div class='flex flex-row items-center text-center text-6xl font-bold mt-16'>
          <span class='md:ml-1 xl:ml-4 ml-4 text-5xl'>
            Leave a public note about me!
          </span>
        </div>
        <form
          class='flex flex-col items-center mt-10 w-96 p-5 md:p-0'
          onSubmit={handleSubmit}
        >
          <input
            class='p-4 w-full m-2 bg-gray-100 rounded-md border-0 outline-none text-base font-normal'
            placeholder='Name'
            name='name'
            value={formData.name}
            onChange={handleInputChange}
            required
            autoComplete='off'
          />
          <input
            class='p-4 m-2 w-full border-0 bg-gray-100 rounded-md outline-none text-base font-normal'
            placeholder='Position'
            name='position'
            value={formData.position}
            onChange={handleInputChange}
            required
            autoComplete='off'
          />
          <div class='flex flex-col relative max-w-sm w-full rounded-lg overflow-hidden mx-auto m-2'>
            <textarea
              rows='4'
              maxLength='300'
              x-model='maximum'
              x-ref='maximum'
              placeholder='Say something nice...'
              name='message'
              value={formData.message}
              onChange={handleInputChange}
              required
              className='block w-full mt-1 p-4 rounded-md shadow-sm focus:outline-none bg-gray-100 text-base font-normal z-0'
            ></textarea>
            <span className='absolute px-2 py-1 rounded right-2 bottom-2 text-xs font-normal text-gray-500 bg-gray-100 z-10'>
              {formData.message.length}/300
            </span>
          </div>
          <input
            role='button'
            className='text-base font-normal relative gradient-border m-1 px-3 py-2 cursor-pointer rounded-xl flex items-center justify-center bg-black hover:bg-black hover:text-white opacity-95 hover:opacity-100 text-white disabled:cursor-not-allowed disabled:opacity-50'
            type='submit'
          />
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default MessagePage
