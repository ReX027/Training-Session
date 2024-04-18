import Header from './Header'
import Banner from './Banner'
import Testimonial from './Testimonial'
import ExperienceTheFeature from './ExperienceTheFeature'

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
    </div>
  )
}
export default LandingPage