import ArrowNext from 'components/svg/ArrowNext'
import ArrowPrev from 'components/svg/ArrowPrev'
import styles from './index.module.scss'
import cx from 'classnames'

interface Props {
  direction: 'next' | 'prev'
  onClick?: (e: any) => void
  light?: boolean
  position?: boolean
}



export default function SliderControl(props: Props) {

  const getClassName = () => {
    return (
      `${props.direction === 'prev' && styles.prev} ${props.direction === 'next' && styles.next}`
    )
  }

  return (
    <div className={cx(getClassName(), {[styles.position]: props.position})} onClick={props.onClick}>
      <div className={cx(styles.wrapper, {[styles.light]: props.light})}>{props.direction === 'next' ? <ArrowNext/> : <ArrowPrev/>}</div>
    </div>
  )
}
