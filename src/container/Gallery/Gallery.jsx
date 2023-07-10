import React from "react";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";

import { SubHeading } from "../../components";
import { data, images } from "../../constants";
import "./Gallery.css";

const Gallery = () => {
  const scrollRef = React.useRef(null);
  const labels = data.labels[data.language].gallery;

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">{labels.title}</h1>
        <p className="p__white_opensans"
          style={{ color: "#AAAAAA", marginTop: "2rem" }} >
          {labels.description}
        </p>
        <button type="button" className="custom__button" onClick={() => window.open('https://www.instagram.com/padocaveganrestaurant/')}>
          {labels.see_more}
        </button>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {[
            {image: images.gallery01, url: 'https://www.instagram.com/p/CtUJIjjsiVi/'},
            {image: images.gallery02, url: 'https://www.instagram.com/p/CsToRVGs5CD/'},
            {image: images.gallery03, url: 'https://www.instagram.com/p/Cr3oRxgIcg0/'},
            {image: images.gallery04, url: 'https://www.instagram.com/p/CrAycU5MLWP/'}
          ].map((imageObj, index) => (
            <a href={imageObj.url} key={`gallery_image-${index + 1}`} >
              <div className="app__gallery-images_card flex__center" >
                <img src={imageObj.image} alt="gallery_image" />
                <BsInstagram className="gallery__image-icon" />
              </div>
            </a>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
