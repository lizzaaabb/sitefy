'use client'

import React from 'react'
import { useLocale } from 'next-intl'
import '../../styles/home/Landing.css'
import Logos from './Logos'

import Beams from '../background/Beams'

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
  buttonsEng: ['Consultation', 'Our Work'],
  partnerGeo: 'GOTHEM-ის ოფიციალური პარტნიორი',
  partnerEng: 'Official GOTHEM Partner'
}

function Landing() {
  const locale = useLocale()
  const isGeo = locale === 'ka'

  const title = isGeo ? content.titleGeo : content.titleEng
  const description = isGeo ? content.descriptionGeo[0] : content.descriptionEng[0]
  const [button1, button2] = isGeo ? content.buttonsGeo : content.buttonsEng
  const partner = isGeo ? content.partnerGeo : content.partnerEng

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
        </div>
      </div>
      <div className="landing-content">

        <div className="box1">
          <h1 className={`landing-title ${isGeo ? 'geo' : 'eng'}`}>{title}</h1>
          <p className={`landing-description ${isGeo ? 'geo' : 'eng'}`}>{description}</p>
          <div className="buttons-container">
            <a href="tel:+995575755712" className={`button1 ${isGeo ? 'geo' : 'eng'}`} style={{ textDecoration: 'none' }}>{button1}</a>
            <button className={`button2 ${isGeo ? 'geo' : 'eng'}`}>{button2}</button>
          </div>
          <p className={`landing-partner ${isGeo ? 'geo' : 'eng'}`}>
            <span className="landing-partner-icon-wrap">
              <svg
                className="landing-partner-star"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <defs>
                  <radialGradient id="starCore" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#FFFDF6" />
                    <stop offset="35%" stopColor="#F9E7B0" />
                    <stop offset="70%" stopColor="#E8C874" />
                    <stop offset="100%" stopColor="#B8860B" />
                  </radialGradient>
                  <radialGradient id="starHalo" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="rgba(244,228,188,0.55)" />
                    <stop offset="100%" stopColor="rgba(244,228,188,0)" />
                  </radialGradient>
                </defs>
                <circle className="landing-partner-halo" cx="12" cy="12" r="11" fill="url(#starHalo)" />
                <path
                  className="landing-partner-star-shape"
                  d="M12 2c.3 3.6 1.4 6.2 3.2 8s4.4 2.9 8 3.2c-3.6.3-6.2 1.4-8 3.2s-2.9 4.4-3.2 8c-.3-3.6-1.4-6.2-3.2-8s-4.4-2.9-8-3.2c3.6-.3 6.2-1.4 8-3.2s2.9-4.4 3.2-8z"
                  fill="url(#starCore)"
                />
              </svg>
            </span>
            {partner}
          </p>
        </div>

        <div className="logos">
          <Logos />
        </div>

      </div>

    </div>
  )
}

export default Landing