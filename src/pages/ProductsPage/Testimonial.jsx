import Colon from '../../assets/icons/LandingPageColon'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import './Testimonial.scss'

function Testimonial() {

  var settings = {
    dots: true,
    arrows: true,
    centerMode: true,
    centerPadding: '60px',
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
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
    <section className="product_page_testimonial">
      <div className='testimonial_inner'>
        <div className='heading'>
          <h1>Trusted by Leading Companies</h1>
          <p>Join the ranks of companies that have revolutionized their hiring process with AI Interview:</p>
        </div>
        <div className='slider_section'>
        <Slider {...settings}>
          <div>
            <div className='slider_col'>
              <div className='slider_box'>
                <Colon/>
                <p>Reduced time-to-hire by 50% and improved candidate quality with AI Interview.</p>
              </div>
            </div>
          </div>
          <div>
            <div className='slider_col'>
              <div className='slider_box'>
                <Colon/>
                <p>Reduced time-to-hire by 50% and improved candidate quality with AI Interview.</p>
              </div>
            </div>
          </div>
          <div>
            <div className='slider_col'>
              <div className='slider_box'>
                <Colon/>
                <p>Reduced time-to-hire by 50% and improved candidate quality with AI Interview.</p>
              </div>
            </div>
          </div>
          <div>
            <div className='slider_col'>
              <div className='slider_box'>
                <Colon/>
                <p>Reduced time-to-hire by 50% and improved candidate quality with AI Interview.</p>
              </div>
            </div>
          </div>
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default Testimonial