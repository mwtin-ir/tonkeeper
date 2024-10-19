import React from 'react'
import EasyToUse from './EasyToUse'
import EasyCard from './EasyCard'

function MiddleMain() {
  return (
  <>
    <EasyToUse
    title="Easy to use"
    dec="Tonkeeper is the easiest self-custody wallet to pay toncoin and other
    tokens. Ton has low blockchain fees and fast transactions."
  >
    
        <EasyCard
          title="Receive"
          obj="Receive TON and other  tokens in one place"
          img="./images/img-1.png"
        />

        <EasyCard
          title="Pay"
          obj="Pay for services and goods within the wallet, or via QR code"
          img="./images/img-2.png"
        />


        <EasyCard
          title="Swap"
          obj="Receive TON and other tokens in one place"
          img="./images/img-3.png"
        />



  </EasyToUse>
  <EasyToUse
    title="Earn crypto"
    dec="Whether you get paid in tokens, or TON — you have plenty of options to store and manage your finances. Store money in the currencies you like, pay as you go and enjoy your personal financial freedom."
  >
    <EasyCard
      title="Payments"
      obj="In TON and other tokens"
      img="./images/img-4.png"
    />
    <EasyCard
      title="Subscriptions"
      obj="Manage subscriptions easily"
      img="./images/img-5.png"
    />
    <EasyCard
      title="Staking"
      obj="Earn up on your TONs"
      img="./images/img-6.png"
    />
    <EasyCard
      title="Buy, Sell"
      obj="Buy and sell tokens instantly"
      img="./images/img-7.png"
    />
 </EasyToUse>
 </>
  )
}

export default MiddleMain
