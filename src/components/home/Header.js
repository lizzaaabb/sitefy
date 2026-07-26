'use client'

import React from 'react'
import '../../styles/home/Header.css'
const logoilo = '/logo/logo-ilo.png'

function Header() {
  return (
    <div className='hedaer-container'>

        <div className="logo">
            <img src={logoilo} alt="sitefy logo transparent" className='header-logo' />
        </div>

        <div className="products">
            <a href="#">პროდუქტები</a>

        </div>

        <div className="work">
            <a href="#">ნამუშევრები</a>

        </div>

        <div className="pricing">
            <a href="#">ფასები</a>

        </div>
      
    </div>
  )
}

export default Header
