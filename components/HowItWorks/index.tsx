import Button from 'components/ui/Button'
import styles from './index.module.scss'
import Item from './Item'

interface Props {}

export default function HowItWorks(props: Props) {

  return (
    <>
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.title}>
          HOW IT WORKS
        </div>
        <div className={styles.content}>
          <Item image='/img/HowItWorks/calendar.svg' title='Estimates' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'/>
          <div className={styles.line}>
            <img src='/img/HowItWorks/arrow.svg' alt=''/>
          </div>
          <Item image='/img/HowItWorks/concept.svg' title='Concept' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'/>
          <div className={styles.line}>
            <img className={styles.img} src='/img/HowItWorks/arrow.svg' alt=''/>
          </div>
          <Item image='/img/HowItWorks/Prototype.svg' title='Prototype' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'/>
          <div className={styles.line2}>
            <img src='/img/HowItWorks/arrow2.svg' alt=''/>
          </div>
        </div>
        <div className={styles.contentBottom}>
          <Item image='/img/HowItWorks/development.svg' title='Development' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'/>
          <div className={styles.line}>
            <img src='/img/HowItWorks/arrow.svg' alt=''/>
          </div>
          <Item image='/img/HowItWorks/testing.svg' title='Testing' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'/>
          <div className={styles.line}>
            <img src='/img/HowItWorks/arrow.svg' alt=''/>
          </div>
          <Item image='/img/HowItWorks/lunch.svg' title='Lunch' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'/>
        </div>
        <div className={styles.bottom}>
          <div className={styles.titleBottom}>
            ARE YOU READY TO START YOUR PROJECT?
          </div>
          <Button size='normal' color='fill' classNameRoot={styles.btn}>CONTACT US</Button>
        </div>
      </div>
    </div>
    <div className={styles.clouds2}>
    <img src='/img/HowItWorks/clouds.svg' alt=''/>
    </div>
    </>
  )
}
