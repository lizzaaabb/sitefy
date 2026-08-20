'use client'

import React from 'react'
import '../../styles/home/Cta.css'

function CtaGold() {
    return (
        <section className="cta-gold-container">
            <div className="cta-gold-card">
                <div className="cta-gold-text">
                    <p className="cta-gold-eyebrow">შეკვეთა</p>
                    <h2 className="cta-gold-heading">
                        გსურთ ბიზნესის ონლაინ სივრცეში განვითარება?
                    </h2>
                    <p className="cta-gold-desc">
                        ვქმნით საიტებს, რომლებიც არა მხოლოდ ვიზუალურად საინტერესოა,
                        არამედ რეალურ შედეგებს გვაძლევს.
                    </p>
                </div>

                <div className="cta-gold-buttons">

                    <a href="https://wa.me/995574065469"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-gold-btn-primary"
                    >
                        მოგვწერეთ
                    </a>
                    <a href="tel:+995575755712" className="cta-gold-btn-secondary">
                        დაგვირეკეთ
                    </a>
                </div>
            </div>
        </section>
    )
}

export default CtaGold