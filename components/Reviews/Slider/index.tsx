import SliderControl from "components/ui/SliderControl";
import React, { Component, useState } from "react";
import Slider from "react-slick";
import styles from './index.module.scss'
import Slide from "./Slide";
import cx from 'classnames'

interface Props {
  slider?: any
}

export default function ReviewsSlider(props: Props) {

  let { slider } = props;

  const slides = [
    {site: 'StarMoon', web: true, app: null, desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis volutpat congue dolor lacus orci.',
  review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh auctor sed at varius. Aliquam euismod luctus sed mattis pretium et lacus. Luctus quisque eu justo, purus. Bibendum proin malesuada dolor arcu, pharetra ac vestibulum massa. Quisque egestas id arcu accumsan eget eu. ',
  image: '/img/Reviews/cover.jpg', user: {name: 'Mark Smith', avatar: '/img/Reviews/cover.jpg'}},
  {site: 'StarMoon', web: true, app: true, desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis volutpat congue dolor lacus orci.',
  review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh auctor sed at varius. Aliquam euismod luctus sed mattis pretium et lacus. Luctus quisque eu justo, purus. Bibendum proin malesuada dolor arcu, pharetra ac vestibulum massa. Quisque egestas id arcu accumsan eget eu. ',
  image: '/img/Reviews/cover.jpg', user: {name: 'Mark Smith', avatar: '/img/Reviews/cover.jpg'}},
  {site: 'StarMoon', web: null, app: true, desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis volutpat congue dolor lacus orci.',
  review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh auctor sed at varius. Aliquam euismod luctus sed mattis pretium et lacus. Luctus quisque eu justo, purus. Bibendum proin malesuada dolor arcu, pharetra ac vestibulum massa. Quisque egestas id arcu accumsan eget eu. ',
  image: '/img/Reviews/cover.jpg', user: {name: 'Mark Smith', avatar: '/img/Reviews/cover.jpg'}},
  {site: 'StarMoon222', web: null, app: true, desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis volutpat congue dolor lacus orci.',
  review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh auctor sed at varius. Aliquam euismod luctus sed mattis pretium et lacus. Luctus quisque eu justo, purus. Bibendum proin malesuada dolor arcu, pharetra ac vestibulum massa. Quisque egestas id arcu accumsan eget eu. ',
  image: '/img/Reviews/cover.jpg', user: {name: 'Mark Smith', avatar: '/img/Reviews/cover.jpg'}}
  
  ]

    const settings = {
      arrows:true,
      infinite: true,
      speed: 500,
      slidesToShow: slides.length >= 3 ? 3 : slides.length,
      slidesToScroll: 1,
      variableWidth: false,
      adaptiveHeight: false,
      nextArrow: <SliderControl direction="next" light position/>,
      prevArrow: <SliderControl direction="prev" light position/>,
      className: `${styles.slider}`,
      responsive: [
        {
          breakpoint: 1210,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 450,
          settings: {
            slidesToShow: 1,
            arrows: false
          }
        },
      ]
    };

    return (
      <div className={cx(styles.root, {[styles.less]: slides.length < 3})}>
          <Slider {...settings} ref={slider1 => (slider = slider1)}>
            {slides.map(item => <Slide item={item}/>)}
          </Slider>
      </div>
    )
  }
