import slackLogo from '../../assets/images/Slack_RGB.png' 
import Marquee from "react-fast-marquee";
import dropBox from '../../assets/images/dropbox.svg.png'

import './Testimonial.scss'

function Testimonial() {
  return (
    <section className="testimonial">
      <Marquee
        autoFill={true}
        gradient={true}
      >
        <div className='testimonial_inner'>
          <div className="testimonial_img">
            <img src={slackLogo} alt=''/>
          </div>
          <div className="testimonial_img">
            <img src={dropBox} alt=''/>
          </div>
          <div className="testimonial_img">
            <img src={slackLogo} alt=''/>
          </div>
          <div className="testimonial_img">
            <img src={dropBox} alt=''/>
          </div>
          <div className="testimonial_img">
            <img src={slackLogo} alt=''/>
          </div>
          <div className="testimonial_img">
            <img src={dropBox} alt=''/>
          </div>
          <div className="testimonial_img">
            <img src={slackLogo} alt=''/>
          </div>
          <div className="testimonial_img">
            <img src={dropBox} alt=''/>
          </div>
        </div>
      </Marquee>
    </section>
  )
}

export default Testimonial