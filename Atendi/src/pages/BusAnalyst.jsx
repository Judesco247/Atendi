import React from "react";
import styles from "../style";
import {
  AnalysisServices,
  BuiltBus,
  BusAnalysis,
  BusProcess,
  BusServices,
  Busbanner,
  Certification,
  Contact,
  Footer,
  Industries2,
  Navbar,
  Testimonials,
  Toolest,
  WhyUs,
} from "../components";

const BusAnalyst = () => (
  <div className="bg-dimWhite w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    <div className={`${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Busbanner />
      </div>
    </div>
    <div className={`bg-dimWhite ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <BusAnalysis />
      </div>
    </div>
    <div className={`bg-color7 ${styles.paddingX} ${styles.flexStart}`}>
      <div className={``}>
        <Certification />
      </div>
    </div>
    <div className={`bg-color7 ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <AnalysisServices />
      </div>
    </div>
    <div className={`bg-dimWhite ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Testimonials />
      </div>
    </div>
    <div className={`bg-dimWhite ${styles.paddingX} ${styles.flexStart}`}>
      <div className={``}>
        <Toolest />
      </div>
    </div>
    <div className={`bg-color7 ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <BuiltBus />
      </div>
    </div>
    <div className={`bg-color0 ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <WhyUs />
      </div>
    </div>
    <div className={`bg-dimWhite ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <BusProcess />
      </div>
    </div>
    <div className={`bg-dimWhite ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <BusServices />
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

export default BusAnalyst;
