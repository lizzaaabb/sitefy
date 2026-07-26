'use client'

import React from 'react'
import '../../styles/home/Landing.css'
import TypewriterText from './TypewriterText'
import Pillar from '../../components/background/Pillar'

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
        <Pillar
          topColor="#5227FF"
          bottomColor="#FF9FFC"
          intensity={1}
          rotationSpeed={0.3}
          glowAmount={0.002}
          pillarWidth={3}
          pillarHeight={0.4}
          noiseIntensity={0.5}
          pillarRotation={25}
          interactive={false}
          mixBlendMode="screen"
          quality="high"
        />
      </div>

      <div className="landing-content">

        <div className="box1">
          <h1 className='landing-title geo'>{content.titleGeo}</h1>
          <div className="buttons-container">
            <button className='button1'>გუნდთან კონსულტაცია</button>
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