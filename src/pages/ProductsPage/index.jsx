import Header from './Header'
import Banner from './Banner'
import Testimonial from './Testimonial'
import ExperienceTheFeature from './ExperienceTheFeature'
import WhyChooseRework from './WhyChooseRework'
import WhatOurCustomerSay from './WhatOurCustomer'
import CallToAction from './CallToAction'
import Footer from './Footer'


import './style.scss'


function ProductsPage() {
  return (
    <div className='product_page'> 
      <Header/>
      <div className='container'>
        <Banner/>
      </div>
      <Testimonial/>
      <div className='container'>
        <ExperienceTheFeature/>
      </div>
      <div className='container'>
        <WhyChooseRework/>
      </div>
      <div className='container'>
        <WhatOurCustomerSay/>
      </div>
      <CallToAction/>
      <div className='container'>
        <Footer/>
      </div>
    </div>
  )
}
export default ProductsPage