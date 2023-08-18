import React from 'react'
import styles from '../style'
import { Navbar, Contact, Footer, NewsBody } from '../components'

const FullNews = () => (
    <div className='bg-color7 w-full overflow-hidden'>
        <div className={`bg-dimWhite ${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Navbar />
            </div>
        </div>
        <div className={`bg-dimWhite ${styles.paddingX} ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
                <NewsBody />
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

export default FullNews