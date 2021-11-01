import Button from 'components/ui/Button'
import styles from './index.module.scss'
import cx from 'classnames'

interface Props {
  image: string
  title: string
  desc: string
  large?: boolean
}

export default function Item(props: Props) {

  return (
    <div className={styles.root}>
      <div className={cx(styles.image, {[styles.large]: props.large})}>
        <img src={props.image} alt=''/>
      </div>
      <div className={cx(styles.title, {[styles.titleAlt]: props.large})}>{props.title}</div>
      <div className={cx(styles.desc, {[styles.descAlt]: props.large})}>{props.desc}</div>
    </div>
  )
}
