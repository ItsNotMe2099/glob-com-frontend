import SliderControl from "components/ui/SliderControl";
import React, { Component, useState } from "react";
import Slider from "react-slick";
import styles from './index.module.scss'
import Slide from "./Slide";

interface Props {
  slider?: any
}

export default function PortfolioSlider(props: Props) {

  const [currentIndex, setCurrentIndex] = useState(0)

  let { slider } = props;

    const settings = {
      arrows:false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: false,
      adaptiveHeight: false,
      beforeChange: (current, next) => setCurrentIndex(next),
    };

const slides = [{title: 'StarMoon project', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum duis orci sit massa lacus. Aliquam fames nisi, neque, amet amet sed quam amet nisl. Non donec dapibus aliquam nibh. Odio malesuada ultrices.',
image: '/img/Portfolio/app.svg', web: true, app: true},
{title: 'StarMoon project', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum duis orci sit massa lacus. Aliquam fames nisi, neque, amet amet sed quam amet nisl. Non donec dapibus aliquam nibh. Odio malesuada ultrices.',
image: '/img/Portfolio/app.svg', web: true, app: false},
{title: 'StarMoon project', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum duis orci sit massa lacus. Aliquam fames nisi, neque, amet amet sed quam amet nisl. Non donec dapibus aliquam nibh. Odio malesuada ultrices.',
image: '/img/Portfolio/web.svg', web: false, app: true}]

    return (
      <div className={styles.root}>
        <div className={styles.container}>
          <Slider {...settings} ref={slider1 => (slider = slider1)}>
            {slides.map(item => <Slide item={item} onNext={() => slider.slickGoTo(currentIndex + 1)}
             onPrev={() => slider.slickGoTo(currentIndex - 1)}/>)}
          </Slider>
        </div>
      </div>
    )
  }
