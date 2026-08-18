'use client'

import React from 'react'
import '../../styles/home/CTA.css'

function CTA() {
    return (
        <section className="cta-container">
            <p className="cta-eyebrow">დაწყება</p>

            <h2 className="cta-heading">
                მზად ხართ თქვენი პროექტის დასაწყებად?
            </h2>

            <p className="cta-description">
                მოგვწერეთ რამდენიმე დეტალი და 24 საათში დაგიკავშირდებით — უფასო
                კონსულტაციით, ვალდებულების გარეშე.
            </p>

            <div className="cta-buttons">
                <a href="/contact" className="cta-button-primary">
                    კონსულტაციის დაჯავშნა
                </a>
                <a href="mailto:info@yourcompany.com" className="cta-button-secondary">
                    info@yourcompany.com
                </a>
            </div>
        </section>
    )
}

export default CTA