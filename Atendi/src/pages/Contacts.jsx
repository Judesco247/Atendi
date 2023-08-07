import React from 'react'
import styles from '../style'
import { Navbar, Contactheader, Contactwhite, Discover, Contact, Footer } from '../components'

const Contacts = () => (
    <div className='bg-dimWhite w-full overflow-hidden'>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Navbar />
            </div>
        </div>
        <div className={`${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
                <Contactheader />
            </div>
        </div>
        <div className={`bg-dimWhite ${styles.paddingX} ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
                <Contactwhite />
            </div>
        </div>
        <div className={`bg-dimWhite ${styles.paddingX} ${styles.flexStart}`}>
            <div className={``}>
                <Discover />
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

export default Contacts