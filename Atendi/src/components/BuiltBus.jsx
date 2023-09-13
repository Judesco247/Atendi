import React from "react";
import { tie } from "../assets";

const BuiltBus = () => (
  <div class="md:grid grid-cols-3 grid-rows-2 gap-4 mt-20 mb-20 bg-color7">
    <div class="container mx-auto mb-10">
      <h5 className="ml-3 mb-4 text-color1 text-[25px] font-bold font-bodyfont-400">
        Built for Your Business
      </h5>
      <p className="ml-3 w-[300px] text-color2 text-[13px] font-bodyfont-400">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit
        vehicula dui sit amet ligula cursus. dolor sit amet dolor adipiscing.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
    <div class="ml-20 mb-6 bg-white w-[280px] h-[250px]">
      <h5 className="ml-3 mb-4 text-color6 text-[15px] font-bold font-bodyfont-400">
        <span>
          <img src={tie} alt="bluetick" className="" />
        </span>
        Large Business
      </h5>
      <p className="ml-3 w-[250px] text-color2 text-[13px] font-bodyfont-400">
        Our team learns your project’s history, rules, and goals. We determine
        what regulations the project should follow and evaluate the possible
        options for development.
      </p>
    </div>

    <div class="mb-6 bg-white w-[280px] h-[250px]">
      <h5 className="ml-3 mb-4 text-color6 text-[15px] font-bold font-bodyfont-400">
        <span>
          <img src={tie} alt="bluetick" className="" />
        </span>
        Small Business
      </h5>
      <p className="ml-3 w-[250px] text-color2 text-[13px] font-bodyfont-400">
        Our team learns your project’s history, rules, and goals. We determine
        what regulations the project should follow and evaluate the possible
        options for development.
      </p>
    </div>

    <div class="container mx-auto mb-10"></div>

    <div class="ml-20 mb-6 bg-white w-[280px] h-[250px]">
      <h5 className="ml-3 mb-4 text-color6 text-[15px] font-bold font-bodyfont-400">
        <span>
          <img src={tie} alt="bluetick" className="" />
        </span>
        Medium Business
      </h5>
      <p className="ml-3 w-[250px] text-color2 text-[13px] font-bodyfont-400">
        Our team learns your project’s history, rules, and goals. We determine
        what regulations the project should follow and evaluate the possible
        options for development.
      </p>
    </div>

    <div class="mb-6 bg-white w-[280px] h-[250px]">
      <h5 className="ml-3 mb-4 text-color6 text-[15px] font-bold font-bodyfont-400">
        <span>
          <img src={tie} alt="bluetick" className="" />
        </span>
        Startups
      </h5>
      <p className="ml-3 w-[250px] text-color2 text-[13px] font-bodyfont-400">
        Our team learns your project’s history, rules, and goals. We determine
        what regulations the project should follow and evaluate the possible
        options for development.
      </p>
    </div>
  </div>
);

export default BuiltBus;
