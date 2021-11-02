import SliderControl from "components/ui/SliderControl";
import React, { Component, useState } from "react";
import Slider from "react-slick";
import styles from './index.module.scss'

interface Props {
  slider?: any
}

export default function ClientsSlider(props: Props) {

  let { slider } = props;

  const slides = [
    {image: '/img/Clients/1.svg'}, {image: '/img/Clients/6.svg'}, 
    {image: '/img/Clients/11.svg'}, {image: '/img/Clients/16.svg'},
    {image: '/img/Clients/2.svg'}, {image: '/img/Clients/7.svg'},
    {image: '/img/Clients/12.svg'}, {image: '/img/Clients/17.svg'},
    {image: '/img/Clients/3.svg'}, {image: '/img/Clients/8.svg'},
    {image: '/img/Clients/13.svg'}, {image: '/img/Clients/18.svg'},
    {image: '/img/Clients/4.svg'}, {image: '/img/Clients/9.svg'},
    {image: '/img/Clients/14.svg'}, {image: '/img/Clients/19.svg'},
    {image: '/img/Clients/5.svg'}, {image: '/img/Clients/10.svg'},
    {image: '/img/Clients/15.svg'}
  ]

    const settings = {
      arrows:false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      rows: 4,
      variableWidth: false,
      adaptiveHeight: false,
      nextArrow: <SliderControl direction="next" light position/>,
      prevArrow: <SliderControl direction="prev" light position/>,
      className: `${styles.slider}`,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
          }
        },
      ]
    };

    return (
      <div className={styles.root}>
          <Slider {...settings} ref={slider1 => (slider = slider1)}>
            {slides.map(item => <div className={styles.slide}> <img src={item.image} alt=''/></div>)}
          </Slider>
      </div>
    )
  }
