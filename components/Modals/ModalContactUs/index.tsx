import styles from './index.module.scss'
import Modal from '../../ui/Modal'
import Button from 'components/ui/Button'
import { CONTACTS } from 'types'
import Telegram from 'components/svg/Telegram'
import Whatsapp from 'components/svg/Whatsapp'


interface Props {
  isOpen: boolean
  onRequestClose?: () => void
  singlePage?: boolean
}

export default function ModalContactUs(props: Props) {


  return (
    <Modal {...props}>
      <div className={styles.title}>
        LETS CHAT AND TALK ABOUT YOUR PROJECT
      </div>
      <div className={styles.wrapper}>
        <div className={styles.separator}></div>
      </div>
      <div className={styles.messengers}>
        <Button classNameRoot={styles.telegram} href={`${CONTACTS.telegram}`}><Telegram/>Telegram</Button>
        <Button classNameRoot={styles.whatsapp} href={`${CONTACTS.whatsapp}`}><Whatsapp/>Whatsapp</Button>
      </div>
    </Modal>
  )
}
