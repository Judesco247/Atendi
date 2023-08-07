import React from 'react'
import {user, business, knowledge, integration, management, arrow,} from "../assets";

const CardDeal = () => (
  <div class="md:grid grid-cols-3 grid-rows-2 gap-4 mt-20 mb-20 bg-color7">
  <div class="container mx-auto mb-10">
  <h5 className='ml-3 mb-4 text-color1 text-[25px] font-bold font-kollektif-400'>Our Services</h5>
  <p className="ml-3 w-[300px] text-color2 text-[13px] font-kollektif-400">Our services are designed to 
  empower businesses of all sizes with the tools they need to optimize operations, enhance data insights, 
  and create a seamless customer experience. From knowledge management to project management, we deliver 
  innovative solutions that drive results</p>
  </div>
  <div class="mb-6 bg-white">
  <h5 className='ml-3 mb-4 text-color6 text-[15px] font-bold font-kollektif-400'>
    <span><img src={user} alt="bluetick" className="" /></span>User Research</h5>
    <p className="ml-3 w-[300px] text-color2 text-[13px] font-kollektif-400">Our user research service 
    provides you with insights into how your customers interact with your product or service, allowing 
    you to make informed decisions and create a better user experience. We use a range of qualitative 
    and quantitative research methods to gather data on user behavior and preferences.</p>
    <div className="flex items-center mt-[30px]">
    <a href="#" class="ml-3 cursor-pointer text-background font-kollektif-400 text-[13px] font-semibold">Learn More </a>
    <img src={arrow} alt="arrow" className="" />
    </div>
  </div>

  <div class="mb-6 bg-white">
  <h5 className='ml-3 mb-4 text-color6 text-[15px] font-bold font-kollektif-400'>
    <span><img src={business} alt="bluetick" className="" /></span>Business Analysis</h5>
    <p className="ml-3 w-[300px] text-color2 text-[13px] font-kollektif-400">Our business analysis services 
    help clients identify business problems and opportunities, and develop solutions to improve processes, 
    products, and services.</p>
    <div className="flex items-center mt-[70px]">
    <a href="#" class="ml-3 cursor-pointer text-background font-kollektif-400 text-[13px] font-semibold">Learn More </a>
    <img src={arrow} alt="arrow" className="" />
    </div>
  </div>

  <div class="mb-6 bg-white">
  <h5 className='ml-3 mb-4 text-color6 text-[15px] font-bold font-kollektif-400'>
    <span><img src={knowledge} alt="bluetick" className="" /></span>Knowledge Management</h5>
    <p className="ml-3 w-[300px] text-color2 text-[13px] font-kollektif-400">We help businesses capture, organize, 
    and manage their internal knowledge to improve performance, productivity, and collaboration.</p>
    <div className="flex items-center mt-[70px]">
    <a href="#" class="ml-3 cursor-pointer text-background font-kollektif-400 text-[13px] font-semibold">Learn More </a>
    <img src={arrow} alt="arrow" className="" />
    </div>
  </div>

  <div class="mb-6 bg-white">
  <h5 className='ml-3 mb-4 text-color6 text-[15px] font-bold font-kollektif-400'>
    <span><img src={integration} alt="bluetick" className="" /></span>Integration</h5>
    <p className="ml-3 w-[300px] text-color2 text-[13px] font-kollektif-400">We provide integration services to help 
    businesses connect and streamline their systems and processes, improving efficiency and reducing errors.</p>
    <div className="flex items-center mt-[70px]">
    <a href="#" class="ml-3 cursor-pointer text-background font-kollektif-400 text-[13px] font-semibold">Learn More </a>
    <img src={arrow} alt="arrow" className="" />
    </div>
  </div>

  <div class="mb-6 bg-white">
  <h5 className='ml-3 mb-4 text-color6 text-[15px] font-bold font-kollektif-400'>
    <span><img src={management} alt="bluetick" className="" /></span>Project Management</h5>
    <p className="ml-3 w-[300px] text-color2 text-[13px] font-kollektif-400">Our project management services help businesses 
    plan, organize, and execute projects, delivering them on time, on budget, and to scope.</p>
    <div className="flex items-center mt-[70px]">
    <a href="#" class="ml-3 cursor-pointer text-background font-kollektif-400 text-[13px] font-semibold">Learn More </a>
    <img src={arrow} alt="arrow" className="" />
    </div>
  </div>
</div>

  )

export default CardDeal