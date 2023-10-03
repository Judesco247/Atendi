import React from 'react'
import styles from '../style'
import { Navbar, Serviceheader, Wedo, CardDeal, Difference, Contact, Footer } from '../components'

const Services = () => (
    <div className='bg-color7 w-full overflow-hidden'>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Navbar />
            </div>
        </div>
        <div className={`${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
                <Serviceheader />
            </div>
        </div>
        <div className="bg-color7">
            <div className={`${styles.boxWidth}`}>
                <Wedo />
            </div>
        </div>
        <div className={`bg-color7`}>
            <div className={`${styles.boxWidth}`}>
                <CardDeal />
            </div>
        </div>
        <div className={`bg-dimWhite ${styles.paddingX} ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
                <Difference />
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

export default Services