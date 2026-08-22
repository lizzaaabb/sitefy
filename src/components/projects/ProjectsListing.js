'use client'

import React from 'react'
import '../../styles/projects/ProjectsListing.css'

const projects = [
  {
    id: '01',
    name: 'Valore',
    description: 'უძრავი ქონების პლატფორმა',
    tag: 'Real Estate · Next.js',
    image: 'https://placehold.co/1200x900/f4f3f1/111111?text=Valore',
    liveUrl: 'https://www.valore.ge/',
    githubUrl: 'https://github.com/',
  },
  {
    id: '02',
    name: 'Utopia VIP Travel',
    description: 'ტურიზმი და უძრავი ქონება საქართველოში',
    tag: 'Tourism · Real Estate',
    image: 'https://placehold.co/1200x900/f4f3f1/111111?text=Utopia',
    liveUrl: 'https://www.utopiaviptravel.com/',
    githubUrl: 'https://github.com/',
  },
  {
    id: '03',
    name: 'Apollo Creations',
    description: 'ვებ დეველოპმენტის სააგენტოს საიტი',
    tag: 'Web Agency · Next.js',
    image: 'https://placehold.co/1200x900/f4f3f1/111111?text=Apollo+Creations',
    liveUrl: 'https://www.apollocreations.net/',
    githubUrl: 'https://github.com/',
  },
  {
    id: '04',
    name: 'Your Hood',
    description: 'ონლაინ მაღაზია',
    tag: 'E-commerce · Next.js',
    image: 'https://placehold.co/1200x900/f4f3f1/111111?text=Your+Hood',
    liveUrl: 'https://yourhood.ge/',
    githubUrl: 'https://github.com/',
  },
  {
    id: '05',
    name: 'ოცნების რემონტი',
    description: 'რემონტის კომპანიის საიტი',
    tag: 'Renovation · Next.js',
    image: 'https://placehold.co/1200x900/f4f3f1/111111?text=Ocnebis+Remonti',
    liveUrl: 'https://ocnebisremonti.ge/',
    githubUrl: 'https://github.com/',
  },
  {
    id: '06',
    name: 'Art Of Movement',
    description: 'ცეკვის სტუდიის ლენდინგ გვერდი',
    tag: 'Landing Page',
    image: 'https://placehold.co/1200x900/f4f3f1/111111?text=Art+Of+Movement',
    liveUrl: 'https://artofmovement.net/',
    githubUrl: 'https://github.com/',
  },
  {
    id: '07',
    name: 'Litox Georgia',
    description: 'სამშენებლო მასალების საიტი',
    tag: 'Construction · Next.js',
    image: 'https://placehold.co/1200x900/f4f3f1/111111?text=Litox',
    liveUrl: 'https://litox.ge/',
    githubUrl: 'https://github.com/',
  },
  {
    id: '08',
    name: 'Greenhall Capital',
    description: 'საინვესტიციო კომპანიის საიტი',
    tag: 'Private Equity · Next.js',
    image: 'https://placehold.co/1200x900/f4f3f1/111111?text=Greenhall+Capital',
    liveUrl: 'https://greenhallcapital.com/',
    githubUrl: 'https://github.com/',
  },
  {
    id: '09',
    name: 'Builde',
    description: 'სამშენებლო სერვისების პლატფორმა',
    tag: 'App Landing · Next.js',
    image: 'https://placehold.co/1200x900/f4f3f1/111111?text=Builde',
    liveUrl: 'https://builde.ge/',
    githubUrl: 'https://github.com/',
  },
]

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.5 0 12.3c0 5.44 3.44 10.05 8.21 11.68.6.11.82-.27.82-.6 0-.29-.01-1.06-.02-2.08-3.34.75-4.04-1.65-4.04-1.65-.55-1.43-1.34-1.82-1.34-1.82-1.09-.77.08-.75.08-.75 1.21.09 1.84 1.27 1.84 1.27 1.07 1.87 2.81 1.33 3.5 1.02.11-.79.42-1.33.76-1.64-2.67-.31-5.47-1.38-5.47-6.15 0-1.36.47-2.47 1.24-3.34-.12-.31-.54-1.57.12-3.27 0 0 1.01-.33 3.3 1.28a11.2 11.2 0 0 1 6.01 0c2.29-1.61 3.3-1.28 3.3-1.28.66 1.7.24 2.96.12 3.27.77.87 1.24 1.98 1.24 3.34 0 4.78-2.81 5.83-5.49 6.14.43.38.81 1.13.81 2.29 0 1.65-.02 2.98-.02 3.39 0 .33.22.72.83.6C20.57 22.34 24 17.74 24 12.3 24 5.5 18.63 0 12 0Z" />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ProjectsListing() {
  return (
    <section className="pl-container" id="work">
      <div className="pl-inner">


        <div className="pl-grid">
          {projects.map((project) => (
            <article className="pl-card" key={project.id}>
              <a
                className="pl-media"
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.name} — ნახეთ საიტი`}
              >
                <img
                  className="pl-image"
                  src={project.image}
                  alt={project.name}
                  loading="lazy"
                />
                <span className="pl-media-overlay" />
                <span className="pl-visit-pill">
                  ნახეთ საიტი <ArrowIcon />
                </span>
              </a>

              <div className="pl-meta">
                <div className="pl-meta-text">
                  <div className="pl-name-row">
                    <span className="pl-index">{project.id}</span>
                    <h3 className="pl-name">{project.name}</h3>
                  </div>
                  <p className="pl-description">{project.description}</p>
                  <span className="pl-tag">{project.tag}</span>
                </div>

                <a
                  className="pl-github"
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.name} — GitHub repo`}
                >
                  <GithubIcon />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsListing