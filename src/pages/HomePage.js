import React from 'react';

// COMPONENTS
import Hero from './../components/hero/Hero';
import Services from './../components/services/Services';

function HomePage (props) {
  return (
    <div className="main">
      <Hero/>
      <Services/>
    </div>
  )
}

export default HomePage;