import styles from './style'

import {
  Navbar, Hero, Stats, Business, Billing, CardDeal,
  Testimonials, Clients, Plans, CTA, Industries, Contact, FeatureNews, Footer,
  Comments
} from './components';
import { createBrowserRouter, Route, RouterProvider, Routes, } from "react-router-dom";
import Home from './pages/Home';

const App = () => (
  <div className='bg-dimWhite w-full overflow-hidden'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
<Routes>
  <Route path='/' element={<Home/>}/>

</Routes>
        

    <div className={`bg-dimWhite ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        {/* <CTA /> */}
        <Footer />
      </div>
    </div>

  </div>
);

export default App