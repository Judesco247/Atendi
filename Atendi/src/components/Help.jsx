import React from 'react'
import { help_image, line } from '../assets'

const Help = () => (
    <div>
    <div class="hidden md:flex items-center">
        <img className='w-[580px] h-[600px] h-[375px]' src={help_image} alt="Image" />
        <div className='md:w-[620px] w-[380px] md:h-[600px] h-[682px] p-24'>
            <h5 className='text-[25px] text-white font-bold font-kollektif-400 px-2'>
                <span><img src={line} alt="bluetick" className="mr-2 mb-2 w-[120px] h-[3px]" /></span>
                How We Can Help
            </h5>
            <p className="text-white text-[13px] font-kollektif-400 pt-5 pb-6">Lorem ipsum dolor sit amet, consectetur
             adipiscing elit. Duis sit vehicula dui sit amet ligula cursus. dolor sit amet dolor adipiscing. Lorem ipsum
             dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis 
             sit vehicula dui sit amet ligula cursus. dolor sit amet dolor adipiscing. Lorem ipsum dolor sit amet, 
             consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit vehicula 
             dui sit amet ligula <br /><br />
             cursus. dolor sit amet dolor adipiscing. Lorem ipsum dolor sit amet, Lorem ipsum dolor 
             sit amet, consectetur adipiscing elit. Duis sit vehicula dui sit amet ligula cursus. dolor sit amet dolor 
             adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur 
             adipiscing elit. Duis sit vehicula </p>

             <div class="md:flex pt-5">
                <button className="w-[150px] py-3 px-3 text-[13px] font-bold text-white px-4 py-2 border-2 border-background font-kollektif-400 ">Our Services</button>
                <button className="w-[150px] py-3 px-3 text-[13px] font-bold bg-background text-white px-4 py-2 ml-3 font-kollektif-400">Contact Us</button>
            </div>

        </div>
    </div>

    <div className="block md:hidden w-[428px] h-[1136px]">
    <img className='w-[428px] h-[375px]' src={help_image} alt="Image" />
    <div className='ml-6 w-[350px] h-[506px] mt-10'>
            <h5 className='text-[25px] text-white font-bold font-kollektif-400 px-2'>
                <span><img src={line} alt="bluetick" className="mr-2 mb-2 w-[120px] h-[3px]" /></span>
                How We Can Help
            </h5>
            <p className="text-white text-[14px] font-kollektif-400 pt-5 pb-6">Lorem ipsum dolor sit amet, consectetur
             adipiscing elit. Duis sit vehicula dui sit amet ligula cursus. dolor sit amet dolor adipiscing. Lorem ipsum
             dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis 
             sit vehicula dui sit amet ligula cursus. dolor sit amet dolor adipiscing. Lorem ipsum dolor sit amet, 
             consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit vehicula 
             dui sit amet ligula <br /><br />
             cursus. dolor sit amet dolor adipiscing. Lorem ipsum dolor sit amet, Lorem ipsum dolor 
             sit amet, consectetur adipiscing elit. Duis sit vehicula dui sit amet ligula cursus. dolor sit amet dolor 
             adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur 
             adipiscing elit. Duis sit vehicula </p>

             <div class="mt-5">
                <button className="w-[350px] h-[54px] text-[13px] font-bold text-white border-2 border-background font-kollektif-400 ">Our Services</button>
                </div>
                <div class="mt-3">
                <button className="w-[350px] h-[54px] text-[13px] font-bold bg-background text-white font-kollektif-400">Contact Us</button>
            </div>

        </div>
    </div>
    </div>
)

export default Help