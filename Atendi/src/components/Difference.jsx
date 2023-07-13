import React from 'react'
import { difference_image } from '../assets'

const Difference = () => (
    <div class="flex items-start mt-20 mb-[-20px] ">
        <div class="flex-initial mr-4">
            <img src={difference_image} alt="Image" className='w-[580px] h-[550px]' />
        </div>
        <div className='flex-grow w-[580px] h-[600px] mt-20'>
            <h1 className='ml-3 mb-4 text-color1 text-[25px] font-bold font-kollektif-400'>What differentiates Attendi from<br /> other platforms?</h1>
            <div className='relative w-[400px] overflow-hidden'>
                <input type='checkbox' className='peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer' />
                <div className='bg-dimWhite h-12 w-full pl-5 flex items-center'>
                    <h1 className='text-[15px] text-color0 font-bold font-kollektif-700'>Analysis</h1>
                </div>

                <div className='absolute top-3 right-3 text-background transition-transform duration-500 rotate-0 peer-checked:rotate-180'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>

                <div className='bg-dimWhite overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40'>
                    <div className='p-4'>
                        <p className="text-color2 text-[13px] font-kollektif-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit vehicula dui sit amet ligula cursus. dolor sit amet dolor adipiscing. Lorem ipsum dolor sit amet, consectetur</p>
                    </div>
                </div>
                <hr class="border-1 mt-2" />
            </div>

            <div className='relative w-[400px] overflow-hidden'>
                <input type='checkbox' className='peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer' />
                <div className='bg-dimWhite h-12 w-full pl-5 flex items-center'>
                    <h1 className='text-[15px] text-color0 font-bold font-kollektif-700'>Reporting</h1>
                </div>

                <div className='absolute top-3 right-3 text-background transition-transform duration-500 rotate-0 peer-checked:rotate-180'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>

                <div className='bg-dimWhite overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40'>
                    <div className='p-4'>
                        <p className="text-color2 text-[13px] font-kollektif-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit vehicula dui sit amet ligula cursus. dolor sit amet dolor adipiscing. Lorem ipsum dolor sit amet, consectetur</p>
                    </div>
                </div>
                <hr class="border-1 mt-2" />
            </div>

            <div className='relative w-[400px] overflow-hidden'>
                <input type='checkbox' className='peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer' />
                <div className='bg-dimWhite h-12 w-full pl-5 flex items-center'>
                    <h1 className='text-[15px] text-color0 font-bold font-kollektif-700'>Research</h1>
                </div>

                <div className='absolute top-3 right-3 text-background transition-transform duration-500 rotate-0 peer-checked:rotate-180'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>

                <div className='bg-dimWhite overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40'>
                    <div className='p-4'>
                        <p className="text-color2 text-[13px] font-kollektif-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit vehicula dui sit amet ligula cursus. dolor sit amet dolor adipiscing. Lorem ipsum dolor sit amet, consectetur</p>
                    </div>
                </div>
                <hr class="border-1 mt-2" />
            </div>

            <div className='relative w-[400px] overflow-hidden'>
                <input type='checkbox' className='peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer' />
                <div className='bg-dimWhite h-12 w-full pl-5 flex items-center'>
                    <h1 className='text-[15px] text-color0 font-bold font-kollektif-700'>Implementation</h1>
                </div>

                <div className='absolute top-3 right-3 text-background transition-transform duration-500 rotate-0 peer-checked:rotate-180'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>

                <div className='bg-dimWhite overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40'>
                    <div className='p-4'>
                        <p className="text-color2 text-[13px] font-kollektif-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit vehicula dui sit amet ligula cursus. dolor sit amet dolor adipiscing. Lorem ipsum dolor sit amet, consectetur</p>
                    </div>
                </div>
                <hr class="border-1 mt-2" />
            </div>

            <div className='relative w-[400px] overflow-hidden'>
                <input type='checkbox' className='peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer' />
                <div className='bg-dimWhite h-12 w-full pl-5 flex items-center'>
                    <h1 className='text-[15px] text-color0 font-bold font-kollektif-700'>Reporting</h1>
                </div>

                <div className='absolute top-3 right-3 text-background transition-transform duration-500 rotate-0 peer-checked:rotate-180'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>

                <div className='bg-dimWhite overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40'>
                    <div className='p-4'>
                        <p className="text-color2 text-[13px] font-kollektif-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit vehicula dui sit amet ligula cursus. dolor sit amet dolor adipiscing. Lorem ipsum dolor sit amet, consectetur</p>
                    </div>
                </div>
                <hr class="border-1 mt-2" />
            </div>
        </div>
    </div>

)

export default Difference