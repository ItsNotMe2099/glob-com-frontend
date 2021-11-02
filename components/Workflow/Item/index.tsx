import Button from 'components/ui/Button'
import styles from './index.module.scss'
import cx from 'classnames'

interface IItem {
  image: string
  title: string
  desc: string
}

interface Props {
  item: IItem
  index?: number
}

export default function Item(props: Props) {

  const isInteger = (num) => {
    return (num ^ 0) === num;
  }

  const isEven = isInteger((props.index + 1) / 2)

  return (
    <div className={cx(styles.root, {[styles.even]: isEven})}>
      <div className={styles.image}>
        <div className={cx(styles.clouds, {[styles.none]: isEven})}>
          <img src='/img/Workflow/clouds.svg' alt=''/>
        </div>
        <div className={cx(styles.clouds3, {[styles.none]: !isEven})}>
          <img src='/img/Workflow/clouds3.svg' alt=''/>
        </div>
        <img className={styles.user} src={props.item.image} alt=''/>
        <div className={cx(styles.clouds2, {[styles.none]: isEven})}>
          <img src='/img/Workflow/clouds2.svg' alt=''/>
        </div>
        <div className={cx(styles.clouds4, {[styles.none]: !isEven})}>
          <img src='/img/Workflow/clouds4.svg' alt=''/>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.title}>
          {props.item.title}
        </div>
        <div className={styles.desc}>
          {props.item.desc}
        </div>
      </div>
    </div>
  )
}
