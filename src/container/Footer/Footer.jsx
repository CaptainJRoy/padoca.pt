import React from "react";
import { FiFacebook, FiInstagram } from "react-icons/fi";

import { data, images } from "../../constants";
import "./Footer.css";

const Footer = () => {
  const labels = data.labels[data.language].footer;
  
  const openHours = [];
  labels.open_hours.forEach((openHour, index) => {
    openHours.push(<p className="p__black_opensans" key={openHour.days + `${index}`}>{openHour.days}</p>)
    openHours.push(<p className="p__black_opensans"key={openHour.hours + `${index}`}>{openHour.hours}</p>)
  });

  return (
    <div className="app__footer section__padding" id="login">
      <div className="app__footer-links">
        <div className="app__footer-links_contact">
          <h1 className="app__footer-headtext">{labels.contact_us}</h1>
          <p className="p__black_opensans">R. Pádua Correia 261, 4400-238</p>
          <p className="p__black_opensans">Vila Nova de Gaia</p>
          <p className="p__black_opensans">+351 22 244 1687</p>
          <img
            src={images.spoon}
            className="spoon__img"
            style={{ marginTop: 15 }}
            alt="spoon"
          />
          <p className="p__black_opensans">R. Escola de Vila Chã 114, 4405-555</p>
          <p className="p__black_opensans">Vila Nova de Gaia</p>
          <p className="p__black_opensans">+351 22 713 2466</p>
        </div>

        <div className="app__footer-links_logo">
          <img src={images.padoca_text} alt="footer_logo" />
          <p className="p__black_opensans"></p>
          <div className="app__footer-links_icons">
            <FiFacebook href="https://www.facebook.com/padocavngaia" />
            <FiInstagram href="https://www.instagram.com/padocaveganrestaurant/" />
          </div>
        </div>

        <div className="app__footer-links_work">
          <h1 className="app__footer-headtext">{labels.schedule}</h1>
          {openHours}
        </div>
      </div>

      <div className="footer__copyright">
        <p className="p__black_opensans">2023 Padoca. All Rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer;
