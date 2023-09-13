import React from 'react'
import { Link } from "react-router-dom";
import styles from '../style';

const Testimonials = () => (
  <div className={`bg-dimWhite ${styles.paddingX} ${styles.flexStart}`}>
    <div class="md:ml-26 md:w-[850px] w-[380px] md:h-[110px] h-[186px] item-center mb-20">
      <div class="md:flex flex-cols-2 justify-between bg-color0 mt-[70px] py-3 px-3">
        <div class="">
          <p class="p-3 text-white md:text-[20px] text-[22px] text-center font-semibold font-bodyfont-400">Talk to an Expert About Your Project</p>
        </div>
        <div class="">
          <button className="md:p-3 md:mr-30 bg-background text-white text-[13px] md:w-[206px] w-[350px] md:h-[46px] h-[56px] font-semibold font-bodyfont-400">Book Consultation</button>
        </div>
      </div>
    </div>

    {/* <div className="block md:hidden w-[380px] h-[186px] item-center bg-color0 px-4 py-3 mb-10">
<p class="text-white text-[24px] w-[332px] h-[50px] font-semibold font-bodyfont-400">Talk to an Expert About Your Project</p>
<Link to="/">
      <button className="w-[350px] h-[56px] py-3 px-3 bg-background text-white px-4 py-2 absolute mt-10">Book Consultation</button>
      </Link>{" "}
</div> */}
  </div>

)

export default Testimonials