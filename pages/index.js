import React, { useEffect } from 'react';
// import { ethers } from "ethers"
import Head from 'next/head'

import HeroIntro from "../components/HeroIntro"
import AboutFoundation from "../components/AboutFoundation"
import FoundationAttribute from "../components/FoundationAttribute"

export default function Home() {

// const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"
// const provider = new ethers.providers.Web3Provider(window.ethereum)
// const signer = provider.getSigner()
    
 // The Contract object
// const Contract = new ethers.Contract(contractAddress, ABI, signer);

  useEffect(() => {
    if (typeof window.ethereum !== 'undefined') {
      alert("Welcome to !Vitriol, blyncnov says \n \n You have MetaMask installed, legoooo!!!!!!!!!!!!! 😘😘")

  const ConnectWallet = async () => {
    ethereum.request({ method: "eth_requestAccounts" });
  }
      ConnectWallet()
        .catch(console.error)
      
  } else {
      alert("Welcome to !Vitriol, blyncnov says \n \n This is a mere web3 simulator, i call it web2.5 😂😂😂😂 .... You can go ahead without MetaMask")
    }
  }, [])

  return (
    < >
      <Head>
        <title>!Vitriol - Anti-Vitriol Humanitarian Charity Hub</title>
        <meta name="description" content="!Vitriol - Anti-Vitriol Humanitarian Charity Hub" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroIntro />
      <AboutFoundation/>
      <FoundationAttribute />
    </>
  )
}
