// import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Colon from '../../assets/icons/LandingPageColon'

import './WhatOurCustomer.scss'

function WhatOurCustomerSay() {
  var settings = {
    prevArrow: false,
    nextArrow: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      }
    ],
  };

  return (
    <div className="product_page_what_our_customer_say">
      <div className="container">
        <div className="heading">
          <h4>Success Stories from Startup Founders Like You</h4>
        </div>
        <div className="slider">
          <Slider {...settings}>
            <div>
              <div className='slider_box'>
                <div className='upper_row'>
                  <Colon/>
                  <div className='description'>
                    <p><span>Rework AI &nbsp; </span>has completely transformed our hiring process. We now hire top talent in record time, saving both time and resources. The personalized questions and comprehensive evaluation reports have been invaluable in making informed hiring decisions.</p>
                  </div>
                </div>
                <div className='lower_row'>
                  <div className='name'>
                    <span>Jane Doe</span>
                  </div>
                  <div className='designation'>
                    <p>HR Manager, Acme Tech</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className='slider_box'>
                <div className='upper_row'>
                  <Colon/>
                  <div className='description'>
                    <p>Thanks to <span>Rework AI, &nbsp; </span> we’ve streamlined our recruitment efforts and found the perfect candidates for our team. The AI video interviews have made the screening process efficient, and the integration with our existing systems has been seamless.</p>
                  </div>
                </div>
                <div className='lower_row'>
                  <div className='name'>
                    <span>John Smith</span>
                  </div>
                  <div className='designation'>
                    <p>Talent Acquisition Lead, XYZ Solutions</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className='slider_box'>
                <div className='upper_row'>
                  <Colon/>
                  <div className='description'>
                    <p><span>Rework AI</span>'s &nbsp;  proctoring feature ensures ethical testing practices, giving us confidence in our hiring decisions. The platform's user-friendly interface and customizable options have made it a valuable asset to our recruitment strategy.</p>
                  </div>
                </div>
                <div className='lower_row'>
                  <div className='name'>
                    <span>Sarah Johnson</span>
                  </div>
                  <div className='designation'>
                    <p>Recruitment Specialist, Global Innovations </p>
                  </div>
                </div>
              </div>

            </div>
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default WhatOurCustomerSay