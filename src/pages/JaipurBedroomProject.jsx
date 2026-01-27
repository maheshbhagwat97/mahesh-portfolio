import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../data/siteContent'
import '../styles/JaipurBedroomProject.css'

function JaipurBedroomProject() {
  const project = useMemo(() => projects.find((item) => item.slug === 'residential-bedroom-design'), [])
  const [lightbox, setLightbox] = useState({ open: false, src: '', title: '' })

  if (!project || !project.images) {
    return (
      <div className="panel stack gap-md">
        <h1>Project not found</h1>
        <p className="muted">Jaipur Bedroom project data is missing. Please check siteContent.js.</p>
        <Link to="/work" className="text-link">Back to portfolio</Link>
      </div>
    )
  }

  const { images, details } = project

  const openLightbox = (src, title = '') => setLightbox({ open: true, src, title })
  const closeLightbox = () => setLightbox({ open: false, src: '', title: '' })

  return (
    <div className="stack gap-lg jaipur-page">
      {/* Hero */}
      <section className="jaipur-hero">
        <img src={images.hero} alt="Jaipur Bedroom Project" className="jaipur-hero-image" />
        <div className="jaipur-hero-overlay">
          <div className="jaipur-hero-content">
            <p className="eyebrow">Residential · Bedroom Design</p>
            <h1>Jaipur Bedroom Design</h1>
            <p className="jaipur-tagline">Three sanctuaries of light, material, and intimate calm.</p>
            <div className="jaipur-hero-meta">
              <span>Location: Jaipur, Rajasthan</span>
              <span>Year: 2019</span>
              <span>Focus: Master, Guest & Kids Bedrooms</span>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="panel narrow jaipur-section">
        <div className="jaipur-grid two">
          <div className="jaipur-fact-grid">
            <div>
              <p className="eyebrow">Project Type</p>
              <p>Residential Bedroom Design</p>
            </div>
            <div>
              <p className="eyebrow">Location</p>
              <p>Jaipur, Rajasthan</p>
            </div>
            <div>
              <p className="eyebrow">Year</p>
              <p>2019</p>
            </div>
            <div>
              <p className="eyebrow">Category</p>
              <p>Residential</p>
            </div>
          </div>
          <div>
            <h3>Project Overview</h3>
            <p>{details.overview}</p>
          </div>
        </div>
      </section>

      {/* Client & Concept */}
      <section className="panel narrow jaipur-section">
        <div className="jaipur-context-grid">
          <div className="jaipur-context-card client-card">
            <div className="jaipur-context-icon">👥</div>
            <h3>Client Vision</h3>
            <div className="jaipur-context-underline"></div>
            <p>{details.clientBrief}</p>
          </div>
          <div className="jaipur-context-card concept-card">
            <div className="jaipur-context-icon">✨</div>
            <h3>Design Concept</h3>
            <div className="jaipur-context-underline"></div>
            <p>{details.conceptPlanning}</p>
          </div>
        </div>
      </section>

      {/* Space Planning & Plans */}
      <section className="panel narrow jaipur-section">
        <div className="jaipur-section-header">
          <div className="jaipur-section-title-wrap">
            <span className="jaipur-section-icon">📐</span>
            <h2>Space planning & floor plans</h2>
          </div>
          <p className="muted">Thoughtful layouts for master, guest, and kids bedrooms.</p>
        </div>
        <div className="jaipur-grid two">
          {images.plans.map((plan, idx) => (
            <div key={idx} className="jaipur-plan-card" onClick={() => openLightbox(plan.src, plan.title)}>
              <div className="plan-image-wrap">
                <img src={plan.src} alt={plan.title} />
                <div className="plan-overlay">
                  <span className="plan-zoom">🔍</span>
                </div>
              </div>
              <h4>{plan.title}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Process & Execution */}
      <section className="panel narrow jaipur-section">
        <div className="jaipur-creative-grid">
          <div className="jaipur-creative-card process-card">
            <div className="card-icon">🛠️</div>
            <h3>Process & Execution</h3>
            <div className="underline"></div>
            <p>{details.processExecution}</p>
          </div>
          <div className="jaipur-creative-card outcome-card">
            <div className="card-icon">🏡</div>
            <h3>Outcome</h3>
            <div className="underline"></div>
            <p>{details.outcome}</p>
          </div>
        </div>
      </section>

      {/* Design Development & Renders */}
      <section className="panel narrow jaipur-section">
        <div className="jaipur-section-header">
          <div className="jaipur-section-title-wrap">
            <span className="jaipur-section-icon">✨</span>
            <h2>Design development & renders</h2>
          </div>
          <p className="muted">High-resolution visualizations of three distinct bedroom sanctuaries.</p>
        </div>
        <div className="stack gap-md">
          <div>
            <div className="jaipur-subsection-header">
              <span className="subsection-icon">🛏️</span>
              <div>
                <h3>Master Bedroom</h3>
                <p className="muted">A serene retreat wrapped in calm—soft textures and intimate lighting.</p>
              </div>
            </div>
            <div className="jaipur-grid two">
              {images.renders.masterBedroom.map((item, idx) => (
                <div key={idx} className="jaipur-render-card" onClick={() => openLightbox(item.src, item.title)}>
                  <div className="render-image-wrap">
                    <img src={item.src} alt={item.title} />
                    <div className="render-overlay">
                      <span className="render-zoom">🔍</span>
                    </div>
                  </div>
                  <p className="render-title">{item.title}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="jaipur-subsection-header">
              <span className="subsection-icon">🌿</span>
              <div>
                <h3>Guest Bedroom</h3>
                <p className="muted">A warm embrace for visitors—balancing openness with privacy.</p>
              </div>
            </div>
            <div className="jaipur-grid two">
              {images.renders.guestBedroom.map((item, idx) => (
                <div key={idx} className="jaipur-render-card" onClick={() => openLightbox(item.src, item.title)}>
                  <div className="render-image-wrap">
                    <img src={item.src} alt={item.title} />
                    <div className="render-overlay">
                      <span className="render-zoom">🔍</span>
                    </div>
                  </div>
                  <p className="render-title">{item.title}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="jaipur-subsection-header">
              <span className="subsection-icon">🎨</span>
              <div>
                <h3>Kids Bedroom</h3>
                <p className="muted">A playful haven that grows with imagination—durable and calm.</p>
              </div>
            </div>
            <div className="jaipur-grid two">
              {images.renders.kidsBedroom.map((item, idx) => (
                <div key={idx} className="jaipur-render-card" onClick={() => openLightbox(item.src, item.title)}>
                  <div className="render-image-wrap">
                    <img src={item.src} alt={item.title} />
                    <div className="render-overlay">
                      <span className="render-zoom">🔍</span>
                    </div>
                  </div>
                  <p className="render-title">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reflection */}
      <section className="panel narrow jaipur-section">
        <div className="jaipur-status-card">
          <div className="status-icon">💭</div>
          <h3>Reflection</h3>
          <div className="status-underline"></div>
          <p>{details.reflection}</p>
        </div>
      </section>

      {/* Navigation */}
      <section className="panel narrow jaipur-nav">
        <div className="jaipur-nav-actions">
          <Link to="/work" className="jaipur-nav-button back">← Back to portfolio</Link>
          <Link to="/work/courtyard-house-pune" className="jaipur-nav-button next">Next project →</Link>
        </div>
      </section>

      {lightbox.open && (
        <div className="jaipur-lightbox" onClick={closeLightbox}>
          <div className="jaipur-lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <button className="jaipur-lightbox-close" onClick={closeLightbox} aria-label="Close lightbox">×</button>
            <img src={lightbox.src} alt={lightbox.title} />
            {lightbox.title && <p className="jaipur-lightbox-caption">{lightbox.title}</p>}
          </div>
        </div>
      )}
    </div>
  )
}

export default JaipurBedroomProject
