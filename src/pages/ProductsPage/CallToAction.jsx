import Button from "@mui/material/Button";


import './CallToAction.scss'


function CallToAction() {
  return (
    <div className="product_page_call_to_action">
      <div className="heading">
        <h4>Ready to Take Your Startup to the Next Level?</h4>
      </div>
      <div className='call_to_action_btn'>
        <Button
          variant="outlined"
          sx={{
            border: "solid 1px #5C27C0",
            color: "#fff",
            borderRadius: "8px",
            width: "214px",
            height: "44px",
            background: "#5C27C0",
            fontSize: "12px !important",

            "&:hover": {
              background: "#fff",
              color: "#5C27C0",
              border: "solid 1px #5C27C0",
            },
          }}
        >
          Book My Demo Now
        </Button>
      </div>
    </div>
  )
}
export default CallToAction