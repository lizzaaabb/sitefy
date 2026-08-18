'use client'

import React from 'react'
import '../../styles/home/Footer.css'
import { productColumns } from './Header'

const logowhite = '/logo/logowhite.png'

const footerCompanyLinks = [
    { title: 'ნამუშევრები', href: '#work' },
    { title: 'პროცესი', href: '#process' },
    { title: 'ფასები', href: '#pricing' },
]

function Footer() {
    return (
        <footer className="footer-container">
            <p className="footer-giant-word" aria-hidden="true">sitefy</p>

            <div className="footer-inner">

                <div className="footer-main">
                    <div className="footer-brand">
                        <img src={logowhite} alt="sitefy logo" className="footer-logo" />
                        <p className="footer-tagline">
                            ვქმნით ვებსაიტებს, რომლებიც თქვენს ბიზნესს წინ სწევს.
                        </p>

                        <div className="footer-socials">
                            <a href="https://facebook.com/sitefy.ge" target="_blank" rel="noopener noreferrer" className="footer-social" aria-label="Facebook">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M13.5 21v-8.2h2.75l.41-3.19h-3.16V7.55c0-.92.26-1.55 1.58-1.55h1.68V3.14C15.9 3.06 15.02 3 13.98 3c-2.15 0-3.62 1.31-3.62 3.72v2.89H7.6v3.19h2.76V21h3.14z" />
                                </svg>
                            </a>
                            <a href="https://instagram.com/sitefy.ge" target="_blank" rel="noopener noreferrer" className="footer-social" aria-label="Instagram">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                                    <rect x="3" y="3" width="18" height="18" rx="5" />
                                    <circle cx="12" cy="12" r="4" />
                                    <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
                                </svg>
                            </a>
                            <a href="https://tiktok.com/@sitefy.ge" target="_blank" rel="noopener noreferrer" className="footer-social" aria-label="TikTok">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M16.6 3c.3 1.9 1.5 3.4 3.4 3.6v2.7c-1.2 0-2.4-.4-3.4-1.1v6.6c0 3.2-2.6 5.7-5.8 5.5-2.9-.2-5.2-2.6-5.3-5.5-.1-3.2 2.5-5.9 5.7-5.9.3 0 .6 0 .9.1v2.8c-.3-.1-.6-.2-.9-.2-1.6 0-2.9 1.4-2.8 3 .1 1.4 1.3 2.6 2.7 2.7 1.6.1 3-1.2 3-2.8V3h2.5z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="footer-columns">
                        {productColumns.map((col) => (
                            <div className="footer-col" key={col.label}>
                                <h5 className="footer-col-label">{col.label}</h5>
                                <ul>
                                    {col.items.map((item) => (
                                        <li key={item.title}><a href={item.href}>{item.title}</a></li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                        <div className="footer-col">
                            <h5 className="footer-col-label">კომპანია</h5>
                            <ul>
                                {footerCompanyLinks.map((link) => (
                                    <li key={link.title}><a href={link.href}>{link.title}</a></li>
                                ))}
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h5 className="footer-col-label">კონტაქტი</h5>
                            <ul>
                                <li><a href="mailto:info@sitefy.ge">info@sitefy.ge</a></li>
                                <li><a href="tel:+995575755712">575 75 57 12</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© {new Date().getFullYear()} Sitefy</p>
                    <p>ყველა უფლება დაცულია</p>
                </div>

            </div>
        </footer>
    )
}

export default Footer