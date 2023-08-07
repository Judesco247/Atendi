import React from 'react'
import { our_story } from '../assets'

const Story = () => (
  <div>
    <div class="hidden md:flex items-center p-16">
  <div class="relative">
    <img className='w-[620px] h-[570px] top-[111px] left-[160px]' src={our_story} alt="Image" />
    <div class="absolute w-[520px] h-[540px] top-[40px] left-[470px] bg-white p-4">
        <div className='absolute p-10'>
        <h1 className='text-color1 text-[25px] font-bold font-kollektif-400'>
            Our Story
        </h1>
        <p className="text-color2 text-[13px] font-kollektif-400 pt-5 pb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Duis sit vehicula dui sit amet ligula cursus. dolor sit amet dolor adipiscing. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit vehicula dui sit amet ligula cursus.
        dolor sit amet dolor adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Duis sit vehicula dui sit amet ligula cursus. dolor sit amet dolor adipiscing. Lorem 
        ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit vehicula dui sit amet ligula
        cursus. dolor sit amet dolor adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Duis sit vehicula dui sit amet ligula cursus. dolor sit amet dolor 
        adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur 
        </p>
        <button className="w-[200px] py-3 px-3 bg-background text-white px-4 py-2 ">Book Consultation</button>
        </div>
    </div>
  </div>
</div>

<div className="block md:hidden w-[428px] h-[650px] mt-20">
<div className='w-[380px] h-[600px]'>
<h1 className='text-color1 text-[25px] font-bold font-kollektif-400 mb-10'>
            Our Story
        </h1>
        <p className="text-color2 w-[350px] h-[494px] text-[14px] font-kollektif-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Duis sit vehicula dui sit amet ligula cursus. dolor sit amet dolor adipiscing. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit vehicula dui sit amet ligula cursus.
        dolor sit amet dolor adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Duis sit vehicula dui sit amet ligula cursus. dolor sit amet dolor adipiscing. Lorem 
        ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit vehicula dui sit amet ligula
        cursus. dolor sit amet dolor adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Duis sit vehicula dui sit amet ligula cursus. dolor sit amet dolor 
        adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur 
        </p>
        <div className="mt-[-96px]">
        <button className="w-[350px] h-[56px] bg-background text-white ">Book Consultation</button>
        </div>
        
</div>
</div>

</div>

  )

export default Story