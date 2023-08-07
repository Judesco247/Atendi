import React from 'react'
import styles from '../style'
import { Navbar, Newsheader, Latest, Contact, Footer } from '../components'

const News = () => (
    <div className='bg-dimWhite w-full overflow-hidden'>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Navbar />
            </div>
        </div>
        <div className={`${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
                <Newsheader />
            </div>
        </div>
        <div className={`bg-dimWhite ${styles.paddingX} ${styles.flexStart}`}>
            <div className={``}>
                <Latest />
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

export default News