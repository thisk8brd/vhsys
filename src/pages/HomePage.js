import React from 'react';

// COMPONENTS
import Hero from './../components/hero/Hero';
import Services from './../components/services/Services';
import Promo from './../components/Promo';
import Solutions from './../components/Solutions';
import PromoGradient from './../components/PromoGradient';
import Prices from './../components/Prices';

import Gap from './../components/common/Gap';

function HomePage (props) {
  return (
    <div className="main">
      <Hero/>
      <Services/>
      <Promo/>
      <Solutions/>
      <Gap height='10rem'/>
      <PromoGradient/>
      <Prices/>
    </div>
  )
}

export default HomePage;