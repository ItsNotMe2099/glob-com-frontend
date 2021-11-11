import Layout from 'components/layout/Layout'
import { useState } from 'react'
import styles from './index.module.scss'
import cx from 'classnames'
import Button from 'components/ui/Button'
import InfiniteScroll from 'react-infinite-scroll-component'
import ItemPortfolioPage from 'components/ItemPortfolioPage'



export default function PortfolioPage(props) {

  const switches = [
    {text: 'ALL'}, {text: 'Applications'}, {text: 'Websites'}, {text: 'CRM'}, {text: 'Advertising'},
  ]

  const [type, setType] = useState('ALL')

  const renderSwitch = () => {
    return (
      <>
      {switches.map(item => 
      <div className={cx(styles.switch, {[styles.switchActive]: type === item.text})} onClick={() => setType(item.text)}>
        {item.text}
      </div>)
      }
      </>
    )
  }


  const items = [
    {title: 'StarMoon project', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum duis orci sit massa lacus. Aliquam fames nisi, neque, amet amet sed quam amet nisl. Non donec dapibus aliquam nibh. Odio malesuada ultrices.',
    image: '/img/PortfolioPage/image.png', web: true, app: true, crm: false, ad: false},
    {title: 'StarMoon project', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum duis orci sit massa lacus. Aliquam fames nisi, neque, amet amet sed quam amet nisl. Non donec dapibus aliquam nibh. Odio malesuada ultrices.',
    image: '/img/PortfolioPage/image.png', web: true, app: false, crm: false, ad: false},
    {title: 'StarMoon project', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum duis orci sit massa lacus. Aliquam fames nisi, neque, amet amet sed quam amet nisl. Non donec dapibus aliquam nibh. Odio malesuada ultrices.',
    image: '/img/PortfolioPage/image.png', web: false, app: true, crm: false, ad: false},
    {title: 'StarMoon project', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum duis orci sit massa lacus. Aliquam fames nisi, neque, amet amet sed quam amet nisl. Non donec dapibus aliquam nibh. Odio malesuada ultrices.',
    image: '/img/PortfolioPage/image.png', web: false, app: false, crm: true, ad: false},
    {title: 'StarMoon project', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum duis orci sit massa lacus. Aliquam fames nisi, neque, amet amet sed quam amet nisl. Non donec dapibus aliquam nibh. Odio malesuada ultrices.',
    image: '/img/PortfolioPage/image.png', web: false, app: false, crm: false, ad: true},
    {title: 'StarMoon project', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum duis orci sit massa lacus. Aliquam fames nisi, neque, amet amet sed quam amet nisl. Non donec dapibus aliquam nibh. Odio malesuada ultrices.',
    image: '/img/PortfolioPage/image.png', web: false, app: false, crm: true, ad: false}
  ]

  const renderType = (item) => {
    switch(type) {
      case 'ALL':
        return(
          <ItemPortfolioPage item={item}/>
        )
      case 'Applications':
        return(
          <>
          {item.app && <ItemPortfolioPage item={item}/>}
          </>
        )
      case 'Websites':
        return(
          <>
          {item.web && <ItemPortfolioPage item={item}/>}
          </>
        )
      case 'CRM':
        return(
          <>
          {item.crm && <ItemPortfolioPage item={item}/>}
          </>
        )
      case 'Advertising':
        return(
          <>
          {item.ad && <ItemPortfolioPage item={item}/>}
          </>
        )
    }
  }

  const handleScrollNext = () => {

  }

  return (
      <Layout>
        <div className={styles.root}>
          <div className={styles.container}>
            <div className={styles.top}>
              <div className={styles.title}>PORTFOLIO</div>
              <div className={styles.switches}>
                {renderSwitch()}
              </div>
            </div>
            <InfiniteScroll
              dataLength={items.length} //This is important field to render the next data
              next={handleScrollNext}
              className={styles.items}
              hasMore={true}
              loader={<div/>}
            >
              {items.map(item => 
               renderType(item)
              )}
            </InfiniteScroll>
            <div className={styles.bottom}>
              <div className={styles.titleBottom}>
                ARE YOU READY TO START YOUR PROJECT?
              </div>
              <Button size='normal' color='fill' classNameRoot={styles.btn}>CONTACT US</Button>
            </div>
          </div>
        </div>
        <div className={styles.clouds2}>
          <img src='/img/Portfolio/clouds2.svg' alt=''/>
        </div>
      </Layout>
  )
}

