import Head from 'next/head'

import Navigation from "../components/Navigation"
import HeroIntro from "../components/HeroIntro"
import AboutFoundation from "../components/AboutFoundation"

export default function Home() {
  return (
    < >
      <Head>
        <title>!Vitriol - Anti-Vitriol Humanitarian Charity Hub</title>
        <meta name="description" content="!Vitriol - Anti-Vitriol Humanitarian Charity Hub" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />
      <HeroIntro />
      <AboutFoundation/>
      <h1>lorem</h1> lorem ipsum dolor sit amet, consectetur adip
    </>
  )
}
