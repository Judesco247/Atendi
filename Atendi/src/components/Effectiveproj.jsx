import React from "react";
import { effective, line } from "../assets";

const Effectiveproj = () => (
  <div className="mt-[-100px] items-center">
    <div className="flex items-center justify-center">
      <img src={line} alt="bluetick" className="mr-2 mb-2" />
    </div>
    <div className="flex items-center justify-center">
      <h5 className="mb-4 text-center text-color1 text-[25px] font-bold font-bodyfont-700 w-[550px]">
        Effective Project Management: Delivering Results on Time and Within
        Budget
      </h5>
    </div>
    <div class="ml-10 md:grid grid-cols-2 items-center">
      <img
        src={effective}
        alt="Image"
        className=" w-[450px] h-[300px] ml-10 mt-[-50px]"
      />
      <div className="flex-1 w-[554px] h-[429px] mt-[60px]">
        <p className="text-color2 text-[13px] font-bodyfont-400 w-[450px]">
          Successful projects require effective Project Management, and that's
          precisely what we excel at. At Avante Consulting, our experienced
          project managers bring proven methodologies and insights to ensure
          your initiatives are delivered on time, within budget, and meet the
          defined objectives. We take a holistic approach, overseeing every
          aspect of the project from initiation to closure, while collaborating
          with your teams to align the project's goals with your organization's
          strategic vision. Our project management expertise extends across
          various industries and domains, allowing us to adapt and tailor our
          approach to suit your specific needs. We emphasize proactive risk
          management, identifying potential obstacles and devising contingency
          plans to mitigate any challenges that may arise. With a focus on clear
          communication and stakeholder engagement, we keep you involved
          throughout the process, empowering you with the knowledge to make
          informed decisions and achieve project success.
        </p>
      </div>
    </div>
  </div>
);

export default Effectiveproj;
