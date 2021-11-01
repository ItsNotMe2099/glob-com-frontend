import Button from 'components/ui/Button'
import styles from './index.module.scss'
import ClientsSlider from './Slider'

interface Props {}

export default function Clients(props: Props) {

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.title}>
          OUR CLIENTS
        </div>
        <ClientsSlider/>
      </div>
      <div className={styles.clouds}>
      <img src='/img/Reviews/clouds.svg' alt=''/>
    </div>
    </div>
  )
}
