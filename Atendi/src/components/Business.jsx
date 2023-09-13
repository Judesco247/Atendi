import React from 'react'
import styles from '../style'

const Business = () => (
  <div className={`bg-color7 ${styles.paddingX} ${styles.flexStart}`}>
  <div className="bg-color0 p-4 mt-[30px] md:w-[1000px] w-[428px] md:h-[200px] h-[722px]">
    <h2 className="text-center text-2xl text-white font-bold font-bodyfont mb-4 pt-5">Achievements</h2>
    <br />
    <div className="md:grid grid-cols-5 gap-4">
      <div className="flex flex-col items-center mb-12">
        <span className="text-4xl text-background font-bold">100+</span>
        <span className="text-white font-bodyfont">Clients</span>
      </div>
      <div className="flex flex-col items-center mb-12">
        <span className="text-4xl text-background font-bold">2700</span>
        <span className="text-white font-bodyfont">Projects</span>
      </div>
      <div className="flex flex-col items-center mb-12">
        <span className="text-4xl text-background font-bold">96%</span>
        <span className="text-white font-bodyfont">Success rate</span>
      </div>
      <div className="flex flex-col items-center mb-12">
        <span className="text-4xl text-background font-bold">30</span>
        <span className="text-white font-bodyfont">Countries</span>
      </div>
      <div className="flex flex-col items-center mb-12">
        <span className="text-4xl text-background font-bold">10+</span>
        <span className="text-white font-bodyfont">Years of Experience</span>
      </div>
    </div>
  </div>
  </div>

)

export default Business