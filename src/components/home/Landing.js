'use client'

import React from 'react'
import '../../styles/home/Landing.css'
import TypewriterText from './TypewriterText'
import Pillar from '../../components/background/Pillar'
import Galaxy from '../../components/background/Galaxy'

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
  <Galaxy 
    mouseRepulsion
    mouseInteraction
    density={1}
    glowIntensity={0.3}
    saturation={0}
    hueShift={140}
    twinkleIntensity={0.3}
    rotationSpeed={0.1}
    repulsionStrength={2}
    autoCenterRepulsion={0}
    starSpeed={0.5}
    speed={1}
/>
</div> </div>

      <div className="landing-content">

        <div className="box1">
          <h1 className='landing-title geo'>{content.titleGeo}</h1>
          <div className="buttons-container">
            <button className='button1'>კონსულტაცია</button>
            <button className='button2'>ნამუშევრები</button>
          </div>
        </div>

        <div className="box3">
          <TypewriterText
            staticLine={content.descriptionGeo[0]}
            cyclingLines={content.descriptionGeo.slice(1)}
          />
        </div>

      </div>

    </div>
  )
}

export default Landing