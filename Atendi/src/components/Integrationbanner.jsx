import React from 'react'
import { researchimg } from '../assets'
import { Link } from 'react-router-dom'

const Integrationbanner = () => (
    <div>
    <img className="" src={researchimg} alt="banner" />
    <div className="ml-16 flex-[1.5] max-w-full h-[650px] justify-start item-start rounded-lg p-8 mt-[-440px]">
      <h4 className="ml-3 text-background text-[14]  font-secondaryfont mt-20">
        SERVICES
      </h4>
      <h1 className="ml-3 text-white text-[50px] font-semibold mb-4 font-bodyfont-400">
      Integration
      </h1>
      <p className="ml-3 w-[550px] text-[15px] mb-4 font-bodyfont-400 absolute text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit
        vehicula dui sit amet ligula cursus. dolor sit amet dolor adipiscing.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
      </p>
      <div className="mt-32">
        <Link to="/">
          <button className="ml-3 w-[200px] py-3 px-3 bg-background text-white px-4 py-2 absolute font-bodyfont">
            Speak to a Consultant
          </button>
        </Link>{" "}
      </div>
    </div>
  </div>
  )

export default Integrationbanner