import React, {useEffect} from 'react';
import Head from 'next/head'

import Navigation from "../components/Navigation"
import HeroIntro from "../components/HeroIntro"
import AboutFoundation from "../components/AboutFoundation"
import FoundationAttribute from "../components/FoundationAttribute"

export default function Home() {

  useEffect(() => {
    if (typeof window.ethereum !== 'undefined') {
      alert("Welcome to !Vitriol /n You have MetaMask installed, legoooo!!!!!!!!!!!!!")
  } else {
          alert("Welcome to !Vitriol /n This is a mere web3 simulator, i call it web2.5 .... You can go ahead without MetaMask")
}
  }, [])
  
  const DonateFunction = async () => {
    ethereum.request({ method: "eth_requestAccounts" });
  }

  return (
    < >
      <Head>
        <title>!Vitriol - Anti-Vitriol Humanitarian Charity Hub</title>
        <meta name="description" content="!Vitriol - Anti-Vitriol Humanitarian Charity Hub" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation Donate={DonateFunction }/>
      <HeroIntro Donate={DonateFunction }/>
      <AboutFoundation/>
     <FoundationAttribute/>
    </>
  )
}
