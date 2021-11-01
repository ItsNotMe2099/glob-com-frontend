import HowItWorks from 'components/HowItWorks'
import Layout from 'components/layout/Layout'
import Packages from 'components/Packages'
import Portfolio from 'components/Portfolio'
import Reviews from 'components/Reviews'
import WhatWeAreDoing from 'components/WhatWeAreDoing'
import styles from './index.module.scss'



export default function Home(props) {
  return (
      <Layout>
        <Portfolio/>
        <WhatWeAreDoing/>
        <Reviews/>
        <HowItWorks/>
      </Layout>
  )
}

