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
          <Beams
            beamWidth={3}
            beamHeight={30}
            beamNumber={20}
            lightColor="#ffffff"
            speed={2}
            noiseIntensity={1.75}
            scale={0.2}
            rotation={30}
          />
        </div></div>
      <div className="landing-content">

        <div className="box1">
          <h1 className='landing-title geo'>{content.titleGeo}</h1>
          <p className="landing-description geo">{content.descriptionGeo[0]}</p>
          <div className="buttons-container">
            <a href="tel:+995575755712" className='button1' style={{ textDecoration: 'none' }}>კონსულტაცია</a>
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