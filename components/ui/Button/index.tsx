import styles from './index.module.scss'
import Link from 'next/link'
import cx from 'classnames'
interface Props {
  children?: React.ReactNode
  variant?: 'outlined' 
  color?: 'fill'
  size?: 'small' | 'normal' | 'large'
  fluid?: boolean
  href?: string
  target?: string
  className?: string
  classNameRoot?: string
  type?: 'submit' | 'reset' | 'button'
  blank?: boolean
  image?: string
  wrapper?: boolean
  onClick?: (e: any) => void

}

export default function Button(props: Props) {

  const getClassName = () => {
    return {
      [styles.sizeSmall]: props.size === 'small',
      [styles.sizeNormal]: props.size === 'normal',
      [styles.sizeLarge]: props.size === 'large',
      [styles.variantOutlined]: props.variant === 'outlined',
      [styles.fill]: props.color === 'fill',
      [styles.fluid]: props.fluid,
    }
  }
  return (
  <div className={cx(props.classNameRoot, {[styles.wrapper]: props.wrapper})}>
  {props.href ? (
    <Link href={props.href}>
      <a
        onClick={props.onClick}
        href={props.href}
        target={props.target}
        className={cx(styles.link, getClassName(), props.className)}
      >
        {props.image ? <img src={props.image} alt=""/> : props.children}
      </a>
    </Link>
  ) : (
    <button
      type={props.type}
      onClick={props.onClick}
      className={cx(styles.btn, getClassName(), props.className)}
    >
      {props.image ? <img src={props.image} alt=""/> : props.children}
    </button>
)}</div>)
}

Button.defaultProps = {
  type: 'button',
  target: '',
}
