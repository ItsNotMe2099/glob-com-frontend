import Button from 'components/ui/Button'
import styles from './index.module.scss'

interface IPros {
  text: string
}

interface IItem {
  title: string
  image: string
  pros: IPros[]
  price: string,
  off: string
}

interface Props {
  item: IItem
}

export default function Package(props: Props) {

  return (
    <div className={styles.root}>
      <div className={styles.top}>
        <img src={props.item.image} alt=''/>
        <div className={styles.title}>{props.item.title}</div>
      </div>
      {props.item.pros.slice(0, 2).map(item =>
        <div className={styles.item}>
          <img src='/img/icons/vector.svg' alt=''/>
          <div className={styles.text}>{item.text}</div>
        </div>
      )}
      <div className={styles.separator}>
        <img src='/img/Packages/separator.svg' alt=''/>
      </div>
      {props.item.pros.slice(2, props.item.pros.length).map(item =>
        <div className={styles.item}>
          <img src='/img/icons/vector.svg' alt=''/>
          <div className={styles.text}>{item.text}</div>
        </div>
      )}
      <div className={styles.price}>
        From <span>{props.item.price}</span> {props.item.off && <div className={styles.off}>{props.item.off} OFF</div>}
      </div>
      <Button size='small' variant='outlined' classNameRoot={styles.btn}>
        {props.item.title === 'Website' ? <>ORDER WEBSITE</> : props.item.title === 'Application' ? <>ORDER APPLICATION</> : <>ORDER WEB + APP</>}
      </Button>
    </div>
  )
}
