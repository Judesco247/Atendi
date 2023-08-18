import React from 'react'
import { Component, telecom, retail, manufacture, hospitality, health, government, education, banking, } from '../assets'

const Industries = () => (
  <div>
    <div className=' mt-20 hidden md:block'>
    <div class="flex items-center justify-center">
      <h1 className='ml-3 mb-4 text-color1 text-[25px] font-bold font-kollektif-400'>Our Industries</h1>
    </div>
    <div class="flex items-center justify-center p-4">
      <p className="text-color2 text-center text-[13px] font-kollektif-700 pb-6">ATENDI provides cutting-edge technology solutions that are tailored to meet the unique needs of various industries, including healthcare,<br /> finance, and retail.</p>
    </div>
  </div>


  <div className='block md:hidden w-[428px] mt-10'>
    <div class="flex items-center justify-center">
      <h1 className='mb-4 text-color1 text-[25px] font-bold font-kollektif-400'>Our Industries</h1>
    </div>
    <div class="items-center justify-center">
      <p className="ml-3 text-color2 w-[350px] text-center text-[13px] font-kollektif-700">
        ATENDI provides cutting-edge technology solutions that are tailored to meet the unique 
        needs of various industries, including healthcare, finance, and retail.
      </p>
    </div>

    <div class="ml-3 grid grid-cols-2 gap-4 mt-5 mb-20 ">
    <div class="">
      <div className='ml-12'><img src={telecom} alt="bluetick" className="" /></div>
  <h5 className='ml-3 text-color6 text-[14px] font-bold font-kollektif-400'>TELECOMMUNICATION</h5>
  </div>

  <div class="">
    <div className='ml-6'><img src={education} alt="bluetick" className="" /></div>
  <h5 className='ml-5 text-color6 text-[14px] font-bold font-kollektif-400'>EDUCATION</h5>
  </div>

  <div class="">
    <div className='ml-12'><img src={manufacture} alt="bluetick" className="" /></div>
  <h5 className='ml-6 text-color6 text-[14px] font-bold font-kollektif-400'>MANUFACTURING</h5>
  </div>

  <div class="">
    <div className='ml-6'><img src={health} alt="bluetick" className="" /></div>
  <h5 className='ml-5 text-color6 text-[14px] font-bold font-kollektif-400'>HEALTHCARE</h5>
  </div>

  <div class="">
    <div className='ml-12'><img src={banking} alt="bluetick" className="" /></div>
  <h5 className='ml-3 text-color6 text-[14px] font-bold font-kollektif-400'>BANKING & FINANCE</h5>
  </div>

  <div class="">
    <div className='ml-6'><img src={retail} alt="bluetick" className="" /></div>
  <h5 className='mr-6 text-color6 text-[14px] font-bold font-kollektif-400'>RETAIL & E-COMMERCE</h5>
  </div>

  <div class="">
    <div className='ml-12'><img src={hospitality} alt="bluetick" className="" /></div>
  <h5 className='ml-3 text-color6 text-[14px] font-bold font-kollektif-400'>HOSPITALITY & TOURISM</h5>
  </div>

  <div class="">
    <div className='ml-6'><img src={government} alt="bluetick" className="" /></div>
  <h5 className='ml-5 text-color6 text-[14px] font-bold font-kollektif-400'>GOVERNMENT</h5>
  </div>
    </div>
  </div>
  </div>
  )

export default Industries