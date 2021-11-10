import ModalContactUs from 'components/Modals/ModalContactUs'
import Button from 'components/ui/Button'
import { useState } from 'react'
import styles from './index.module.scss'
import Item from './Item'

interface Props {}

export default function Workflow(props: Props) {

  const items = [
    {image: '/img/Workflow/iterations.svg', title: '2 weeks iterations', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    {image: '/img/Workflow/flexible.svg', title: 'Flexible adjastments', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    {image: '/img/Workflow/reports.svg', title: 'Detailed reports', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
  ]

  const [isModalContactUsOpen, setIsModalContactUsOpen] = useState(false)

  return (
    <>
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.title}>
          OUR WORK FLOW
        </div>
        <div className={styles.content}>
          {items.map((item, index) =>
            <Item item={item} index={index}/>
          )}
        </div>
        <div className={styles.bottom}>
          <div className={styles.titleBottom}>
            ARE YOU READY TO START YOUR PROJECT?
          </div>
          <Button size='normal' color='fill' classNameRoot={styles.btn} onClick={() => setIsModalContactUsOpen(true)}>CONTACT US</Button>
        </div>
      </div>
    </div>
    <div className={styles.clouds2}>
    <img src='/img/HowItWorks/clouds.svg' alt=''/>
    <ModalContactUs singlePage isOpen={isModalContactUsOpen} onRequestClose={() => setIsModalContactUsOpen(false)}/>
    </div>
    </>
  )
}
