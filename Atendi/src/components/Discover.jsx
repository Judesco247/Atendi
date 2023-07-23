import React from 'react'
import { discover1, discover2, discover3, discover4, discover5 } from '../assets'

const Discover = () => (
    <div className='ml-3 container mx-auto mb-20'>
        <h5 className='mt-20 text-color1 text-[25px] font-bold font-kollektif-700'>Discover More</h5>
        <div class="grid grid-cols-5 gap-1 mt-5 items-center">

            <a href="#" class="cursor-pointer text-color1 hover:text-background">
                <div class="container mx-auto">
                    <img src={discover1} alt="bluetick" className="mb-2" />
                    <div className="ml-3 flex items-center mt-[20px]">
                        <a href="#" class="cursor-pointer  font-kollektif-700 text-[13px] font-semibold">Home </a>
                    </div>
                </div>
            </a>

            <a href="#" class="cursor-pointer text-color1 hover:text-background">
                <div class="container mx-auto">
                    <img src={discover2} alt="bluetick" className="mb-2" />
                    <div className="ml-3 flex items-center mt-[20px]">
                        <a href="#" class="cursor-pointer  font-kollektif-700 text-[13px] font-semibold">About us </a>
                    </div>
                </div>
            </a>

            <a href="#" class="cursor-pointer text-color1 hover:text-background">
                <div class="container mx-auto">
                    <img src={discover3} alt="bluetick" className="mb-2" />
                    <div className="ml-3 flex items-center mt-[20px]">
                        <a href="#" class="cursor-pointer  font-kollektif-700 text-[13px] font-semibold">Services </a>
                    </div>
                </div>
            </a>

            <a href="#" class="cursor-pointer text-color1 hover:text-background">
                <div class="container mx-auto">
                    <img src={discover4} alt="bluetick" className="mb-2" />
                    <div className="ml-3 flex items-center mt-[20px]">
                        <a href="#" class="cursor-pointer  font-kollektif-700 text-[13px] font-semibold">Case study </a>
                    </div>
                </div>
            </a>

            <a href="#" class="cursor-pointer text-color1 hover:text-background">
                <div class="container mx-auto">
                    <img src={discover5} alt="bluetick" className="mb-2" />
                    <div className="ml-3 flex items-center mt-[20px]">
                        <a href="#" class="cursor-pointer  font-kollektif-700 text-[13px] font-semibold">Blog </a>
                    </div>
                </div>
            </a>

        </div>
    </div>
)

export default Discover