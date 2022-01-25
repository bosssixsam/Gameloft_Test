import React from "react";

import Lang from "components/lang";

import "./Footer.scss";

import Logo from "assets/img/logo_white.svg";
import { ReactComponent as FB } from "assets/img/icons/fb_icon.svg";
import { ReactComponent as Linkedin } from "assets/img/icons/linkedin_icon.svg";
import { ReactComponent as Twitter } from "assets/img/icons/twitter_icon.svg";
import { ReactComponent as Youtube } from "assets/img/icons/youtube_icon.svg";

interface IFooter {}

const Footer = (props: IFooter) => {
  return (
    <footer>
      <div className="mainfooter">
        <div className="follow_mobile">
          <div className="container">
            <h4>Follow us</h4>
            <div className="wrapper">
              <div className="tag-wrapper">
                <div className="tag">
                  <a href="">
                    <FB />
                  </a>
                </div>
                <div className="tag">
                  <a href="">
                    <Linkedin />
                  </a>
                </div>
                <div className="tag">
                  <a href="">
                    <Twitter />
                  </a>
                </div>
                <div className="tag">
                  <a href="">
                    <Youtube />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="wrapper">
            <div className="info">
              <div className="logo-wrapper">
                <img src={Logo} alt="" />
              </div>
              <div className="follow">
                <h3>Follow Us</h3>
                <div className="icons-wrapper">
                  <div className="icon">
                    <FB />
                  </div>
                  <div className="icon">
                    <Linkedin />
                  </div>
                  <div className="icon">
                    <Twitter />
                  </div>
                  <div className="icon">
                    <Youtube />
                  </div>
                </div>

                <div className="lang-wrapper">
                  <Lang />
                </div>
              </div>
            </div>
            <div className="sights-wrapper">
              <div className="sights">
                <div className="sights__item">
                  <h3>Visit</h3>
                  <div className="url-wrapper">
                    <div className="url">
                      <a href="">Gameloft games</a>
                    </div>
                    <div className="url">
                      <a href="">Gameloft careers</a>
                    </div>
                    <div className="url">
                      <a href="">Gameloft news</a>
                    </div>
                    <div className="url">
                      <a href="">Gameloft forum</a>
                    </div>
                    <div className="url">
                      <a href="">Gameloft advertising</a>
                    </div>
                    <div className="url">
                      <a href="">Gameloft suppoprt</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sights">
                <div className="sights__item">
                  <h3>Legal</h3>
                  <div className="url-wrapper">
                    <div className="url">
                      <a className="--nocap" href="">
                        Terms of Use
                      </a>
                    </div>
                    <div className="url">
                      <a href="">Privacy policy</a>
                    </div>
                    <div className="url">
                      <a href="">Cookie policy</a>
                    </div>
                    <div className="url">
                      <a className="--upper" href="">
                        EULA
                      </a>
                    </div>
                    <div className="url">
                      <a href="">Legal notices</a>
                    </div>
                    <div className="url">
                      <a href="">Event rules</a>
                    </div>
                    <div className="url">
                      <a href="">Bussiness contacts</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rights">
        <div className="container">
          <div className="wrapper">
            <p>
              ©2020 Gameloft. All rights reserved. Gameloft and the Gameloft logo are trademarks of Gameloft in the U.S.
              and/or other countries. <br /> All other trademarks are the property of their respective owners.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
