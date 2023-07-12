import React from "react";

import { SubHeading, MenuItem } from "../../components";
import { data, images } from "../../constants";
import "./SpecialMenu.css";


const SpecialMenu = () => {
  const labels = data.labels[data.language].menu;

  return (
    <div className="app__specialMenu flex__center section__padding" id="menu">
      <div className="app__specialMenu-title">
        <SubHeading title={labels.sub_heading} />
        <h1 className="headtext__cormorant_white">{labels.description}</h1>
      </div>

      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_food  flex__center">
          <p className="app__specialMenu-menu_heading">{labels.food}</p>
          <div className="app__specialMenu_menu_items">
            {data.food.map((wine, index) => (
              <MenuItem
                key={wine.title + index}
                title={wine.title}
                price={wine.price}
                tags={wine.tags[data.language]}
              />
            ))}
          </div>
        </div>

        <div className="app__specialMenu-menu_img">
          <img src={images.menu} alt="menu__img" />
        </div>

        <div className="app__specialMenu-menu_cocktails  flex__center">
          <p className="app__specialMenu-menu_heading">{labels.drinks}</p>
          <div className="app__specialMenu_menu_items">
            {data.drinks.map((cocktail, index) => (
              <MenuItem
                key={cocktail.title + index}
                title={cocktail.title}
                price={cocktail.price}
                tags={cocktail.tags[data.language]}
              />
            ))}
          </div>
        </div>
      </div>

      <div style={{ marginTop: 15 }}>
        <button type="button" className="custom__button">
          View More
        </button>
      </div>
    </div>
  )
};

export default SpecialMenu;
