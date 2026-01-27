import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../data/siteContent'
import '../styles/KonkanHouseProject.css'

function KonkanHouseProject() {
  const project = useMemo(() => projects.find((item) => item.slug === 'konkan-house'), [])
  const [lightbox, setLightbox] = useState({ open: false, src: '', title: '' })

  if (!project || !project.konkanMedia) {
    return (
      <div className="panel stack gap-md">
        <h1>Project not found</h1>
        <p className="muted">Konkan House data is missing. Please check siteContent.js.</p>
        <Link to="/work" className="text-link">Back to portfolio</Link>
      </div>
    )
  }

  const { konkanMedia } = project

  const openLightbox = (src, title = '') => setLightbox({ open: true, src, title })
  const closeLightbox = () => setLightbox({ open: false, src: '', title: '' })

  return (
    <div className="stack gap-lg konkan-page">
      {/* Hero */}
      <section className="konkan-hero">
        <img src={konkanMedia.hero} alt="Konkan House site" className="konkan-hero-image" />
        <div className="konkan-hero-overlay">
          <div className="konkan-hero-content">
            <p className="eyebrow">Residential Villa · Ongoing</p>
            <h1>Konkan House</h1>
            <p className="konkan-tagline">A home nestled within the forest landscape of Konkan.</p>
            <div className="konkan-hero-meta">
              <span>Location: Devgad, Sindhudurg, Maharashtra</span>
              <span>Status: Ongoing</span>
              <span>Context: Forest site · Off-road access · Waterfall frontage</span>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="panel narrow konkan-section">
        <div className="konkan-grid two">
          <div className="konkan-fact-grid">
            <div>
              <p className="eyebrow">Project Type</p>
              <p>Residential Villa</p>
            </div>
            <div>
              <p className="eyebrow">Location</p>
              <p>Devgad, Sindhudurg, Maharashtra</p>
            </div>
            <div>
              <p className="eyebrow">Status</p>
              <p>Ongoing</p>
            </div>
          </div>
          <div className="konkan-copy">
            <h2>Project overview</h2>
            <p>
              A forest-edge home 5 km off the main road, oriented to a private waterfall that runs along the site. Massing slips between
              mango and coconut trees, catching breeze under deep verandahs while preserving canopy and stream edges.
            </p>
          </div>
        </div>
      </section>

      {/* Site context & client brief */}
      <section className="panel narrow konkan-section">
        <div className="konkan-context-grid">
          <div className="konkan-context-card site-context-card">
            <div className="konkan-context-icon">🌳</div>
            <h3>Site context</h3>
            <div className="konkan-context-underline"></div>
            <p>
              Remote forest land with a rough off-road approach, dense greenery, and a natural waterfall flowing in front of the plot. The brief demanded
              minimal disturbance to terrain and trees, with architecture that listens to the landscape.
            </p>
          </div>
          <div className="konkan-context-card client-brief-card">
            <div className="konkan-context-icon">🏠</div>
            <h3>Client brief</h3>
            <div className="konkan-context-underline"></div>
            <p>
              A peaceful, nature-connected home that frames the waterfall, stays cool and ventilated, and feels secure without shutting out the forest.
              The family wanted breezy living decks and bedrooms that wake to water and canopy views.
            </p>
          </div>
        </div>
      </section>

      {/* Design thinking & site images */}
      <section className="panel konkan-section">
        <div className="konkan-section-header">
          <div className="konkan-section-title-wrap">
            <span className="konkan-section-icon">🌿</span>
            <h2>Design thinking & concept</h2>
          </div>
          <p className="muted">Respecting terrain, preserving trees, maximizing views, light, and cross-ventilation.</p>
        </div>
        <div className="konkan-grid six">
          {konkanMedia.siteGallery.map((img, idx) => (
            <div key={idx} className="konkan-card" onClick={() => openLightbox(img, 'Site context')}> 
              <img src={img} alt={`Site context ${idx + 1}`} />
            </div>
          ))}
        </div>
      </section>

      {/* Space planning & zoning */}
      <section className="panel konkan-section narrow">
        <div className="konkan-section-header">
          <div className="konkan-section-title-wrap">
            <span className="konkan-section-icon">📐</span>
            <h2>Space planning & zoning</h2>
          </div>
          <p className="muted">Clear views to the waterfall with shaded circulation and tucked-away services.</p>
        </div>
        <div className="konkan-grid two">
          {konkanMedia.zoning.map((plan, idx) => (
            <div key={idx} className="konkan-zoning-card" onClick={() => openLightbox(plan.src, plan.title)}>
              <div className="zoning-image-wrap">
                <img src={plan.src} alt={plan.title} />
                <div className="zoning-overlay">
                  <span className="zoning-zoom">🔍</span>
                </div>
              </div>
              <h4>{plan.title}</h4>
              <p className="muted">{plan.caption}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Technical drawings */}
      <section className="panel konkan-section narrow">
        <div className="konkan-section-header">
          <div className="konkan-section-title-wrap">
            <span className="konkan-section-icon">⚙️</span>
            <h2>Technical drawings & services</h2>
          </div>
          <p className="muted">Electrical, plumbing, and ceiling layouts sized for readability and quick review.</p>
        </div>
        <div className="konkan-grid three">
          {konkanMedia.technical.map((item, idx) => (
            <div key={idx} className="konkan-tech-card" onClick={() => openLightbox(item.src, item.title)}>
              <div className="tech-image-wrap">
                <img src={item.src} alt={item.title} />
                <div className="tech-overlay">
                  <span className="tech-zoom">🔍</span>
                </div>
              </div>
              <p className="tech-label">{item.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Renders */}
      <section className="panel konkan-section narrow">
        <div className="konkan-section-header">
          <div className="konkan-section-title-wrap">
            <span className="konkan-section-icon">✨</span>
            <h2>Design development & renders</h2>
          </div>
          <p className="muted">Visualizations that test light, proportion, and material calm.</p>
        </div>
        <div className="stack gap-md">
          <div>
            <div className="konkan-subsection-header">
              <span className="subsection-icon">🛋️</span>
              <div>
                <h3>Living & Foyer</h3>
                <p className="muted">Open living decks and a calm foyer framing the forest edge.</p>
              </div>
            </div>
            <div className="konkan-grid two">
              {konkanMedia.renders.living.map((item, idx) => (
                <div key={idx} className="konkan-render-card" onClick={() => openLightbox(item.src, item.title)}>
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
            <div className="konkan-subsection-header">
              <span className="subsection-icon">🛏️</span>
              <div>
                <h3>Bedroom</h3>
                <p className="muted">Shaded suites that open to canopy breezes and water sound.</p>
              </div>
            </div>
            <div className="konkan-grid two">
              {konkanMedia.renders.bedroom.map((item, idx) => (
                <div key={idx} className="konkan-render-card" onClick={() => openLightbox(item.src, item.title)}>
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
            <div className="konkan-subsection-header">
              <span className="subsection-icon">🚿</span>
              <div>
                <h3>Washroom & Pool Area</h3>
                <p className="muted">Water-facing bathing and a pool deck nested in greenery.</p>
              </div>
            </div>
            <div className="konkan-grid two">
              {konkanMedia.renders.washroom.map((item, idx) => (
                <div key={idx} className="konkan-render-card" onClick={() => openLightbox(item.src, item.title)}>
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

      {/* Execution */}
      <section className="panel konkan-section narrow">
        <div className="konkan-section-header">
          <div className="konkan-section-title-wrap">
            <span className="konkan-section-icon">🏗️</span>
            <h2>Execution & site progress</h2>
          </div>
          <p className="muted">Building through off-road access and dense forest coordination.</p>
        </div>
        <div className="konkan-grid three">
          {konkanMedia.siteProgress.map((img, idx) => (
            <div key={idx} className="konkan-progress-card" onClick={() => openLightbox(img, `Progress phase ${idx + 1}`)}>
              <div className="progress-image-wrap">
                <img src={img} alt={`Site progress ${idx + 1}`} />
                <div className="progress-overlay">
                  <span className="progress-badge">{idx + 1}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="muted small">
          Materials and crews move via a 5 km off-road track; sequencing protects tree roots and stream edges while keeping the site accessible for
          services and structure.
        </p>
      </section>

      {/* Status & reflection */}
      <section className="panel narrow konkan-section">
        <div className="konkan-status-card">
          <div className="status-icon">🌱</div>
          <h3>Project status & reflection</h3>
          <div className="status-underline"></div>
          <p>
            Ongoing construction with structure and services coordinated around existing trees. The vision is a calm, lime-plastered home with timber
            and stone that borrow the forest palette. Lessons: when the site leads, architecture follows—aligning with water, wind, and roots keeps the
            house honest to its setting.
          </p>
        </div>
      </section>

      {/* Navigation */}
      <section className="panel narrow konkan-nav">
        <div className="konkan-nav-actions">
          <Link to="/work" className="konkan-nav-button back">← Back to portfolio</Link>
          <Link to="/work/residential-bedroom-design" className="konkan-nav-button next">Next project →</Link>
        </div>
      </section>

      {lightbox.open && (
        <div className="konkan-lightbox" onClick={closeLightbox}>
          <div className="konkan-lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <button className="konkan-lightbox-close" onClick={closeLightbox} aria-label="Close lightbox">×</button>
            <img src={lightbox.src} alt={lightbox.title} />
            {lightbox.title && <p className="konkan-lightbox-caption">{lightbox.title}</p>}
          </div>
        </div>
      )}
    </div>
  )
}

export default KonkanHouseProject
