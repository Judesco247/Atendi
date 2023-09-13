import React from "react";
import {
  certification1,
  certification2,
  certification3,
  certification4,
} from "../assets";

const Certification = () => (
  <div className="md:mb-20 mt-10">
    <div className=" md:w-[800px] w-[428px] md:h-[100px] h-[722px] ">
      <div class="md:ml-16 md:grid grid-cols-4 mt-5 items-center">
        <div class="container mx-auto md:w-[250px] w-[379px] h-[100px]">
          <img
            src={certification1}
            alt="bluetick"
            className="md:w-[100px] w-[379px] md:h-[80px]"
          />
        </div>

        <div class="hidden md:block container mx-auto w-[250px] h-[100px]">
          <img
            src={certification2}
            alt="bluetick"
            className="w-[100px] h-[80px]"
          />
        </div>

        <div class="hidden md:block container mx-auto w-[250px] h-[100px]">
          <img
            src={certification3}
            alt="bluetick"
            className="w-[100px] h-[80px]"
          />
        </div>

        <div class="hidden md:block container mx-auto w-[250px] h-[100px]">
          <img
            src={certification4}
            alt="bluetick"
            className="w-[100px] h-[80px]"
          />
        </div>
      </div>
    </div>
  </div>
);

export default Certification;
