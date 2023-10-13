import styles from './style'

import {
  Navbar, Hero, Stats, Business, Billing, CardDeal,
  Testimonials, Clients, Plans, CTA, Industries, Contact, FeatureNews, Footer,
  Comments,
  ScrollToTop
} from './components';
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes, } from "react-router-dom";
import Home from './pages/Home';
import Contacts from './pages/Contacts';

const App = () => {
  return(
    // <BrowserRouter>
    // <Switch >

  <div className='bg-dimWhite w-full overflow-hidden'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    
<Routes>
{/* <ScrollToTop /> */}
  <Route exact path='/' element={<Home/>}/>
  <Route path='contact-us' element={<Contacts />}/>

</Routes>
        

    <div className={`bg-dimWhite ${styles.paddingX} ${styles.flexStart}`}>
      <div className={``}>
        {/* <CTA /> */}
        <Footer />
      </div>
    </div>

  </div>
  // </Switch>
  // </BrowserRouter>
)
  };

export default App