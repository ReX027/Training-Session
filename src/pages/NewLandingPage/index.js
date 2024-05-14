import Header from './Header'
import Banner from './Banner.jsx'
import Testimonial from './Testimonial.jsx'
import Experience from './Experience.jsx'

import './style.scss'


function NewLandingPage() {
  return (
      <div className='landing_page'> 
        <Header/>
      <div className='container'>
        <Banner/>
      </div>
      <Testimonial/>
      <Experience/>
      {/* <div className='container'>
        <ExperienceTheFeature/>
      </div>
      <WhyChooseRework/>
      <WhatOurCustomerSay/>
      <div className='container'>
      <FrequentlyAskedQuestions/>
      </div>
      <CallToAction/>
      <div className='container'>
        <Footer/>
      </div> */}
    </div>
  )
}

export default NewLandingPage;