import "./Navigation.css";
import React, { useState, useEffect } from "react";
import { GitSVGIcon, LinkedinSVGIcon, PinterestSVGIcon } from "./NavigationSvg";

function Navigation(props) {
  return (
    <nav className="navigation-wrapper">
      <a className="navigation-link" href="#">
        <span className="navigation-link_circle"></span> GraphiqueGénie
      </a>
      <div className="navigation-logos-wrapper">
        <GitSVGIcon />
        <LinkedinSVGIcon />
        <PinterestSVGIcon />
      </div>
    </nav>
  );
}

export default Navigation;
