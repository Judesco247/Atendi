import React from 'react'
import styles from '../style'
import { Navbar, Aboutheader, Story, Philosophy, Help, Business, Leadership, Contact, Industries, Footer } from '../components'

const About_us = () => (
    <div className='bg-dimWhite w-full overflow-hidden'>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Navbar />
            </div>
        </div>
        <div className={`${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
                <Aboutheader />
            </div>
        </div>
        <div className={`bg-dimWhite ${styles.paddingX} ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
                <Story />
            </div>
        </div>
        <div className='bg-color7'>
            <div className={`${styles.boxWidth}`}>
                <Philosophy />
            </div>
        </div>
        <div className='bg-color0'>
            <div className={`${styles.boxWidth}`}>
                <Help />
            </div>
        </div>
        <div className="bg-color7">
            <div className={`${styles.boxWidth}`}>
                <Industries />
            </div>
        </div>
        {/* <div className={`bg-dimWhite`}>
            <div className={``}>
                <Business />
            </div>
        </div> */}
        <div className={`bg-dimWhite ${styles.paddingX} ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
                <Leadership />
            </div>
        </div>
        <div className={`bg-color0 ${styles.paddingX} ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
                <Contact />
            </div>
        </div>
        <div className={`bg-dimWhite ${styles.paddingX} ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
                <Footer />
            </div>
        </div>
    </div>
)

export default About_us