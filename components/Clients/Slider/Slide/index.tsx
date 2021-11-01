import SliderControl from 'components/ui/SliderControl'
import { useState } from 'react'
import styles from './index.module.scss'

interface IUser {
  name: string
  avatar: string
}

interface IItem {
  site: string
  web?: any
  app?: any
  desc: string
  review: string
  image: string
  user: IUser
}

interface Props{
  item: IItem
}

export default function Slide(props: Props) {

    return (
      <div className={styles.root}>
        <div className={styles.image}>
          <img src={props.item.image} alt=''/>
        </div>
        <div className={styles.top}>
          <div className={styles.site}>{props.item.site}</div>
          <div className={styles.tags}>
          {props.item.app && <div className={styles.app}>App</div>}
          {props.item.web && <div className={styles.web}>Website</div>}
          </div>
        </div>
        <div className={styles.desc}>
          {props.item.desc}
        </div>
        <div className={styles.review}>
          {props.item.review}
        </div>
        <div className={styles.user}>
          <div className={styles.avatar}>
            <img src={props.item.user.avatar} alt=''/>
          </div>
          <div className={styles.name}>{props.item.user.name}</div>
        </div>
      </div>
    )
  }
