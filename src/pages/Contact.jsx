import { contactInfo } from '../data/siteContent'
import { useState, useEffect } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animation = 'fadeInUp 0.8s ease forwards'
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })

    document.querySelectorAll('.contact-info-card, .form-group, .contact-hero').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const mailtoLink = `mailto:${contactInfo.email}?subject=New Project Inquiry: ${formData.projectType || 'Design Consultation'}&body=Name: ${formData.name}%0AEmail: ${formData.email}%0AProject Type: ${formData.projectType}%0A%0A${formData.message}`
    window.location.href = mailtoLink
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', projectType: '', message: '' })
    }, 2000)
  }

  return (
    <div className="stack gap-xl narrow">
      <section className="contact-hero">
        <div className="contact-hero-content">
          <p className="eyebrow">Get in Touch</p>
          <h1>Let&apos;s create something <span className="highlight">calm and thoughtful</span> together.</h1>
          <p className="lede">
            I&apos;m interested in understanding your space and how people will move through it. Whether it&apos;s a home, office, hospitality venue, or factory floor—I&apos;d love to hear your vision.
          </p>
        </div>
        <div className="contact-hero-accent"></div>
      </section>

      <section className="contact-quick-info">
        <div className="contact-info-card email-card">
          <div className="info-icon">📧</div>
          <h3>Email</h3>
          <a className="text-link" href={`mailto:${contactInfo.email}`}>
            {contactInfo.email}
          </a>
          <p className="info-subtitle">Best for detailed briefs</p>
        </div>

        <div className="contact-info-card phone-card">
          <div className="info-icon">📱</div>
          <h3>Phone</h3>
          <a className="text-link" href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}>
            {contactInfo.phone}
          </a>
          <p className="info-subtitle">For quick conversations</p>
        </div>

        <div className="contact-info-card location-card">
          <div className="info-icon">📍</div>
          <h3>Location</h3>
          <p className="location-text">{contactInfo.location}</p>
          <p className="info-subtitle">Available for site visits</p>
        </div>
      </section>

      <section className="panel social-links-section">
        <div className="social-header">
          <h2>Connect with me</h2>
          <p>Follow my work and professional updates on LinkedIn and Behance.</p>
        </div>
        <div className="social-links">
          <a 
            href={contactInfo.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-link linkedin"
          >
            <div className="social-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </div>
            <div className="social-content">
              <h3>LinkedIn</h3>
              <p>Professional updates &amp; network</p>
            </div>
            <span className="social-arrow">→</span>
          </a>

          <a 
            href={contactInfo.behance} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-link behance"
          >
            <div className="social-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
                <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.665 1.45.665 2.36 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.48.348-1.05.6-1.67.767-.61.165-1.252.254-1.91.254H0V4.51h6.938v-.007zM16.94 16.665c.44.428 1.073.643 1.894.643.59 0 1.1-.148 1.53-.447.424-.29.68-.61.78-.94h2.588c-.403 1.28-1.048 2.2-1.9 2.75-.85.56-1.884.83-3.08.83-.837 0-1.584-.13-2.272-.4-.673-.27-1.24-.65-1.72-1.14-.464-.49-.823-1.084-1.05-1.78-.24-.71-.36-1.49-.36-2.36 0-.83.13-1.59.36-2.29.24-.71.585-1.316 1.05-1.83.48-.52 1.054-.92 1.72-1.185.673-.266 1.417-.4 2.272-.4.94 0 1.756.17 2.458.52.7.348 1.278.82 1.73 1.42.448.596.76 1.29.94 2.08.165.79.225 1.63.165 2.51h-7.69c0 .84.28 1.632.71 2.065l-.05.03zm-10.24.05c.317 0 .62-.03.906-.093.29-.06.548-.165.763-.3.21-.135.39-.328.52-.583.13-.24.19-.57.19-.96 0-.75-.22-1.29-.64-1.62-.43-.32-.99-.48-1.69-.48H3.24v4.05H6.7v-.03zm13.607-5.65c-.352-.385-.94-.59-1.657-.59-.468 0-.855.074-1.166.238-.302.15-.55.35-.74.59-.19.24-.317.48-.376.705-.06.226-.1.43-.12.65h4.99c-.07-.75-.57-1.207-.93-1.583v-.01zM6.92 10.364c.58 0 1.063-.17 1.428-.52.364-.35.545-.84.545-1.47 0-.76-.23-1.31-.68-1.65-.45-.34-1.01-.51-1.68-.51H3.24v4.15h3.68zm9.534-5.7v1.42h5.31V4.664h-5.31z"/>
              </svg>
            </div>
            <div className="social-content">
              <h3>Behance</h3>
              <p>Portfolio &amp; creative work</p>
            </div>
            <span className="social-arrow">→</span>
          </a>
        </div>
      </section>

      <section className="panel contact-form-section">
        <div className="form-header">
          <h2>Tell me about your project</h2>
          <p>Fill out the form below and I&apos;ll get back to you within 48 hours.</p>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Tell me your name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="projectType">Project Type</label>
            <select
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              required
            >
              <option value="">Select a project type</option>
              <option value="Residential">Residential / Home</option>
              <option value="Commercial">Commercial / Hospitality</option>
              <option value="Office">Office / Workspace</option>
              <option value="Factory">Factory / Industrial</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-group full">
            <label htmlFor="message">Tell me about your space</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Describe how you live/work and what calm means to you..."
              rows="6"
              required
            ></textarea>
          </div>

          <button type="submit" className={`button ${submitted ? 'submitted' : ''}`}>
            {submitted ? '✓ Message sent!' : 'Send inquiry'}
          </button>
        </form>
      </section>

      <section className="panel contact-process">
        <h2>How I work with you</h2>
        <div className="process-steps">
          <div className="process-step">
            <div className="step-number">1</div>
            <h4>Understanding</h4>
            <p>We discuss your space, lifestyle, and what calm means to you.</p>
          </div>
          <div className="process-step">
            <div className="step-number">2</div>
            <h4>Planning</h4>
            <p>I create initial concepts focused on light, material, and flow.</p>
          </div>
          <div className="process-step">
            <div className="step-number">3</div>
            <h4>Refinement</h4>
            <p>We refine details together, ensuring the design feels right.</p>
          </div>
          <div className="process-step">
            <div className="step-number">4</div>
            <h4>Execution</h4>
            <p>I oversee construction, working closely with craftspeople on-site.</p>
          </div>
        </div>
      </section>

      <section className="panel contact-closing">
        <p className="eyebrow">Ready to get started?</p>
        <h2>Let&apos;s talk about your vision.</h2>
        <p>I&apos;m excited to learn about your space and how we can make it feel calm, honest, and truly yours.</p>
        <div className="closing-actions">
          <a href={`mailto:${contactInfo.email}`} className="button">
            Start the conversation
          </a>
          <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="button secondary">
            Call me instead
          </a>
        </div>
      </section>
    </div>
  )
}

export default Contact
