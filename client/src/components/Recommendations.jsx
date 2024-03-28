import Marquee from "react-fast-marquee"

const Recommendations = () => {
  return (
    <div className='mt-32'>
      <div
        className='rfm-marquee-container' /* style="--pause-on-hover: paused; --pause-on-click: paused; --width: 100%; --transform: none;" */
      >
        <div
          class='rfm-overlay'
          style={{ "--gradient-color": "white", "--gradient-width": "200px" }}
        >
          {/* <div className='rfm-overlay::before'></div>
                        <div className='rfm-overlay::after'></div> */}
        </div>
        <Marquee pauseOnHover>
          <div
            className='rfm-marquee' /* style="--play: running; --direction: normal; --duration: 67.4s; --delay: 0s; --iteration-count: infinite; --min-width: 100%;" */
          >
            <div className='rfm-initial-child-container'>
              <div className='rfm-child'>
                <div className='flex h-78 md:h-72 lg:h-64 flex-col justify-between gap-y-2 mx-6 border border-gray-200 p-6 rounded-2xl hover:border-gray-400 cursor-pointer hover:bg-gray-50'>
                  <p className='sm:max-w-xs md:max-w-md lg:max-w-xl max-w-xs text-base font-light'>
                    Chetan is an exceptional and highly talented developer. In
                    addition to his skill in hands-on development, he has
                    in-depth knowledge of the latest technology trends and
                    offers excellent guidance on tools and tech stacks. Having
                    him on our team was a fantastic experience, and we're very
                    much looking forward to our next project together. Thanks,
                    Chetan!
                  </p>
                  <div>
                    <h3 className='font-bold'>Daniel</h3>
                    <p className='text-sm text-gray-500'>Manager, Logoarena</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className='rfm-marquee' /* style="--play: running; --direction: normal; --duration: 67.4s; --delay: 0s; --iteration-count: infinite; --min-width: 100%;" */
          >
            <div className='rfm-child'>
              <div className='flex h-78 md:h-72 lg:h-64 flex-col justify-between gap-y-2 mx-6 border border-gray-200 p-6 rounded-2xl hover:border-gray-400 cursor-pointer hover:bg-gray-50'>
                <p className='sm:max-w-xs md:max-w-md lg:max-w-xl max-w-xs text-base font-light'>
                  Chetan is an exceptional and highly talented developer. In
                  addition to his skill in hands-on development, he has in-depth
                  knowledge of the latest technology trends and offers excellent
                  guidance on tools and tech stacks. Having him on our team was
                  a fantastic experience, and we're very much looking forward to
                  our next project together. Thanks, Chetan!
                </p>
                <div>
                  <h3 className='font-bold'>Daniel</h3>
                  <p className='text-sm text-gray-500'>Manager, Logoarena</p>
                </div>
              </div>
            </div>
          </div>
        </Marquee>
      </div>
    </div>
  )
}

export default Recommendations
