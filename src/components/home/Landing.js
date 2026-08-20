'use client'

import React from 'react'
import { useLocale } from 'next-intl'
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
  ],
  buttonsGeo: ['კონსულტაცია', 'ნამუშევრები'],
  buttonsEng: ['Consultation', 'Our Work']
}

function Landing() {
  const locale = useLocale()
  const isGeo = locale === 'ka'

  const title = isGeo ? content.titleGeo : content.titleEng
  const description = isGeo ? content.descriptionGeo[0] : content.descriptionEng[0]
  const [button1, button2] = isGeo ? content.buttonsGeo : content.buttonsEng

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
          <h1 className={`landing-title ${isGeo ? 'geo' : 'eng'}`}>{title}</h1>
          <p className={`landing-description ${isGeo ? 'geo' : 'eng'}`}>{description}</p>
          <div className="buttons-container">
            <a href="tel:+995575755712" className='button1' style={{ textDecoration: 'none' }}>{button1}</a>
            <button className='button2'>{button2}</button>
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