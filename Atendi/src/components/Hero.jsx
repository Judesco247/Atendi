import styles from '../style';
import {discount, robot, banner, amazon, chime, ebay, googles, openwave, pinterest, hubspot, salesforce, home_banner } from '../assets';
import GetStarted from './GetStarted';

const Hero = () => (
  <div className="container mx-auto">
    {/* <img className='w-[1600px] h-[920px]' src="https://s3-alpha-sig.figma.com/img/6a73/cb5e/3f7e573c33b92244863c3a6767fa5ac2?Expires=1687737600&Signature=E4qaPYW0vbHgtcMdH-cu-Bs5onpG~OQ8PTVhtFe9tV9lzFK93udKVk~Zv8k5aq1scifScsgXDSTBXy7v3Gn17VBJZoz2E3RY2B5NdLjLUVJ4Jy5iXmWyO5sCyl-A-s00-SIX0yqziJkEDeT7cwJWGMyvLWxA7mmXac2YDRJ-upEQIpZz0SDftoRbzNvK1mM3EExBONewHJeA4BVKMaV8ga-BuXYoyuIFiWX6xiuf4sZQF0JDR~D9ApfVY0mMx~v45oBZjc1RvjAvZelxY5jFwGOsEwRczewC9QtJGWhFFEggiSwrcxO7yc3nlNs-l4IKTXY5av4sXTV4UvPyLpqyMA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="banner" /> */}
    <img className='w-[1600px] h-[920px]' src={home_banner} alt="banner" />
    <div className="flex-[1.5] max-w-[300px] justify-start item-start rounded-lg shadow-lg p-8 mb-8">
      <h1 className="ml-24 w-[1151px] h-[154px] text-[50px] text-white font-bold font-kollektif-700 mb-4 absolute mt-[-880px]">Empowering Customer Engagement <br /> Through Technology</h1>
      <hr className="ml-24 w-[769px] h-2 border-color4 mb-4 absolute mt-[-700px]" />
      <p className="ml-24 w-[750px] text-[15px] mb-4 font-kollektif-400 absolute mt-[-670px] text-color3">ATENDI empowers customer engagement through innovative technology solutions.<br />
       Our services optimize operations, enhance data insights, and create a seamless <br /> customer experience, helping businesses of all sizes achieve their goals with ease</p>
      <button className="ml-24 w-[200px] py-3 px-3 bg-background text-white px-4 py-2 absolute mt-[-560px]">Learn More</button>
      <h5 className="ml-96 px-4 py-2 rounded absolute mt-[-350px] text-color4">Trusted by startups and Fortune 500 companies</h5>
    </div>
    
    <div className="ml-12 w-[1150px] flex -mx-4 mb-8 absolute mt-[-300px]">
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
    </div>
  </div>
// </div>

)

export default Hero