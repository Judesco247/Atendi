import React from "react";
import { intscreen, line } from "../assets";

const Integrationscreen = () => (
  <div className="mt-[-60px] mb-10 items-center">
    <div class="flex">
      <img
        src={intscreen}
        alt="Image"
        className="hidden lg:block mt-[-86px] w-[650px] h-[450px]"
      />
      <div className="flex-1 md:w-[554px] h-[429px] mt-[-32px] lg:ml-0 md:ml-[150px]">
        <h2 className="text-[25px] text-color1 font-bold font-bodyfont-400 md:w-[400px] w-[350px] mb-5">
          <span>
            <img src={line} alt="bluetick" className="mr-2 mb-2" />
          </span>
          Maximizing Organizational Knowledge: A Knowledge Management Screen
        </h2>
        <p className="text-color2 text-[13px] font-bodyfont-400 md:w-[450px] w-[350px]">
          At Atendi Consulting, our Implementation Services go beyond just
          software installation; we are your trusted partners in transforming
          your business processes and systems. Our expert team collaborates
          closely with your organization to ensure a seamless integration of
          innovative solutions tailored to your unique requirements. With an
          in-depth understanding of the latest technologies and industry best
          practices, we optimize your operations and workflows to drive
          efficiency and boost productivity. Our approach to implementation
          revolves around meticulous planning, execution, and
          post-implementation support. We manage the entire process with
          precision, providing regular updates and transparent communication to
          keep you informed throughout the journey. Whether you are upgrading
          your existing systems or adopting cutting-edge solutions, we make sure
          that the transition is smooth, minimizing disruption and maximizing
          the value you gain from your investment.
        </p>
      </div>
    </div>
  </div>
);

export default Integrationscreen;
