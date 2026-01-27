import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'
import { projects } from '../data/siteContent'
import '../styles/ProjectDetail.css'

function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)
  const [lightbox, setLightbox] = useState({ isOpen: false, src: '', title: '' })

  if (!project) {
    return (
      <div className="panel stack gap-md">
        <h1>Project not found</h1>
        <p className="muted">The project you are looking for is not listed here.</p>
        <Link to="/work" className="text-link">Back to work</Link>
      </div>
    )
  }

  const { details, images } = project
  const hasImages = images && (images.plans || images.renders)

  const openLightbox = (src, title) => {
    setLightbox({ isOpen: true, src, title })
  }

  const closeLightbox = () => {
    setLightbox({ isOpen: false, src: '', title: '' })
  }

  return (
    <div className="stack gap-lg">
      {/* Hero Section */}
      {hasImages && (
        <section className="project-hero">
          <img src={images.hero} alt={project.title} className="hero-image" />
          <div className="hero-overlay">
            <div className="hero-content">
              <p className="eyebrow">{project.category}</p>
              <h1>{project.title}</h1>
              <p className="hero-meta">{project.location} · {project.year}</p>
            </div>
          </div>
        </section>
      )}

      {/* Title & Overview */}
      {!hasImages && (
        <section className="panel">
          <p className="eyebrow">{project.category}</p>
          <h1>{project.title}</h1>
          <p className="muted">{project.location} · {project.year}</p>
          <p className="lede">{project.summary}</p>
        </section>
      )}

      {/* Project Overview */}
      <section className="panel narrow">
        <div className="grid two">
          <div>
            <h2>Overview</h2>
            <p>{details.overview}</p>
          </div>
          <div className="stack gap-sm">
            <div>
              <p className="eyebrow">Location</p>
              <p>{project.location}</p>
            </div>
            <div>
              <p className="eyebrow">Year</p>
              <p>{project.year}</p>
            </div>
            <div>
              <p className="eyebrow">Category</p>
              <p>{project.category}</p>
            </div>
            <div>
              <p className="eyebrow">Focus Areas</p>
              <div className="tag-row">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Requirement & Design Thinking */}
      <section className="panel narrow creative-sections">
        <div className="creative-grid">
          <div className="creative-card client-card">
            <div className="card-icon">📋</div>
            <h3>Client Requirement</h3>
            <div className="underline"></div>
            <p>{details.clientBrief}</p>
          </div>
          <div className="creative-card concept-card">
            <div className="card-icon">💡</div>
            <h3>Design Thinking & Concept</h3>
            <div className="underline"></div>
            <p>{details.conceptPlanning}</p>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      {images && images.plans && images.plans.length > 0 && (
        <section className="panel narrow">
          <div className="section-header">
            <h2>Space Planning & Plans</h2>
            <p className="section-description">Click on any plan to view in full resolution</p>
          </div>
          <div className="gallery-grid plans-grid">
            {images.plans.map((plan, idx) => (
              <div
                key={idx}
                className="gallery-item plan-card"
                onClick={() => openLightbox(plan.src, plan.title)}
              >
                <img src={plan.src} alt={plan.title} className="gallery-img" />
                <div className="gallery-overlay">
                  <div className="zoom-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="11" cy="11" r="8"></circle>
                      <path d="m21 21-4.35-4.35"></path>
                      <path d="M11 8v6M8 11h6"></path>
                    </svg>
                  </div>
                </div>
                <p className="gallery-title">{plan.title}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Process & Execution */}
      <section className="panel narrow creative-sections">
        <div className="creative-grid">
          <div className="creative-card process-card">
            <div className="card-icon">🛠️</div>
            <h3>Process & Execution</h3>
            <div className="underline"></div>
            <p>{details.processExecution}</p>
          </div>
          <div className="creative-card outcome-card">
            <div className="card-icon">✨</div>
            <h3>Outcome</h3>
            <div className="underline"></div>
            <p>{details.outcome}</p>
          </div>
        </div>
      </section>

      {/* Renders Gallery */}
      {images && images.renders && (
        <div className="narrow">
          {/* Master Bedroom Renders */}
          {images.renders.masterBedroom && images.renders.masterBedroom.length > 0 && (
            <section className="panel">
              <div className="section-header">
                <h2>Master Bedroom</h2>
                <p className="section-description">High-resolution renders</p>
              </div>
              <div className="gallery-grid">
                {images.renders.masterBedroom.map((img, idx) => (
                  <div
                    key={idx}
                    className="gallery-item"
                    onClick={() => openLightbox(img.src, img.title)}
                  >
                    <img src={img.src} alt={img.title} className="gallery-img" />
                    <div className="gallery-overlay">
                      <div className="zoom-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 21l-6-6"></path>
                          <circle cx="10" cy="10" r="8"></circle>
                          <line x1="10" y1="7" x2="10" y2="13"></line>
                          <line x1="7" y1="10" x2="13" y2="10"></line>
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Guest Bedroom Renders */}
          {images.renders.guestBedroom && images.renders.guestBedroom.length > 0 && (
            <section className="panel">
              <div className="section-header">
                <h2>Guest Bedroom</h2>
                <p className="section-description">Welcoming and comfortable design</p>
              </div>
              <div className="gallery-grid">
                {images.renders.guestBedroom.map((img, idx) => (
                  <div
                    key={idx}
                    className="gallery-item"
                    onClick={() => openLightbox(img.src, img.title)}
                  >
                    <img src={img.src} alt={img.title} className="gallery-img" />
                    <div className="gallery-overlay">
                      <div className="zoom-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 21l-6-6"></path>
                          <circle cx="10" cy="10" r="8"></circle>
                          <line x1="10" y1="7" x2="10" y2="13"></line>
                          <line x1="7" y1="10" x2="13" y2="10"></line>
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Kids Bedroom Renders */}
          {images.renders.kidsBedroom && images.renders.kidsBedroom.length > 0 && (
            <section className="panel">
              <div className="section-header">
                <h2>Kids Bedroom</h2>
                <p className="section-description">Playful yet calm environment</p>
              </div>
              <div className="gallery-grid">
                {images.renders.kidsBedroom.map((img, idx) => (
                  <div
                    key={idx}
                    className="gallery-item"
                    onClick={() => openLightbox(img.src, img.title)}
                  >
                    <img src={img.src} alt={img.title} className="gallery-img" />
                    <div className="gallery-overlay">
                      <div className="zoom-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 21l-6-6"></path>
                          <circle cx="10" cy="10" r="8"></circle>
                          <line x1="10" y1="7" x2="10" y2="13"></line>
                          <line x1="7" y1="10" x2="13" y2="10"></line>
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      )}

      {/* Reflection */}
      <section className="panel narrow">
        <h3>Reflection</h3>
        <p>{details.reflection}</p>
      </section>

      {/* Navigation */}
      <section className="panel narrow accent">
        <div className="panel-header">
          <h2>Explore more</h2>
          <Link to="/work" className="text-link">View all projects</Link>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightbox.isOpen && (
        <div className="lightbox-modal" onClick={closeLightbox}>
          <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
            <button
              className="lightbox-close"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              ×
            </button>
            <img src={lightbox.src} alt={lightbox.title} className="lightbox-image" />
            {lightbox.title && (
              <div className="lightbox-caption">
                <p>{lightbox.title}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default ProjectDetail
