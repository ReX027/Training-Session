import Button from "@mui/material/Button";

import './WhyChooseRework.scss'


function WhyChooseRework() {
  return (
    <div className="why_choose_rework_page">
      <div className='container'>
        <div className="heading">
          <h4>Why choose Rework AI ?</h4>
        </div>
        <div className='main_content'>
          <div className='left_col'>
            <div className='title'>
              <h4>Cost Efficient</h4>
            </div>
            <div className='description'>
              <p>Minimize hiring costs with our streamlined process, optimizing resource allocation for maximum efficiency.</p>
            </div>
            <div className='left_col_btn'>
              <Button
                variant="outlined"
                sx={{
                  border: "solid 1px #5C27C0",
                  color: "#fff",
                  borderRadius: "8px",
                  width: "144px",
                  height: "44px",
                  background: "#5C27C0",
                  fontSize: "12px !important",

                  "&:hover": {
                    background: "#fff",
                    color: "#5C27C0",
                    border: "solid 1px #fff",
                  },
                }}
              >
                Book Demo
              </Button>
            </div>
          </div>
          <div className='right_col'>
            <div className="upper_row">
              <div className='title'>
                <h4>Hire Smarter</h4>
              </div>
              <div className='description'>
                <p>Make informed decisions with detailed candidate insights, leading to higher retention rates and better team alignment.</p>
              </div>
              <div className='left_col_btn'>
                <Button
                  variant="outlined"
                  sx={{
                    border: "solid 1px #5C27C0",
                    color: "#fff",
                    borderRadius: "8px",
                    width: "144px",
                    height: "44px",
                    background: "#5C27C0",
                    fontSize: "12px !important",

                    "&:hover": {
                      background: "#fff",
                      color: "#5C27C0",
                      border: "solid 1px #fff",
                    },
                  }}
                >
                  Book Demo
                </Button>
              </div>
            </div>
            <div className="lower_row">
            <div className="lower_left_col">
              <div className='title'>
                <h4>Reduce Turnaround Time</h4>
              </div>
              <div className='description'>
                <p>Cut hiring time by 80% enabling faster onboarding and time-to-market for your projects.</p>
              </div>
              <div className='left_col_btn'>
                <Button
                  variant="outlined"
                  sx={{
                    border: "solid 1px #5C27C0",
                    color: "#fff",
                    borderRadius: "8px",
                    width: "144px",
                    height: "44px",
                    background: "#5C27C0",
                    fontSize: "12px !important",

                    "&:hover": {
                      background: "#fff",
                      color: "#5C27C0",
                      border: "solid 1px #fff",
                    },
                  }}
                >
                  Book Demo
                </Button>
              </div>
            </div>
              <div className="lower_right_col">
              <div className='title'>
                <h4>Save Bandwidth</h4>
              </div>
              <div className='description'>
                <p>Free up valuable resources for core tasks by automating repetitive hiring processes.</p>
              </div>
              <div className='left_col_btn'>
                <Button
                  variant="outlined"
                  sx={{
                    border: "solid 1px #5C27C0",
                    color: "#fff",
                    borderRadius: "8px",
                    width: "144px",
                    height: "44px",
                    background: "#5C27C0",
                    fontSize: "12px !important",

                    "&:hover": {
                      background: "#fff",
                      color: "#5C27C0",
                      border: "solid 1px #fff",
                    },
                  }}
                >
                  Book Demo
                </Button>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyChooseRework