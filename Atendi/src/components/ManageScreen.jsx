import React from "react";
import { knowledge1, line } from "../assets";

const ManageScreen = () => (
  <div className="mt-[-60px] items-center">
    <div class="flex">
      <img
        src={knowledge1}
        alt="Image"
        className="mt-[-86px] w-[650px] h-[450px]"
      />
      <div className="flex-1 w-[554px] h-[429px] mt-[-32px]">
        <h2 className="text-[25px] text-color1 font-bold font-bodyfont-400 w-[440px] mb-5">
          <span>
            <img src={line} alt="bluetick" className="mr-2 mb-2" />
          </span>
          Maximizing Organizational Knowledge: A Knowledge Management Screen
        </h2>
        <p className="text-color2 text-[13px] font-bodyfont-400 w-[450px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit
          vehicula dui sit amet ligula cursus. dolor sit amet dolor adipiscing.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Duis sit vehicula dui sit
          amet ligula cursus. dolor sit amet dolor adipiscing. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Duis sit vehicula dui sit amet ligula
          cursus. dolor sit amet dolor adipiscing. Lorem ipsum dolor sit amet,
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit
          vehicula dui sit amet ligula cursus. dolor sit amet dolor adipiscing.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Duis sit vehicula
        </p>
      </div>
    </div>
  </div>
);

export default ManageScreen;
