import React from "react";

import { Nav} from "react-bootstrap";
import Facebook from "../Images/facebook.jpg";
import Youtube from "../Images/youtube.jpg";
import Spotify from "../Images/spotify.jpg";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <Nav className={classes.footer1}>
      
        
          <h1>The Genrics</h1>
          <span className={classes.img}>
            <a href="https://www.youtube.com/">
              <img src={Youtube} alt="youtube" width="25" height="25" />
            </a>
            <a href="https://open.spotify.com/">
              {" "}
              <img src={Spotify} alt="youtube" width="25" height="25" />
            </a>
            <a href="https://www.facebook.com/">
              <img src={Facebook} alt="youtube" width="25" height="25" />
            </a>{" "}
          </span>
        
      
    </Nav>
  );
};

export default Footer;
