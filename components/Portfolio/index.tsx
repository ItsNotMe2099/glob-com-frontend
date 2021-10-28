import Button from 'components/ui/Button'
import styles from './index.module.scss'
import PortfolioSlider from './Slider'

interface Props {}

export default function Portfolio(props: Props) {

  return (
    <>
    <div className={styles.clouds}>
        <img src='/img/Portfolio/clouds.svg' alt=''/>
      </div>
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.title}>
          PORTFOLIO OVERVIEW
        </div>
        <PortfolioSlider/>
        <div className={styles.bottom}>
          <div className={styles.title}>
            WANT TO SEE MORE OUR PROJECTS?
          </div>
          <Button size='normal' color='fill' classNameRoot={styles.btn}>VIEW ALL PROJECTS</Button>
        </div>
      </div>
    </div>
    <div className={styles.clouds2}>
      <img src='/img/Portfolio/clouds2.svg' alt=''/>
    </div>
    </>
  )
}
