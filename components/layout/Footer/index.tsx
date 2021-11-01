import Facebook from 'components/svg/Facebook'
import Instagram from 'components/svg/Instagram'
import LinkedIn from 'components/svg/LinkedIn'
import Twitter from 'components/svg/Twitter'
import Link from 'next/link'
import styles from './index.module.scss'
import Logo from 'components/svg/Logo'
import { CONTACTS } from 'types'
import SubscribeSection from 'components/SubscribeSection'
import Whatsapp from 'components/svg/Whatsapp'
import Telegram from 'components/svg/Telegram'


interface Props {
}

export default function Footer(props: Props) {

  const menu = [{label: 'About us', link: '#'},
  {label: 'Servises', link: '#'},
  {label: 'Portfolio', link: '#'},
  {label: 'Team', link: '#'},
]

const resources = [{label: 'Blog', link: '#'},
  {label: 'News', link: '#'},
  {label: 'Partnership', link: '#'},
  {label: 'Career', link: '#'},
]

const information = [{label: 'App', link: '#'},
  {label: 'Websites', link: '#'},
  {label: 'Partnership', link: '#'},
  {label: 'Career', link: '#'},
]

  return (
    <>
    <div className={styles.container}>
      <div className={styles.root}>
        <div className={styles.left}>
        <Link href="/">
        <a>
        <div className={styles.logo}>
          <Logo/>
          <div className={styles.titleLogo}>GLOBAL <br/>СOMMUNICATIONS</div>
        </div>
        </a>
        </Link>
          <div className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit. In aliquam ipsum, erat<br/> imperdiet cursus eget dapibus urna,<br/> fermentum. Ut malesuada lacus sed leo ac.
          </div>
          <div className={styles.phone}>
            <img src="/img/icons/phone.svg" alt=""/>
            <Link href={`tel:${CONTACTS.phone}`}><a
              className={styles.contacts}>{CONTACTS.phone}</a></Link>
          </div>
          <div className={styles.email}>
            <img src="/img/icons/email.svg" alt=""/>
            <Link href={`mailto:${CONTACTS.email}`}><a
              className={styles.contacts}>{CONTACTS.email}</a></Link>
          </div>
        </div>
        <div className={styles.menu}>
          <div className={styles.shop}>
            <div className={styles.head}>Menu</div>
            {menu.map(item => 
              <Link href={item.link}>
              <a className={styles.text}>
                {item.label}
              </a>
              </Link>
            )}
          </div>
          <div className={styles.shop}>
            <div className={styles.head}>Resources</div>
            {resources.map(item => 
              <Link href={item.link}>
              <a className={styles.text}>
                {item.label}
              </a>
              </Link>
            )}
          </div>
          <div className={styles.shop}>
            <div className={styles.head}>Information</div>
            {information.map(item => 
              <Link href={item.link}>
              <a className={styles.text}>
                {item.label}
              </a>
              </Link>
            )}
          </div>
          <div className={styles.right}>
            <div className={styles.head}>Connect with us:</div>
            <div className={styles.social}>
              <Link href={`${CONTACTS.whatsapp}`}>
                <a className={styles.icon} target="blank"><Whatsapp/></a>
              </Link>
              <Link href={`${CONTACTS.telegram}`}>
                <a className={styles.icon} target="blank"><Telegram/></a>
              </Link>
            </div>
            {/*<div className={styles.subscribe}>
              <div className={styles.head}>Subscribe</div>
              <SubscribeSection/>
            </div>*/}
          </div>
        </div>
      </div>
    </div>
    <div className={styles.copyright}>
      GLOBAL СOMMUNICATIONS 2022
    </div>
    </>
  )
}
