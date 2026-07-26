'use client'

import React from 'react'
import '../../styles/home/Landing.css'
import Logos from './Logos'

import Aurora from '../background/Aurora'


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
        <Aurora
          colorStops={["#85c5ff", "#caffbf", "#ffb9ff"]}
          blend={0.5}
          amplitude={1.0}
          speed={1}
        />
      </div>

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