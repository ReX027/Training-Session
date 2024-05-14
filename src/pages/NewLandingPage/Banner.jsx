import Button from '@mui/material/Button';
import groupImg from "../../assets/images/Group 48095371.png";
import RightArrow from '../../assets/icons/RightArrow'

import './Banner.scss'


function Banner() {
  return (
    <div className="banner_section">
      <div className="banner_section_left">
        <div className="heading">
          <h2>Welcome to Rework AI - Redefining Hiring with Artificial Intelligence</h2>
        </div>
        <div className='banner_section_left_btn'>
          <Button 
            variant="contained"
            sx={{
              width: "150px",
              height: "47px",
              background: "#5C27C0",
              borderRadius: "8px"
            }}
            >
              Book My Demo
            </Button>
            <Button 
            variant="contained"
            sx={{
              width: "150px",
              height: "47px",
              background: "#5C27C0",
              borderRadius: "8px",
              fontSize: "12px",
              textTransform: 'none',
              fontWeight: '400',
              marginLeft: "20px",

              '&:hover' : {
                background: '#fff',
                color: '#5C27C0',

                svg: {
                  path: {
                    fill: "#5C27C0"
                  }
                }
              },
            }}
            >
              Watch Video
              <RightArrow/>
            </Button>
        </div>
      </div>
      <div className="banner_section_right">
        <div className='banner_section_right_img'>
          <img src={groupImg} alt=""/>
        </div>
      </div>
    </div>
  )
}

export default Banner