import React from 'react'
import { line } from '../assets'

const Philosophy = () => (
    <div class="container mx-auto p-10">
        <div class="p-4">
            <h1 class="text-center text-color1 text-[25px] font-bold font-kollektif-700">Our Philosophy</h1>
            <p class="ml-12 w-[932px] text-center text-color2 text-[13px] font-kollektif-700 p-4">As a technology-led company, information is at our core. We are continually thinking about solutions that positively impact customer relationships of ours and clients for an advanced world.</p>

            <div className="ml-12 container mx-auto grid grid-cols-3 gap-5 pt-5 p-10">
                <div className="container mx-auto p-2">
                    <h5 className='text-[20px] text-color1 font-bold font-kollektif-400'>
                        <span><img src={line} alt="bluetick" className="mr-2 mb-2" /></span>
                        Our Vision
                    </h5>
                    <p className="text-color2 text-[13px] font-kollektif-400 pt-5">To lead in the customer engagement <br />
                     solutions provider industry</p>
                </div>
                <div className="container mx-auto p-2">
                    <h5 className='text-[20px] text-color1 font-bold font-kollektif-400'>
                        <span><img src={line} alt="bluetick" className="mr-2 mb-2" /></span>
                        Our Mission
                    </h5>
                    <p className="text-color2 text-[13px] font-kollektif-400 pt-5">To enhance the communication process<br />
                    of customer engagement through<br /> technological resources</p>
                </div>
                <div className="container mx-auto p-2">
                    <h5 className='text-[20px] text-color1 font-bold font-kollektif-400'>
                        <span><img src={line} alt="bluetick" className="mr-2 mb-2" /></span>
                        Our Goal
                    </h5>
                    <p className="text-color2 text-[13px] font-kollektif-400 pt-5">Create stellar reputation, set and<br />
                     achieve business milestones</p>
                </div>
            </div>
        </div>

    </div>
)

export default Philosophy