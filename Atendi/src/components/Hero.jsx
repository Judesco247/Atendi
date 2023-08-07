import styles from '../style';
import {discount, robot, banner, amazon, chime, ebay, googles, openwave, pinterest, hubspot, salesforce, home_banner } from '../assets';
import GetStarted from './GetStarted';
import { Link } from "react-router-dom";

const Hero = () => (
  <div>
  <div className="hidden md:block bg-cover bg-center bg-hero-bg w-full">
    {/* <img className='w-[1600px] h-[920px]' src={home_banner} alt="banner" /> */}
    <div className="flex-[1.5] max-w-full h-[650px] justify-start item-start rounded-lg shadow-lg p-8 mb-8">
      <h1 className="ml-3 w-[1151px] h-[154px] text-[50px] text-white font-bold font-kollektif-700 mb-4 mt-10 absolute">Empowering Customer Engagement <br /> Through Technology</h1>
      <hr className="ml-3 w-[769px] h-2 border-color4 mb-4 absolute mt-56" />
      <p className="ml-3 w-[750px] text-[15px] mb-4 font-kollektif-400 absolute text-white mt-64">ATENDI empowers customer engagement through innovative technology solutions.<br />
       Our services optimize operations, enhance data insights, and create a seamless <br /> customer experience, helping businesses of all sizes achieve their goals with ease</p>
       <Link to="/">
      <button className="ml-3 w-[200px] py-3 px-3 bg-background text-white px-4 py-2 absolute mt-96">Learn More</button>
      </Link>{" "}
      {/* <h5 className="ml-96 px-4 py-2 rounded absolute mt-[-350px] text-color4">Trusted by startups and Fortune 500 companies</h5> */}
    </div>
    
    {/* <div className="ml-12 w-[1150px] flex -mx-4 mb-8 absolute mt-[-300px]">
      <div className="w-1/4 md:w-1/8 lg:w-1/8 px-4 mb-4">
        <img src={salesforce} alt="Client 1" />
      </div>
      <div className="w-1/2 md:w-1/4 lg:w-1/8 px-4 mb-4">
        <img src={ebay} alt="Client 2" />
      </div>
      <div className="w-1/2 md:w-1/4 lg:w-1/8 px-4 mb-4">
        <img src={googles} alt="Client 3" />
      </div>
      <div className="w-1/2 md:w-1/4 lg:w-1/8 px-4 mb-4">
        <img src={pinterest} alt="Client 4" />
      </div>
      <div className="w-1/2 md:w-1/4 lg:w-1/8 px-4 mb-4">
        <img src={chime} alt="Client 5" />
      </div>
      <div className="w-1/2 md:w-1/4 lg:w-1/8 px-4 mb-4">
        <img src={openwave} alt="Client 6" />
      </div>
      <div className="w-1/2 md:w-1/4 lg:w-1/8 px-4 mb-4">
        <img src={amazon} alt="Client 7" />
      </div>
      <div className="w-1/2 md:w-1/4 lg:w-1/8 px-4 mb-4">
        <img src={hubspot} alt="Client 8" />
      </div>
    </div> */}
  </div>

  <div className="block md:hidden w-[428px] h-[564px] bg-cover bg-center bg-mhome-bg mt-4">
    <div className='w-[380px] h-[483.97px]'>
      <h1 className='ml-6 w-[364px] h-[123px] text-[33px] text-white font-bold font-kollektif-700 mb-4 mt-10 absolute'>Empowering Customer Engagement Through Technology</h1>
      <hr className="ml-12 w-[325px] h-2 border-color4 mb-4 absolute mt-56" />
      <p className='ml-6 w-[363px] h-[120px] text-[15px] mb-4 font-kollektif-400 absolute text-color3 mt-64'>ATENDI empowers customer engagement through innovative 
      technology solutions. Our services optimize operations, enhance data insights, and create a 
      seamless customer experience, helping businesses of all sizes achieve their goals with ease</p><br />
      <Link to="/">
      <button className="ml-6 w-[350px] h-[56px] py-3 px-3 bg-background text-white px-4 py-2 absolute mt-96">Book Consultation</button>
      </Link>{" "}
    </div>
  </div>
</div>

)

export default Hero