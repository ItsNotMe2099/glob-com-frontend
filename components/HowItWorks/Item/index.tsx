import Button from 'components/ui/Button'
import styles from './index.module.scss'

interface Props {
  image: string
  title: string
  desc: string
}

export default function Item(props: Props) {

  return (
    <div className={styles.root}>
      <div className={styles.image}>
        <img src={props.image} alt=''/>
      </div>
      <div className={styles.title}>{props.title}</div>
      <div className={styles.desc}>{props.desc}</div>
    </div>
  )
}
