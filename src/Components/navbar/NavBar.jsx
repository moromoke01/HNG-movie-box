import React from "react";
import { ArrowDropDown, Search } from "@mui/icons-material";
import { Notifications } from "@mui/icons-material";
import "./Navbar.scss";

const Navbar = () => {
 

  return (
    <div className="navbar">
      <div className="container">
        <div className="left">
          <img src="" alt="logo" />
          <span>Home</span>
          <span>Series</span>
          <span>Movies</span>
          
        </div>
        <div className="right">
          <Search className="icon" />
          
          <Notifications className="icon" />
          <img src="" alt="profile-avatar" />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
