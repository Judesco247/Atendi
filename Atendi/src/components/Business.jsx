import React from 'react'

const Business = () => (
  <div className="bg-color0 p-4 mt-[30px] md:w-[1000px] w-[428px] md:h-[200px] h-[722px]">
    <h2 className="text-center text-2xl text-white font-bold mb-4 pt-5">Achievements</h2>
    <br />
    <div className="md:grid grid-cols-5 gap-4">
      <div className="flex flex-col items-center mb-12">
        <span className="text-4xl text-background font-bold">100+</span>
        <span className="text-white">Clients</span>
      </div>
      <div className="flex flex-col items-center mb-12">
        <span className="text-4xl text-background font-bold">2700</span>
        <span className="text-white">Projects</span>
      </div>
      <div className="flex flex-col items-center mb-12">
        <span className="text-4xl text-background font-bold">96%</span>
        <span className="text-white">Success rate</span>
      </div>
      <div className="flex flex-col items-center mb-12">
        <span className="text-4xl text-background font-bold">30</span>
        <span className="text-white">Countries</span>
      </div>
      <div className="flex flex-col items-center mb-12">
        <span className="text-4xl text-background font-bold">10+</span>
        <span className="text-white">Years of Experience</span>
      </div>
    </div>
  </div>

)

export default Business