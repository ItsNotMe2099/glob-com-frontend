import { useState } from 'react'
import styles from './index.module.scss'

interface IItem {
  title: string
  web: string
  app: string
  desc: string
}

interface Props{
  item: IItem
}

export default function Slide(props: Props) {

    const [isApp, setIsApp] = useState(false)

    return (
      <div className={styles.root}>
        <div className={styles.left}>
          <div className={styles.switches}>
            <div className={styles.switchGreen} onClick={() => isApp ? setIsApp(false) : null}>
             Website
            </div>
            <div className={styles.switchPink} onClick={() => !isApp ? setIsApp(true) : null}>
              APP
            </div>
          </div>
          <div className={styles.title}>
            {props.item.title}
          </div>
          <div className={styles.desc}>
            {props.item.desc}
          </div>
        </div>
        <div className={styles.image}>
          <img src={isApp ? props.item.app : props.item.web} alt=''/>
        </div>
      </div>
    )
  }
