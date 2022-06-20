import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
// import FrontCover from '../components/frontCover/frontCover'
import dynamic from 'next/dynamic'
const DynamicComponentWithNoSSR = dynamic(() => import('../components/frontCover/frontCover'), {
  ssr: false
})

export default function Home() {
  return (
    <>
    <Head>
      <title>MeloScout</title>
      <meta property="og:type" content="website" />
      <meta property="og:title" content="MeloScout" />
      <meta property="og:image" content="/public/main.png"></meta>
      <meta property="og:description" content="888 MeloScout appearing in the metaverse. A collection by Letron App that gathers music creativity."></meta>
    </Head>
    <DynamicComponentWithNoSSR />
    </>
  )
}
