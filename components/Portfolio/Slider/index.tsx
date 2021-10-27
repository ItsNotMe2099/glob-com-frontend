import SliderControl from "components/ui/SliderControl";
import React, { Component } from "react";
import Slider from "react-slick";
import styles from './index.module.scss'
import Slide from "./Slide";

export default function PortfolioSlider() {

    const settings = {
      dots: true,
      arrows:true,
      nextArrow: <SliderControl direction="next"/>,
      prevArrow: <SliderControl direction="prev"/>,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: false,
      adaptiveHeight: false,
      dotsClass: `${styles.dots}`
    };

const slides = [{title: 'StarMoon project', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum duis orci sit massa lacus. Aliquam fames nisi, neque, amet amet sed quam amet nisl. Non donec dapibus aliquam nibh. Odio malesuada ultrices.',
web: '/img/Portfolio/web.png', app: '/img/Portfolio/app.png'}]

    return (
      <div className={styles.root}>
        <div className={styles.container}>
          <Slider {...settings}>
            {slides.map(item => <Slide item={item}/>)}
          </Slider>
        </div>
      </div>
    )
  }
