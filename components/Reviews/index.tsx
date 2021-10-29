import Button from 'components/ui/Button'
import styles from './index.module.scss'
import ReviewsSlider from './Slider'

interface Props {}

export default function Reviews(props: Props) {

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.title}>
          REVIEWS
        </div>
        <ReviewsSlider/>
      </div>
      <div className={styles.clouds}>
      <img src='/img/Reviews/clouds.svg' alt=''/>
    </div>
    </div>
  )
}
