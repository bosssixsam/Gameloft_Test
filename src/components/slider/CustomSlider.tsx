import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "./CustomSlider.scss";

import Share from "assets/img/icons/share.svg";

type Props = {};

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

const CustomSlider = (props: Props) => {
  const [screen, setScreen] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setScreen(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    // return () => window.removeEventListener("resize", handleResize);
  }, []);

  // console.log("adfasfd", screen);

  return (
    <div className="event-carousel">
      <Swiper
        spaceBetween={30}
        slidesPerView={screen.width >= 1200 ? 5 : screen.width > 768 ? 3 : 1}
        centeredSlides={true}
        loop={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="promotioncard">
            <div className="base">
              <div className="gradient">
                <h4 className="title">Short Title Here</h4>
              </div>
            </div>
            <div className="review">
              <div className="review__content">
                <h4>Short Title Here</h4>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                  labore et dolore ...
                </p>
                <div className="icon-link">
                  <a href="">
                    <img src={Share} alt="" />
                  </a>
                </div>
              </div>
              <div className="btn-wrapper">
                <button className="white-btn">read more</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="promotioncard">
            <div className="base">
              <div className="gradient">
                <h4 className="title">Short Title Here</h4>
              </div>
            </div>
            <div className="review">
              <div className="review__content">
                <h4>Short Title Here</h4>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                  labore et dolore ...
                </p>
                <div className="icon-link">
                  <a href="">
                    <img src={Share} alt="" />
                  </a>
                </div>
              </div>
              <div className="btn-wrapper">
                <button className="white-btn">read more</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="promotioncard">
            <div className="base">
              <div className="gradient">
                <h4 className="title">Short Title Here</h4>
              </div>
            </div>
            <div className="review">
              <div className="review__content">
                <h4>Short Title Here</h4>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                  labore et dolore ...
                </p>
                <div className="icon-link">
                  <a href="">
                    <img src={Share} alt="" />
                  </a>
                </div>
              </div>
              <div className="btn-wrapper">
                <button className="white-btn">read more</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="promotioncard">
            <div className="base">
              <div className="gradient">
                <h4 className="title">Short Title Here</h4>
              </div>
            </div>
            <div className="review">
              <div className="review__content">
                <h4>Short Title Here</h4>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                  labore et dolore ...
                </p>
                <div className="icon-link">
                  <a href="">
                    <img src={Share} alt="" />
                  </a>
                </div>
              </div>
              <div className="btn-wrapper">
                <button className="white-btn">read more</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="promotioncard">
            <div className="base">
              <div className="gradient">
                <h4 className="title">Short Title Here</h4>
              </div>
            </div>
            <div className="review">
              <div className="review__content">
                <h4>Short Title Here</h4>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                  labore et dolore ...
                </p>
                <div className="icon-link">
                  <a href="">
                    <img src={Share} alt="" />
                  </a>
                </div>
              </div>
              <div className="btn-wrapper">
                <button className="white-btn">read more</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CustomSlider;
