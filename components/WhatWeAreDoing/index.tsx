import Button from 'components/ui/Button'
import styles from './index.module.scss'

interface Props {}

export default function WhatWeAreDoing(props: Props) {

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.titleHead}>WHAT WE ARE DOING</div>
        <div className={styles.content}>
          <div className={styles.itemLeft}>
            <div className={styles.left}>
              <div className={styles.title}>Websites</div>
              <div className={styles.desc}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
              <Button size='small' variant='outlined' classNameRoot={styles.btn}>
                LEARN MORE
              </Button>
            </div>
            
            <div className={styles.right}>
              <img src='/img/WhatWeAreDoing/macbook.svg' alt=''/>
            </div>
          </div>
          <div className={styles.middle}>
            &amp;
          </div>
          <div className={styles.item}>
            <div className={styles.right}>
              <img src='/img/WhatWeAreDoing/iphone.svg' alt=''/>
            </div>
            <div className={styles.left}>
              <div className={styles.title}>Applications</div>
              <div className={styles.desc}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
              <Button size='small' variant='outlined' classNameRoot={styles.btn}>
                LEARN MORE
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
