import { useState } from 'react';
import NewReworkFullLogo from "../../assets/icons/NewReworkFullLogo";
import Button from "@mui/material/Button";
import DownArrowIcon from "../../assets/icons/DownArrowIcon";
import MenuIcon from '@mui/icons-material/Menu';

import "./Header.scss";

function Header() {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <>
    <section className="product_page_header">
      <div className="version">
        <p>The wait is over! Experience the website’s remarkable upgrade,<span>&nbsp; Version 2.0</span></p>
      </div>
      <div className="container">
        <div className="inner_lading_header">
          <div className="logo">
            <NewReworkFullLogo />
          </div>
          <div className="lading_header_right">
            <button className="menu_icon" onClick={() => setMenuVisible(!menuVisible)}>
              <MenuIcon />
            </button>
            <div className={`lading_header_right_inner ${menuVisible ? 'menu_active' : ''}`}>
              <nav className="navigation">
                <ul>
                  <li>
                    <a href="# ">Solutions
                      <DownArrowIcon/>
                    </a>
                  </li>
                  <li>
                    <a href="# ">Products
                      <DownArrowIcon/>
                    </a>
                  </li>
                  <li>
                    <a href="# ">Resources
                      <DownArrowIcon/>
                    </a>
                  </li>
                  <li>
                    <a href="# ">Integration
                      <DownArrowIcon/>
                    </a>
                  </li>
                  <li>
                    <a href="# ">Company
                      <DownArrowIcon/>
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="header_btn">
                <Button
                  variant="outlined"
                  sx={{
                    border: "solid 1px #5C27C0",
                    color: "#fff",
                    borderRadius: "2px",
                    width: "72px",
                    height: "34px",
                    background: "#5C27C0",
                    fontSize: "12px !important",
                    textTransform: "none !important",
                    fontWeight: "400 !important",

                    "&:hover": {
                      background: "#fff",
                      color: "#5C27C0",
                      border: "solid 1px #5C27C0",
                    },
                  }}
                >
                  Login
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    border: "solid 1px #5C27C0",
                    color: "#fff",
                    borderRadius: "2px",
                    width: "150px",
                    height: "34px",
                    background: "#5C27C0",
                    fontSize: "12px !important",
                    textTransform: "none !important",
                    fontWeight: "400 !important",

                    "&:hover": {
                      background: "#fff",
                      color: "#5C27C0",
                      border: "solid 1px #5C27C0",
                    },
                  }}
                >
                  Book Free Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Header;
