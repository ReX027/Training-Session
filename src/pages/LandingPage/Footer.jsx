import Button from "@mui/material/Button";
import Facebook from '../../assets/icons/FacebookIcon'
import LinkedIn from '../../assets/icons/LinkedInIcon'
import Instagram from '../../assets/icons/InstagramIcon'
import Youtube from '../../assets/icons/YoutubeIcon'
import Twitter from '../../assets/icons/TwitterIcon'

import './Footer.scss'

function Footer() {
  return (
    <footer className='footer'>
      <div className='inner_footer'>
        <div className="upper_row">
          <div className='footer_col width'>
            <h3>Services</h3>
            <nav className='navigation'>
              <ul>
                <li>
                  <a href='# '>AI Interviewing</a>
                </li>
                <li>
                  <a href='# '>JD Creation & Parsing</a>
                </li>
                <li>
                  <a href='# '>Bulk Screening</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className='footer_col width'>
            <h3>Browse</h3>
            <nav className='navigation'>
              <ul>
                <li>
                  <a href='# '>Solutions</a>
                </li>
                <li>
                  <a href='# '>Products</a>
                </li>
                <li>
                  <a href='# '>Resources</a>
                </li>
                <li>
                  <a href='# '>Integration</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className='footer_col width'>
            <h3>Learn</h3>
            <nav className='navigation'>
              <ul>
                <li>
                  <a href='# '>Blogs</a>
                </li>
                <li>
                  <a href='# '>Webinars</a>
                </li>
                <li>
                  <a href='# '>Customer Stories</a>
                </li>
                <li>
                  <a href='# '>Survey Reports</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className='footer_col width'>
            <h3>Company</h3>
            <nav className='navigation'>
              <ul>
                <li>
                  <a href='# '>About us</a>
                </li>
                <li>
                  <a href='# '>Careers</a>
                </li>
                <li>
                  <a href='# '>Terms & Privacy</a>
                </li>
                <li>
                  <a href='# '>Invest in us</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className='footer_col input_section'>
            <h3>Subscribe & Get Notified</h3>
            <nav className='navigation'>
              <ul>
                <li>
                  <input type='text' placeholder='Your Email'/>
                </li>
                <li>
                  <Button
                    variant="outlined"
                    sx={{
                      border: "solid 1px #5C27C0",
                      color: "#fff",
                      borderRadius: "5px",
                      width: "98px",
                      height: "28px",
                      background: "#5C27C0",
                      fontSize: "14px !important",
                      textTransform: "none !important",
                      fontWeight: "400",

                      "&:hover": {
                        background: "#fff",
                        color: "#5C27C0",
                        border: "solid 1px #fff",
                      },
                    }}
                  >
                    Subscribe
                  </Button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="social_contact">
          <div className="social">
            <Facebook/>
          </div>
          <div className="social">
            <LinkedIn/>
          </div>
          <div className="social">
            <Instagram/>
          </div>
          <div className="social">
            <Youtube/>
          </div>
          <div className="social">
            <Twitter/>
          </div>
        </div>
      </div>
      <div className="white_line"></div>
      <div className="copyright_section">
        <div className="copyright">
          <span>Rework AI</span>
        </div>
        <div className="copyright">
          <span>&copy; Copyright</span>
        </div>
        <div className="copyright">
          <span>All rights reserved</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer