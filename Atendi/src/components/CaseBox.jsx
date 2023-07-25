import React from 'react'
import { cloud_img } from '../assets'

const CaseBox = () => (
    <div class="flex flex-cols-2 mt-20">
  <div class="ml-16 flex w-[254px]">
    <h1 className='text-color1 text-[24px] font-bold font-kollektif-400'>The Result</h1>
  </div>
  <div class="ml-24 grid grid-cols-2 grid-rows-3 gap-4 w-[531px]">
    <div>
      <p className="text-color11 text-[14px] font-Graphik-400 pb-6"><img src={ cloud_img } alt="bluetick" className="mr-2" />
        <span className='font-bold text-background'>Improved communication<br /> and collaboration</span>
        </p>
    </div>
    <div className=''>
    <p className="text-color11 text-[14px] font-Graphik-400 pb-6"><img src={ cloud_img } alt="bluetick" className="mr-2" /> 
    <span className='font-bold text-background'>Better customer<br /> satisfaction</span>
    </p>
    </div>

    <div className=''>
      <p className="text-color11 text-[14px] font-kollektif-400 pb-6"><img src={ cloud_img } alt="bluetick" className="mr-2" />
        <span className='font-bold text-background'>Faster delivery of working<br /> software</span>
        </p>
    </div>
    <div className=''>
    <p className="text-color11 text-[14px] font-kollektif-400 pb-6"><img src={ cloud_img } alt="bluetick" className="mr-2" /> 
    <span className='font-bold text-background'>Increased flexibility</span>
    </p>
    </div>
  </div>
</div>
  )

export default CaseBox