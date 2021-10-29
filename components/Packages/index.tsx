import Button from 'components/ui/Button'
import styles from './index.module.scss'
import Package from './Package'

interface Props {}

export default function Packages(props: Props) {

  const packages = [
    {title: 'Website', image: '/img/icons/web.svg', pros: [
      {text: 'Desktop version'}, {text: 'Mobile version'}, {text: 'Unlimited revisions'},
      {text: 'Personal manager'}, {text: 'Post sale support'}], 
      price: '$5,000', off: null
    },
    {title: 'Application', image: '/img/icons/app.svg', pros: [
      {text: 'Apple store'}, {text: 'Play market'}, {text: 'Unlimited revisions'},
      {text: 'Personal manager'}, {text: 'Post sale support'}], 
      price: '$5,000', off: null
    },
    {title: 'App + Web', image: '/img/icons/app&web.svg', pros: [
      {text: 'Website'}, {text: 'Application'}, {text: 'Unlimited revisions'},
      {text: 'Personal manager'}, {text: 'Post sale support'}], 
      price: '$10,000', off: '15%'
    }
  ]

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.title}>OUR PACKAGES</div>
        <div className={styles.variants}>
          {packages.map(item => 
            <Package item={item}/>
          )}
        </div>
      </div>
    </div>
  )
}
