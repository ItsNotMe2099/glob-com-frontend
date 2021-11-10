import styles from './index.module.scss'
import ReactModal from 'react-modal'
import Button from '../Button'
import Close from 'components/svg/Close'

interface Props {
  isOpen: boolean
  onRequestClose?: () => void
  size?: 'normal' | 'large' | 'medium' | 'stream'
  title?: string
  image?: string
  children?: any
  loading?: boolean
  className?: string
  closeClassName?: string
  center?: boolean
  singlePage?: boolean
}

export default function Modal(props: Props) {
  const customStyles = {
    overlay: {
      backgroundColor: !props.singlePage  ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.2)',
      display: 'flex',
      zIndex: '101',
    },
    content: {
      width: '100%',
      borderRadius: '21px',
      padding: '0',
      border: '0',
      margin: 'auto',
      position: 'static',
      inset: '0',
      overflow: 'hidden',
      background: 'none',
    },
  }

  const getSizeClass = (size) => {
    switch (size) {
      case 'stream':
        return styles.rootStream
      case 'large':
        return styles.rootLarge
      case 'medium':
        return styles.rootMedium
      case 'normal':
      default:
        return styles.rootNormal
    }
  }
  return (
    <ReactModal style={customStyles} isOpen={props.isOpen} onRequestClose={props.onRequestClose}>
      <div className={styles.frame}>
        <div className={styles.overlay} onClick={props.onRequestClose} />
        <div
          className={`${styles.root} ${getSizeClass(props.size)} ${props.className} ${
            props.center && styles.rootFlex
          }`}
        >
          {props.onRequestClose && (
            <div className={styles.close} onClick={props.onRequestClose}>
              <Close />
            </div>
          )}
          <div className={styles.center}>
            {props.image && !props.loading && (
              <div className={styles.image}>
                <img src={props.image} />
              </div>
            )}
            {props.title && !props.loading && <div className={styles.title}>{props.title}</div>}

            {props.children}
          </div>
        </div>
      </div>
    </ReactModal>
  )
}
Modal.defaultProps = {
  size: 'normal',
}
