import styles from './index.module.scss'
import PortfolioSlider from './Slider'

interface Props {}

export default function Portfolio(props: Props) {

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.title}>
          PORTFOLIO OVERVIEW
        </div>
        <PortfolioSlider/>
      </div>
    </div>
  )
}
