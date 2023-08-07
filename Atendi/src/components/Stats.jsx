import React from 'react'
import { check1, about } from '../assets';

const Stats = () => (
  // <div>Stats</div>
  <div className="container mx-auto">
    <div className="flex md:flex-row flex-col-reverse sm:py-16 py-6">
      <div className="">
        <p className='md:ml-12 md:w-[450px] w-[328px] text-background text-[15px] font-bold mb-4'>Our Journey as a Technology Consulting Company</p>
        <h1 className='md:ml-12 md:w-[600px] w-[328px] text-color1 text-[25px] font-bold mb-4 font-kollektif-400'>Enhancing Customer Engagement Through Technology</h1>
        <p className="md:ml-12 md:w-[617px] w-[360px] text-color2 md:text-[13px] text-[10px] font-kollektif-400">Welcome to ATENDI, a leading customer engagement solutions provider. Our mission
          is to enhance the communication process of customer engagement through 
          technological resources. We believe in advancing with people, which is why we're
          dedicated to creating a people-oriented, team-oriented, innovative, and outcome-
          oriented company culture. Our vision is to lead in the customer engagement solutions
          provider industry by creating a stellar reputation and setting and achieving business
          milestones</p>
        <br />
        <button className="md:ml-12 py-2 px-6 border-2 border-background text-background text-[12px] font-bold">Learn More</button>
        
        <div className="container mx-auto md:flex flex-cols-4 gap-4 mt-[80px]">
          <div className="w-[346px] mb-12">
            <div className="md:ml-12 flex items-center">
              <img src={check1} alt="bluetick" className="mr-2" />
              <h5 className='text-color1 text-[15px] font-bold font-kollektif-400'>CUSTOMER FOCUS</h5>
            </div>
            <p className="md:ml-12 md:w-[311px] w-[365px] text-color2 text-[13px] font-kollektif-400">We put the customer at the heart of everything we do. By listening to their needs and understanding their goals, we create solutions that empower their success</p>
          </div>
          <div className="w-[346px] mb-12">
            <div className="flex items-center">
              <img src={check1} alt="bluetick" className="mr-2" />
              <h5 className='text-color1 text-[15px] font-bold font-kollektif-400'>TECHNOLOGY-LED</h5>
            </div>
            <p className="md:w-[311px] w-[365px] text-color2 text-[13px] font-kollektif-400">Our commitment to innovation drives us to use the latest technology and techniques to deliver cutting-edge solutions that meet the evolving needs of our clients</p>
          </div>
        </div>

        <div className="container mx-auto md:flex flex-cols-4 gap-4">
          <div className="w-[346px] mb-12">
            <div className="md:ml-12 flex items-center">
              <img src={check1} alt="bluetick" className="mr-2" />
              <h5 className='text-color1 text-[15px] font-bold font-kollektif-400'>PARTNERSHIP</h5>
            </div>
            <p className="md:ml-12 md:w-[311px] w-[365px] text-color2 text-[13px] font-kollektif-400">We work closely with our clients, building strong partnerships based on trust, open communication, and a shared commitment to achieving their goals</p>
          </div>
          <div className="w-[346px] mb-12">
            <div className="flex items-center">
              <img src={check1} alt="bluetick" className="mr-2" />
              <h5 className='text-color1 text-[15px] font-bold font-kollektif-400'>ADAPTABILITY</h5>
            </div>
            <p className="md:w-[311px] w-[365px] text-color2 text-[13px] font-kollektif-400">Our agile approach allows us to quickly adapt to changes in our clients' needs, ensuring we always deliver effective solutions that make a meaningful impact</p>



          </div>
        </div>

      </div>
      <div className="">
        <img src="" alt="Image" />
      </div>
    </div>




    {/* <div className="flex md:flex-row flex-col-reverse sm:py-16 py-6">
    <div className="mx-4">
      <h2
        className={`font-Inter font-semibold xs:text-[16px] md:mt-[10px] mt-[20px] text-[14px] text-black   w-full mb-4 `}
      >
        Our Journey as a Technology Consulting Company
      </h2>
      <h1
        className={`font-Inter font-semibold xs:text-[28px] md:mt-[2px] text-[20px] text-black  w-full mb-4 text-primary `}
      >
        Enhancing Customer Engagement Through Technology{" "}
      </h1>
      <div
        className={`font-inter font-normal  sm:text-[16px] text-[12px] sm:leading-[25.8px] leading-[25.8px] min-w-[470px] md:mt-0 mt-5 mb-6`}
      >
        <p>
        Welcome to ATENDI, a leading customer engagement solutions provider. Our mission<br />
          is to enhance the communication process of customer engagement through <br />
          technological resources. We believe in advancing with people, which is why we're<br />
          dedicated to creating a people-oriented, team-oriented, innovative, and outcome-<br />
          oriented company culture. Our vision is to lead in the customer engagement solutions<br />
          provider industry by creating a stellar reputation and setting and achieving business<br />
          milestones
        </p>
      </div>
    </div>
    <div className="relative">
      <img
        src={about}
        alt="vision"
        className="  md:w-[718px] w-[371.34px]  md:h-[931px] h-[238px] " id='busimage'
      />
    </div>
  </div> */}
  </div>

)

export default Stats