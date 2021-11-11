import Layout from 'components/layout/Layout'
import { useState } from 'react'
import styles from './index.module.scss'
import cx from 'classnames'
import Button from 'components/ui/Button'
import InfiniteScroll from 'react-infinite-scroll-component'

interface IItem {
  title?: string
  web?: boolean
  app?: boolean
  crm?: boolean
  ad?: boolean
  desc?: string
  image?: string
}

interface Props{
  item: IItem
}



export default function ItemPortfolioPage(props: Props) {

  return (
      <div className={styles.root}>
        <div className={styles.image}>
          <img src={props.item.image} alt=''/>
        </div>
        <div className={styles.top}>
          <div className={styles.title}>{props.item.title}</div>
          <div className={cx(styles.types, {[styles.none]: !props.item.web && !props.item.app})}>
            {props.item.app && <div className={cx(styles.type, {[styles.app]: props.item.app})}>App</div>}
            {props.item.web && <div className={cx(styles.type, {[styles.web]: props.item.web})}>Web</div>}
          </div>
        </div>
        <div className={styles.desc}>
          {props.item.desc}
        </div>
      </div>
  )
}

