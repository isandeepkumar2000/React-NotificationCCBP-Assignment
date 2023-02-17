import React from "react";
import NxtwatchContext from "../../Contexts/NxtWatchContexts";
import { NavLink } from "react-router-dom";
import "./index.css";
import { AiFillHome, AiFillFire } from "react-icons/ai";
import { IoLogoGameControllerB } from "react-icons/io";
import { RiPlayListAddFill } from "react-icons/ri";
import { NavLinksContainer, NavLinkText } from "./styleComponents";

export type NavLinkType = {
  darkMode: boolean;
};

const NavLinkNxtwatch = () => {
  return (
    <NxtwatchContext.Consumer>
      {(value) => {
        const { isDarkMode } = value;
        return (
          <NavLinksContainer>
            <NavLink
              exact
              to="/Nxtwatch"
              activeClassName={`active-navlink ${
                isDarkMode ? "dark-active-navlink" : ""
              }`}
              className="nxtwatch-navlink"
            >
              <AiFillHome className="nxtwatch-navlink-icons" />
              <NavLinkText darkMode={isDarkMode}>Home</NavLinkText>
            </NavLink>
            <NavLink
              exact
              to="/Nxtwatch/trending"
              activeClassName={`active-navlink ${
                isDarkMode ? "dark-active-navlink" : ""
              }`}
              className="nxtwatch-navlink"
            >
              <AiFillFire className="nxtwatch-navlink-icons" />
              <NavLinkText darkMode={isDarkMode}>Trending</NavLinkText>
            </NavLink>
            <NavLink
              exact
              to="/Nxtwatch/gaming"
              activeClassName={`active-navlink ${
                isDarkMode ? "dark-active-navlink" : ""
              }`}
              className="nxtwatch-navlink"
            >
              <IoLogoGameControllerB className="nxtwatch-navlink-icons" />
              <NavLinkText darkMode={isDarkMode}>Gaming</NavLinkText>
            </NavLink>
            <NavLink
              exact
              to="/Nxtwatch/savedvideos"
              activeClassName={`active-navlink ${
                isDarkMode ? "dark-active-navlink" : ""
              }`}
              className="nxtwatch-navlink"
            >
              <RiPlayListAddFill className="nxtwatch-navlink-icons" />
              <NavLinkText darkMode={isDarkMode}>Saved Videos</NavLinkText>
            </NavLink>
          </NavLinksContainer>
        );
      }}
    </NxtwatchContext.Consumer>
  );
};

export default NavLinkNxtwatch;