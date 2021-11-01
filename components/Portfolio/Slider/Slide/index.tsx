import SliderControl from 'components/ui/SliderControl'
import { useState } from 'react'
import styles from './index.module.scss'

interface IItem {
  title: string
  web?: boolean
  app?: boolean
  desc: string
  image: string
}

interface Props{
  item: IItem
  onPrev?: () => void
  onNext?: () => void
}

export default function Slide(props: Props) {

    return (
      <div className={styles.root}>
        <div className={styles.left}>
          <div className={styles.container}>
          <div className={styles.switches}>
            {props.item.web && 
            <div className={styles.switchGreen}>
             Website
            </div>}
            {props.item.app &&
            <div className={styles.switchPink}>
              APP
            </div>}
          </div>
          <div className={styles.title}>
            {props.item.title}
          </div>
          <div className={styles.desc}>
            {props.item.desc}
          </div>
          <div className={styles.controls}>
            <SliderControl direction='prev' onClick={props.onPrev} style={{marginRight: '28px'}}/>
            <SliderControl direction='next' onClick={props.onNext}/>
          </div>
          </div>
        </div>
        <div className={styles.image}>
          <img src={props.item.image} alt=''/>
        </div>
      </div>
    )
  }
