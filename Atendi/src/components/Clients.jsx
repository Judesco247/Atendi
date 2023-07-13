import React from 'react'
import { vector, } from "../assets";

const Clients = () => (
  <div class="container mx-auto p-10 bg-color0 p-20">
    <div class="bg-color0 p-4">
      <h1 class="text-center text-[20px] text-white font-bold font-kollektif-700">Why Choose ATENDI?</h1>
      <p class="ml-12 text-center text-[13px] text-white font-kollektif-700 p-4">With our advanced technological solutions and innovative strategies, ATENDI can provide your business with enhanced communication, increased revenue, streamlined operations, and a competitive advantage. Choose us for results-driven solutions.</p>

      <div className="container mx-auto grid grid-cols-3 gap-4">
        <div className="container mx-auto p-2">
          <div className="ml-12 flex items-center">
            <img src={vector} alt="bluetick" className="mr-2" />
            <h5 className='text-white text-[14px] font-bold font-kollektif-400'>Enhanced communication</h5>
          </div>
        </div>
        <div className="container mx-auto p-2">
          <div className="ml-12 flex items-center">
            <img src={vector} alt="bluetick" className="mr-2" />
            <h5 className='text-white text-[14px] font-bold font-kollektif-400'>Better collaboration</h5>
          </div>
        </div>
        <div className="container mx-auto p-2">
          <div className="ml-12 flex items-center">
            <img src={vector} alt="bluetick" className="mr-2" />
            <h5 className='text-white text-[14px] font-bold font-kollektif-400'>Improved strategies</h5>
          </div>
        </div>
        <div className="container mx-auto p-2">
          <div className="ml-12 flex items-center">
            <img src={vector} alt="bluetick" className="mr-2" />
            <h5 className='text-white text-[14px] font-bold font-kollektif-400'>Increased revenue</h5>
          </div>
        </div>
        <div className="container mx-auto p-2">
          <div className="ml-12 flex items-center">
            <img src={vector} alt="bluetick" className="mr-2" />
            <h5 className='text-white text-[14px] font-bold font-kollektif-400'>Customized solutions</h5>
          </div>
        </div>
        <div className="container mx-auto p-2">
          <div className="ml-12 flex items-center">
            <img src={vector} alt="bluetick" className="mr-2" />
            <h5 className='text-white text-[14px] font-bold font-kollektif-400'>Enhanced compliance</h5>
          </div>
        </div>
        <div className="container mx-auto p-2">
          <div className="ml-12 flex items-center">
            <img src={vector} alt="bluetick" className="mr-2" />
            <h5 className='text-white text-[14px] font-bold font-kollektif-400'>Streamlined operations</h5>
          </div>
        </div>
        <div className="container mx-auto p-2">
          <div className="ml-12 flex items-center">
            <img src={vector} alt="bluetick" className="mr-2" />
            <h5 className='text-white text-[14px] font-bold font-kollektif-400'>Reduced costs</h5>
          </div>
        </div>
        <div className="container mx-auto p-2">
          <div className="ml-12 flex items-center">
            <img src={vector} alt="bluetick" className="mr-2" />
            <h5 className='text-white text-[14px] font-bold font-kollektif-400'>Reduced risk</h5>
          </div>
        </div>
        <div className="container mx-auto p-2">
          <div className="ml-12 flex items-center">
            <img src={vector} alt="bluetick" className="mr-2" />
            <h5 className='text-white text-[14px] font-bold font-kollektif-400'>Improved project management</h5>
          </div>
        </div>
        <div className="container mx-auto p-2">
          <div className="ml-12 flex items-center">
            <img src={vector} alt="bluetick" className="mr-2" />
            <h5 className='text-white text-[14px] font-bold font-kollektif-400'>Increased retention</h5>
          </div>
        </div>
        <div className="container mx-auto p-2">
          <div className="ml-12 flex items-center">
            <img src={vector} alt="bluetick" className="mr-2" />
            <h5 className='text-white text-[14px] font-bold font-kollektif-400'>Competitive advantage</h5>
          </div>
        </div>
      </div>
    </div>

  </div>
)

export default Clients