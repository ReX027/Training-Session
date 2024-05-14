import solutionImg from "../../assets/images/solution_banner.png";
import Button from "@mui/material/Button";
import RightArrow from '../../assets/icons/RightArrow'

import "./Banner.scss";

function Banner() {
  return (
    <section className="solution_page_banner">
      <div className="landing_banner_left">
        <div className="left_text">
          <h1>
            Transform Your Startup’s Hiring Process with Rework AI
          </h1>
          <span>Revolutionize Talent Acquisition for Your Startup’s Success.</span>
        </div>
        <div className="left_btn">
          <Button
            variant="outlined"
            sx={{
              border: "solid 1px #5C27C0",
              color: "#fff",
              borderRadius: "8px",
              width: "160px",
              height: "50px",
              background: "#5C27C0",
              fontSize: "12px !important",
              textTransform: "none !important",

              "&:hover": {
                background: "#fff",
                color: "#5C27C0",
                border: "solid 1px #fff",
              },
            }}
          >
            Book My Demo
          </Button>
          <Button
            variant="outlined"
            sx={{
              border: "solid 1px #5C27C0",
              color: "#fff",
              borderRadius: "8px",
              width: "160px",
              height: "50px",
              background: "#5C27C0",
              fontSize: "12px !important",
              marginLeft: "10px",
              textTransform: "none !important",

              "&:hover": {
                background: "#fff",
                color: "#5C27C0",
                border: "solid 1px #fff",
              },
            }}
          >
            Watch video
            <RightArrow/>
          </Button>
        </div>
      </div>
      <div className="landing_banner_right">
        <img src={solutionImg} alt="" />
      </div>
    </section>
  );
}
export default Banner;
