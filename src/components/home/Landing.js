'use client'

import React from 'react'
import '../../styles/home/Landing.css'
import Logos from './Logos'

import Aurora from '../background/Aurora'
import FloatingLines from '../background/FloatingLines'
import Beams from '../background/Beams'
import Lightfall from '../background/Lightfall'


const content = {
  titleGeo: 'ჩვენ საუკეთესო ვებსაიტებს ვქმნით',
  titleEng: 'We create the best websites',
  descriptionGeo: [
    'ვქმნით ძლიერ ონლაინ იმიჯს ბიზნესებისთვის.',
    'ვაქცევთ იდეებს ციფრულ პროდუქტებად.',
    'თქვენი კმაყოფილება ჩვენს წარმატებას განაპირობებს.'
  ],
  descriptionEng: [
    'We build strong online identities for businesses.',
    'We transform ideas into digital products.',
    'Your satisfaction is the foundation of our success.'
  ]
}

function Landing() {
  return (
    <div className='landing-container'>

      <div className="orb-bg">
       <div style={{ width: '100%', height: '100%', position: 'relative' }}>
  <Lightfall
    colors={['#000000', '#000000', '#1c9aa5']}
    backgroundColor="#000000"
    speed={0.5}
    streakCount={2}
    streakWidth={1}
    streakLength={1}
    glow={1}
    density={0.6}
    twinkle={1}
    zoom={3}
    backgroundGlow={0.5}
    opacity={1}
    mouseInteraction
    mouseStrength={0.5}
    mouseRadius={1}
    color1="#A6C8FF"
    color2="#5227FF"
    color3="#FF9FFC"
/>
</div></div>
      <div className="landing-content">

        <div className="box1">
          <h1 className='landing-title geo'>{content.titleGeo}</h1>
          <p className="landing-description geo">{content.descriptionGeo[0]}</p>
          <div className="buttons-container">
            <button className='button1'>კონსულტაცია</button>
            <button className='button2'>ნამუშევრები</button>
          </div>
        </div>

        <div className="logos">
          <Logos />
        </div>

      </div>

    </div>
  )
}

export default Landing