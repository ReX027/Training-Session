import Header from './Header'
import Banner from './Banner'
import Testimonial from './Testimonial'
import ExperienceTheFeature from './ExperienceTheFeature'
import WhyChooseRework from './WhyChooseRework'
import WhatOurCustomerSay from './WhatOurCustomer'
import FrequentlyAskedQuestions from './FrequentlyAskedQues'
import CallToAction from './CallToAction'
import Footer from './Footer'

import './style.scss'


function LandingPage() {
  return (
    <div className='landing_page'> 
      <Header/>
      <div className='container'>
        <Banner/>
      </div>
      <Testimonial/>
      <div className='container'>
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
      </div>
    </div>
  )
}
export default LandingPage