import React from "react";

import { SubHeading } from "../../components";
import { data, images } from "../../constants";
import "./Header.css";

const Header = () => {
  const labels = data.labels[data.language].header;

  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <SubHeading title={labels.sub_heading} />
        <h1 className="app__header-h1">{labels.title}</h1>
        <p className="p__black_opensans" style={{ margin: "2rem 0" }}>{labels.text}</p>
        <button type="button" className="custom__button">
          <a href="#menu">{labels.explore_menu}</a>
        </button>
      </div>
  
      <div className="app__wrapper_img">
        <img src={images.padoca_logo_jpeg} alt="header_img" />
      </div>
    </div>
  );
}

export default Header;
