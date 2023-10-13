import React from "react";
import { knowledge1, line } from "../assets";

const ManageScreen = () => (
  <div className="mt-[-60px] items-center">
    <div class="flex">
      <img
        src={knowledge1}
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
          In a rapidly changing business landscape, staying ahead of the
          competition requires a keen understanding of market trends and
          customer preferences. Our Market Surveys provide you with valuable
          data and strategic intelligence that empowers you to make
          well-informed decisions. We design comprehensive survey methodologies
          to gather relevant market information and industry insights. Our team
          of skilled analysts interprets survey data to identify emerging
          trends, customer sentiment, and potential opportunities for growth.
          From market sizing and segmentation to competitor analysis, our Market
          Surveys offer a comprehensive view of the market dynamics, helping you
          align your business strategies to maximize profitability and
          competitive advantage.
        </p>
      </div>
    </div>
  </div>
);

export default ManageScreen;
