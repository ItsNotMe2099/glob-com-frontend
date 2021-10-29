import Layout from 'components/layout/Layout'
import Packages from 'components/Packages'
import Portfolio from 'components/Portfolio'
import styles from './index.module.scss'



export default function Home(props) {
  return (
      <Layout>
        <Portfolio/>
        <Packages/>
      </Layout>
  )
}

