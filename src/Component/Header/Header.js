import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import './Header.css'
const Header = () => {
  return (
    <nav
      className="navbar navbar-expand-lg "
      style={{ backgroundColor: "black", color: "white" }}
    >
      <a
        className="navbar-brand"
        style={{ color: "white", fontWeight: "bold" }}
      >
        ZAMIL
      </a>
      <button
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul
          className="navbar-nav"
          style={{
            marginLeft: "auto",
            textAlign: "center",
            alignItems: "center",
            padding: "10px",
          }}
        >
          <li className="nav-item active dropdown">
            <div
              className="nav-link dropbtn"
              style={{
                color: "white !important",
                fontSize: "12px",
                fontWeight: "bold",
                borderBottom:'3px solid #0E9F95'
              }}
            >
              HOME <span className="sr-only" >(current)</span>
            </div>
            <div class="dropdown-content">
              <a>Link 1</a>
              <a>Link 2</a>
              <a>Link 3</a>
            </div>
          </li>
          <li className="nav-item active">
            <a
              className="nav-link"
              style={{
                color: "white !important",
                paddingLeft: "20px",
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              SERVICES <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item active">
            <a
              className="nav-link"
              style={{
                color: "white !important",
                paddingLeft: "20px",
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              WORKS <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item active">
            <a
              className="nav-link"
              style={{
                color: "white !important",
                paddingLeft: "20px",
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              ABOUT <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item active">
            <a
              className="nav-link"
              style={{
                color: "white !important",
                paddingLeft: "20px",
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              BLOG <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item active">
            <a
              className="nav-link"
              style={{
                color: "white !important",
                paddingLeft: "20px",
                paddingRight: "20px",
                fontSize: "12px",
                border: "2px solid #0E9F95",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              CONTACT <span className="sr-only">(current)</span>
            </a>
          </li>

          <div style={{ paddingLeft: "20px", fontSize: "12px" }}>
            <SearchIcon style={{ width: "20px", color: "#0E9F95" }} />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
