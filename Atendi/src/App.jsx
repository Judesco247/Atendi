import styles from './style'

import {
  Navbar, Hero, Stats, Business, Billing, CardDeal,
  Testimonials, Clients, Plans, CTA, Industries, Footer
} from './components';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";

const App = () => (
  <div className='bg-color7 w-full overflow-hidden'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    <div className={`bg-dimWhite ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
      </div>
    </div>
    <div className="bg-color7">
      <div className={`${styles.boxWidth}`}>
        <Business />
      </div>
    </div>
    <div className={`bg-color7 ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Plans />
      </div>
    </div>
    <div className={`bg-color7 ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Billing />
      </div>
    </div>
    <div className={`bg-color7 ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <CardDeal />
      </div>
    </div>
    <div className={`bg-dimWhite ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Testimonials />
      </div>
    </div>
    <div className={`bg-color0 ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Clients />
      </div>
    </div>
    <div className="bg-color7">
      <div className={`${styles.boxWidth}`}>
        <Industries />
      </div>
    </div>

    <div className={`bg-dimWhite ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        {/* <CTA /> */}
        <Footer />
      </div>
    </div>

  </div>
);

export default App