import React from "react";
import Div100vh from "react-div-100vh";

import { Dropdown, Input, Checkbox, Button } from "components/common";
import Footer from "components/layouts/footer";
import { Review } from "./components";

import "./Product.scss";

import Nintendo from "assets/img/nintendo.svg";
import Microsoft from "assets/img/microsoft.svg";
import Steam from "assets/img/steam.svg";
import Minions from "assets/img/minions.png";

import { CATEGORY } from "mock/category";

type Props = {};

const Products = (props: Props) => {
  return (
    <div className="product_page">
      {/* <h2>hello product</h2> */}
      <section className="scbanner">
        <div className="mainBanner">
          <div className="container">
            <div className="wrapper">
              <div className="mainBanner__content">
                <h2>GameLoft Game</h2>
                <Review category={CATEGORY} />

                <p className="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud itation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit... Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud itation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate velit...
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="store">
          <div className="container">
            <div className="wrapper">
              <h4>Download latest version</h4>
              <div className="downloads">
                <a className="downloads__item">
                  <img src={Nintendo} alt="" />
                </a>
                <div className="special">
                  <a className="downloads__item">
                    <img src={Microsoft} alt="" />
                  </a>
                  <a className="downloads__item">
                    <img src={Steam} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="scform">
        <div className="container">
          <div className="wrapper">
            <div className="minions">
              <div className="minions__wrapper">
                <img src={Minions} alt="" />
              </div>
            </div>
            <div className="form">
              <div className="head">
                <h3>Stay in the Know!</h3>
                <p>
                  Don't get left behind! <br /> Subscribe to our newsletters today!
                </p>
              </div>
              <div className="field-wrapper">
                <div className="field">
                  <div className="field__item">
                    <Input placeHolder="Name" />
                  </div>
                  <div className="field__item">
                    <Input placeHolder="Email" />
                  </div>
                  <div className="field__item">
                    <Dropdown placeHolder="Country" />
                  </div>
                  <div className="field__item">
                    <Dropdown placeHolder="Platform" />
                  </div>
                </div>
              </div>

              <div className="checkbox-wrapper">
                <Checkbox content="By signing up, I confirm that I am 13 years old or older. I agree to the Gameloft Terms and Conditions and I have read the Privacy Policy." />

                <Checkbox content="I agree to receive promotional offers relating to all Gameloft games and services." />
              </div>

              <div className="button-wrapper">
                <Button>Button</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
