'use client'

import React from 'react'
import '../../styles/home/Landing.css'
import TypewriterText from './TypewriterText'
import Aurora from '../background/Aurora'
import Orb from '../background/Orb'

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
  <Orb
    hoverIntensity={2}
    rotateOnHover
    hue={0}
    forceHoverState={false}
    backgroundColor="#000000"
/>
</div>
     </div>

      <div className="landing-content">

        <div className="box1">
          <h1 className='landing-title geo'>{content.titleGeo}</h1>
          <div className="buttons-container">
            <button className='button1'>კონსულტაცია</button>
            <button className='button2'>ნამუშევრები</button>
          </div>
        </div>

        <div className="box3">
       
        </div>

      </div>

    </div>
  )
}

export default Landing