import React from 'react'
import { logo, globe } from '../assets'

const Footer = () => (
  <footer class="py-6  mt-20 mb-20 p-4">
    <div class="flex flex-col mb-4">
      <img src={logo} alt='atendi' className='w-[77px] h-[81px]' />
    </div>
    <hr class="border-2 border-color1 mb-4" />
    <div class="grid grid-cols-5 gap-4 mt-10 mb-20">
      <div>
        {/* <h4 class="text-[12px] text-color1 font-bold font-kollektif-700">Column 1</h4> */}
        <p className="text-color2 text-[13px] font-kollektif-700 pt-5">ATENDI empowers customer engagement through innovative technology solutions. Our services optimize operations, enhance data insights, and create a seamless customer experience, helping businesses of all sizes achieve their goals with ease</p>
      </div>
      <div className='ml-6'>
        <h4 class="text-[12px] text-color1 font-bold font-kollektif-700">COMPANY</h4>
        <p className="text-color2 text-[13px] font-kollektif-700 pt-5">About us</p>
        <p className="text-color2 text-[13px] font-kollektif-700 pt-5">Leadership</p>
        <p className="text-color2 text-[13px] font-kollektif-700 pt-5">News</p>
        <p className="text-color2 text-[13px] font-kollektif-700 pt-5">Case studies</p>
      </div>
      <div>
        <h4 class="text-[12px] text-color1 font-bold font-kollektif-700">SERVICES</h4>
        <p className="text-color2 text-[13px] font-kollektif-700 pt-5">Integration</p>
        <p className="text-color2 text-[13px] font-kollektif-700 pt-5">Knowledge Management</p>
        <p className="text-color2 text-[13px] font-kollektif-700 pt-5">Business Analysis</p>
        <p className="text-color2 text-[13px] font-kollektif-700 pt-5">Project Management</p>
        <p className="text-color2 text-[13px] font-kollektif-700 pt-5">User Research</p>
      </div>
      <div>
        <h4 class="text-[12px] text-color1 font-bold font-kollektif-700">SUPPORT</h4>
        <p className="text-color2 text-[13px] font-kollektif-700 pt-5">FAQ</p>
        <p className="text-color2 text-[13px] font-kollektif-700 pt-5">Trouble Shooting</p>
      </div>
      <div>
        <h4 class="text-[12px] text-color1 font-bold font-kollektif-700">CONTACT US</h4>
        <p className="text-color2 text-[13px] font-kollektif-700 pt-5">Corporate Headquarters<br />
          10 Almaden Blvd, Suite 990<br />
          San Jose, CA 95113 USA</p>
        <p className="text-color2 text-[13px] font-kollektif-700 pt-5">+1 650 386 4000</p>
        <p className="text-color2 text-[13px] font-kollektif-700 pt-5">info@attendi.com</p>
      </div>
    </div>
    <div class="flex">
      <div className="container mx-auto p-2">
        <div className="flex items-center">
          <img src={globe} alt="globe" className="mr-2" />
          <p className='text-color8 text-[14px] font-semibold font-kollektif-400'>Nigerian English | EN</p>
        </div>
      </div>
    </div>
    <hr class="border-1 border-color2 mt-5 mb-4" />
    
    <div class="flex flex-wrap justify-between items-center">
  <p class="text-left text-color2 text-[13px] font-kollektif-700 pt-5">&copy; 2022 Attendi Corporation. All rights reserved.</p>
  
  <div class="grid grid-cols-3 gap-4 text-right">
    <div>
      {/* <h4 class="text-lg font-semibold text-color2 text-[13px] font-kollektif-700 pt-5">Column 1</h4> */}
      <p className="text-color2 text-[13px] font-kollektif-700 pt-5">Cookie Settings</p>
    </div>
    <div>
      {/* <h4 class="text-lg font-semibold text-color2 text-[13px] font-kollektif-700 pt-5">Column 2</h4> */}
      <p className="text-color2 text-[13px] font-kollektif-700 pt-5">Legal Information</p>
    </div>
    <div>
      {/* <h4 class="text-lg font-semibold">Column 3</h4> */}
      <p className="text-color2 text-[13px] font-kollektif-700 pt-5">Privacy Policy</p>
    </div>
  </div>
</div>


  </footer>

)

export default Footer