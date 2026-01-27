import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { areasOfPractice, projects } from '../data/siteContent'

const featured = projects.slice(0, 3)

function Home() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animation = 'fadeInUp 0.8s ease forwards'
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    document.querySelectorAll('.panel, .featured-work-card, .practice-card, .philosophy-card').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="stack gap-xl">
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot">●</span>
            <p className="eyebrow">Mahesh Bhagwat · Senior Interior Designer</p>
          </div>
          <h1 className="hero-title">I design interiors that feel <span className="highlight">calm, warm,</span> and quietly confident.</h1>
          <p className="lede">
            I work closely with clients to craft spaces that age well—places where light, material, and proportion
            feel honest and welcoming.
          </p>
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number">5+</div>
              <div className="stat-label">Years of Experience</div>
            </div>
            <div className="stat">
              <div className="stat-number">50+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat">
              <div className="stat-number">4</div>
              <div className="stat-label">Practice Areas</div>
            </div>
          </div>
          <div className="cta-row">
            <Link className="button" to="/work">
              View my work
            </Link>
            <Link className="text-link" to="/contact">
              Let&apos;s talk
            </Link>
          </div>
        </div>
        <div className="hero-accent"></div>
      </section>

      <section className="panel">
        <div className="panel-header">
          <h2>Design philosophy</h2>
          <p className="small">Calm plans, honest materials, clear light.</p>
        </div>
        <div className="philosophy-grid">
          <div className="philosophy-card">
            <div className="philosophy-icon">🎯</div>
            <h4>Listen First</h4>
            <p>
              Every project begins with understanding. I spend time mapping how people move, where they rest, and how they gather. This foundation shapes everything that follows.
            </p>
          </div>
          <div className="philosophy-card">
            <div className="philosophy-icon">🌿</div>
            <h4>Honest Materials</h4>
            <p>
              I believe in materials that age gracefully—natural finishes, warm woods, and tactile surfaces. No shortcuts, no false pretenses.
            </p>
          </div>
          <div className="philosophy-card">
            <div className="philosophy-icon">💡</div>
            <h4>Light as Architecture</h4>
            <p>
              Clear light shouldn't be accidental. I design lighting that softens edges, guides movement, and changes how a space feels throughout the day.
            </p>
          </div>
          <div className="philosophy-card">
            <div className="philosophy-icon">🤝</div>
            <h4>On-Site Partnership</h4>
            <p>
              I keep teams aligned by staying present—working alongside carpenters, masons, and craftspeople to refine details as we build.
            </p>
          </div>
        </div>
      </section>

      <section className="panel">
        <div className="panel-header">
          <h2>Featured work</h2>
          <Link to="/work" className="text-link">
            See all projects
          </Link>
        </div>
        <div className="grid three">
          {featured.map((project) => (
            <Link key={project.slug} to={`/work/${project.slug}`} className="card-link">
              <article className="card">
                {project.image && (
                  <div className="card-image">
                    <img src={project.image} alt={project.title} loading="lazy" />
                  </div>
                )}
                <div className="card-content">
                  <p className="eyebrow">{project.category}</p>
                  <h3>{project.title}</h3>
                  <p className="muted">{project.location} · {project.year}</p>
                  <p>{project.excerpt}</p>
                  <span className="text-link">Read the story</span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      <section className="panel">
        <div className="panel-header">
          <h2>Areas of practice</h2>
          <p className="small">Residential, commercial, office, and factory floors.</p>
        </div>
        <div className="grid four">
          {areasOfPractice.map((area) => (
            <div key={area.title} className="pill-card">
              {area.image && (
                <div className="pill-card-image">
                  <img src={area.image} alt={area.title} loading="lazy" />
                </div>
              )}
              <div className="pill-card-content">
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="panel accent">
        <div className="panel-header">
          <h2>Let&apos;s build something calm</h2>
          <p className="small">I enjoy early conversations—sketches, constraints, and what the space should feel like.</p>
        </div>
        <div className="cta-row">
          <Link className="button" to="/contact">
            Start a conversation
          </Link>
          <Link className="text-link" to="/services">
            View services
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
