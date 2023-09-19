import React from "react";
import styles from "../style";
import {
  Contact,
  Footer,
  Industries2,
  Integrationbanner,
  Integrationbenefit,
  Integrationscreen,
  Intservice,
  Navbar,
  Softwareintegrated,
  Testimonials,
  WhyUs,
} from "../components";

const Integration = () => (
  <div className="bg-dimWhite w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    <div className={`${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Integrationbanner />
      </div>
    </div>
    <div className={`bg-dimWhite ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Integrationscreen />
      </div>
    </div>
    <div className={`bg-color7 ${styles.paddingX} ${styles.flexStart}`}>
      <div className={``}>
        <Intservice />
      </div>
    </div>
    <div className={`bg-color0 ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <WhyUs />
      </div>
    </div>
    <div className={`bg-dimWhite ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Testimonials />
      </div>
    </div>
    <div className={`bg-dimWhite ${styles.paddingX} ${styles.flexStart}`}>
      <div className={``}>
        <Softwareintegrated />
      </div>
    </div>
    <div className={`bg-dimWhite ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Integrationbenefit />
      </div>
    </div>
    <div className={`bg-dimWhite`}>
      <div className={`${styles.boxWidth}`}>
        <Industries2 />
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
);

export default Integration;