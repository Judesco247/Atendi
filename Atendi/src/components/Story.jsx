import React from 'react'
import { our_story } from '../assets'

const Story = () => (
  <div>
    <div class="hidden md:flex items-center p-16">
      <div class="relative">
        <img className='w-[620px] h-[570px] top-[111px] left-[160px]' src={our_story} alt="Image" />
        <div class="absolute w-[520px] h-[540px] top-[40px] left-[470px] bg-white p-4">
          <div className='absolute p-10'>
            <h1 className='text-color1 text-[25px] font-bold font-bodyfont-400'>
              Our Story
            </h1>
            <p className="w-[490px] text-color2 text-[13px] font-bodyfont-400 pt-5 pb-6">
              Our journey began in 20XX when a team of passionate tech enthusiasts founded ATENDI with a
              vision to transform businesses through innovative technology solutions. Over the years, we've
              evolved into a trusted partner, helping clients across industries harness the power of technology
              to drive growth and success. <br /><br />
              With a commitment to excellence, we've cultivated a team of dedicated experts who bring diverse
              skills and a shared passion for innovation. Our relentless pursuit of quality and customer
              satisfaction has earned us recognition and trust in the industry.<br /><br />
              From our humble beginnings to becoming a leading technology-led company, we've always remained
              focused on our core values of integrity, teamwork, and reliability. We're proud of the impact
              we've made, the partnerships we've built, and the innovative solutions we've delivered.<br /><br />
              As we continue to expand our horizons, our story remains centered around empowering businesses
              through advanced technology, shaping the future of customer engagement, and leaving a lasting
              positive mark on the industries we serve.
            </p>
            <button className="w-[200px] py-3 px-3 bg-background text-white px-4 py-2 ">Book Consultation</button>
          </div>
        </div>
      </div>
    </div>

    <div className="block md:hidden w-[428px] h-[650px] mt-20 mb-20">
      <div className='w-[380px] h-[600px]'>
        <h1 className='text-color1 text-[25px] font-bold font-bodyfont-400 mb-10'>
          Our Story
        </h1>
        <p className="text-color2 w-[350px] text-[14px] font-bodyfont-400">
          Our journey began in 20XX when a team of passionate tech enthusiasts founded ATENDI with a
          vision to transform businesses through innovative technology solutions. Over the years, we've
          evolved into a trusted partner, helping clients across industries harness the power of technology
          to drive growth and success. <br /><br />
          With a commitment to excellence, we've cultivated a team of dedicated experts who bring diverse
          skills and a shared passion for innovation. Our relentless pursuit of quality and customer
          satisfaction has earned us recognition and trust in the industry.<br /><br />
          From our humble beginnings to becoming a leading technology-led company, we've always remained
          focused on our core values of integrity, teamwork, and reliability. We're proud of the impact
          we've made, the partnerships we've built, and the innovative solutions we've delivered.<br /><br />
          As we continue to expand our horizons, our story remains centered around empowering businesses
          through advanced technology, shaping the future of customer engagement, and leaving a lasting
          positive mark on the industries we serve.
        </p>
        <div className="mt-6">
          <button className="w-[350px] h-[56px] bg-background text-white ">Book Consultation</button>
        </div>

      </div>
    </div>

  </div>

)

export default Story