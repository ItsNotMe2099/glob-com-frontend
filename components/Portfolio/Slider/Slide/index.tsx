import SliderControl from 'components/ui/SliderControl'
import { useState } from 'react'
import styles from './index.module.scss'

interface IItem {
  title: string
  web?: string
  app?: string
  desc: string
}

interface Props{
  item: IItem
  onPrev?: () => void
  onNext?: () => void
}

export default function Slide(props: Props) {

    const bool = props.item.web ? false : true

    const [isApp, setIsApp] = useState(bool)

    return (
      <div className={styles.root}>
        <div className={styles.left}>
          <div className={styles.container}>
          <div className={styles.switches}>
            {props.item.web && 
            <div className={styles.switchGreen} onClick={() => isApp ? setIsApp(false) : null}>
             Website
            </div>}
            {props.item.app &&
            <div className={styles.switchPink} onClick={() => !isApp ? setIsApp(true) : null}>
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
            <SliderControl direction='prev' onClick={props.onPrev}/>
            <SliderControl direction='next' onClick={props.onNext}/>
          </div>
          </div>
        </div>
        <div className={styles.image} style={isApp ? {backgroundImage: `url(${props.item.app})`} : {backgroundImage: `url(${props.item.web})`}}>
        </div>
      </div>
    )
  }
