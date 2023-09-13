import React from 'react'
import styles from '../style'

const Comments = () => (
  <div className={`mt-5 bg-color0 ${styles.paddingX} ${styles.flexStart}`}>
    <div className={`${styles.boxWidth}`}>
      <div class="hidden md:block ml-20 overflow-x-auto w-[1600px] h-[680px]">
        <div className='ml-10 w-[500px] mt-20 mb-10'>
          <h2 className='text-white text-[25px] font-bold font-bodyfont-700'>What Our Clients are Saying</h2>
          <p className='text-color2 text-[14px] font-bodyfont-400'>
            Don't just take our word for it - see what actual users of our service have to say about their experience.
          </p>
        </div>
        <div class="flex gap-4 items-center mt-12">
          <div class="bg-color0-300 p-4 shadow-lg offset-x-4 offset-y-4 opacity-80 w-[300px] h-[379px]">
            <p className='text-white text-[14px] font-bodyfont-400 w-[260px] h-[130px] text-center mt-10'>
              “I've been using this web hosting service for over a year and I'm really impressed with the uptime
              and support. The website has never gone down and the customer service is always quick to help with
              any issues I have. Highly recommend!”
            </p>
            <h5 className='text-white text-[15px] font-bold font-bodyfont-700 text-center mt-5'>Jane Smith</h5>
            <p className='text-color2 text-[14px] font-bodyfont-400 text-center'>Chairman</p>
            <p className='text-color2 text-[14px] font-bodyfont-400 text-center'>Dangote Group of Companies</p>
          </div>


          <div class="bg-color0-300 p-4 shadow-lg offset-x-4 offset-y-4 opacity-80 w-[300px] h-[379px]">
            <p className='text-white text-[14px] font-bodyfont-400 w-[260px] h-[130px] text-center mt-10'>
              “I've been using this web hosting service for a few months now and overall it's been fine. The uptime
              has been good and I haven't had any major issues. The pricing is also reasonable. Nothing particularly
              stands out as exceptional, but it gets the job done.”
            </p>
            <h5 className='text-white text-[15px] font-bold font-bodyfont-700 text-center mt-10'>Tom Williams</h5>
            <p className='text-color2 text-[14px] font-bodyfont-400 text-center'>CEO</p>
            <p className='text-color2 text-[14px] font-bodyfont-400 text-center'>Gartner & CO. Industries</p>
          </div>


          <div class="bg-color0-300 p-4 shadow-lg offset-x-4 offset-y-4 opacity-80 w-[300px] h-[379px]">
            <p className='text-white text-[14px] font-bodyfont-400 w-[260px] h-[130px] text-center mt-10'>
              “I've been using this web hosting service for a few months and it's been nothing but problems. My website
              has gone down multiple times and the customer service has been unresponsive. I would not recommend this company."
            </p>
            <h5 className='text-white text-[15px] font-bold font-bodyfont-700 text-center mt-5'>Michael Brown</h5>
            <p className='text-color2 text-[14px] font-bodyfont-400 text-center'>Online Entrepreneur</p>
            {/* <p className='text-color2 text-[14px] font-bodyfont-400 text-center'>Dangote Group of Companies</p> */}
          </div>
        </div>
      </div>


      <div className='block md:hidden w-[428px] mt-5 mb-10'>
        <div className='items-center'>
          <h2 className='ml-3 w-[322px] text-white text-[25px] text-center font-semibold font-bodyfont-700'>What Our Clients are Saying</h2>
          <p className='w-[360px] text-color2 text-[15px] text-center font-bodyfont-400 mt-4'>
            Don't just take our word for it - see what actual users of our service have to say about their experience.
          </p>
        </div>

        <div class="ml-5 bg-color0-300 p-4 shadow-lg offset-x-4 offset-y-4 opacity-80 w-[300px] h-[379px]">
          <p className='text-white text-[14px] font-bodyfont-400 w-[260px] h-[130px] text-center mt-10'>
            “I've been using this web hosting service for over a year and I'm really impressed with the uptime
            and support. The website has never gone down and the customer service is always quick to help with
            any issues I have. Highly recommend!”
          </p>
          <h5 className='text-white text-[15px] font-bold font-bodyfont-700 text-center mt-5'>Jane Smith</h5>
          <p className='text-color2 text-[14px] font-bodyfont-400 text-center'>Chairman</p>
          <p className='text-color2 text-[14px] font-bodyfont-400 text-center'>Dangote Group of Companies</p>
        </div>
      </div>

    </div>
  </div>

)

export default Comments