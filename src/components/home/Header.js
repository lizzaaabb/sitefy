'use client'

import React from 'react'
import '../../styles/home/Header.css'

function Header() {
  return (
    <div className='hedaer-container'>

        <div className="logo">
            <h1>sitefy</h1>
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
