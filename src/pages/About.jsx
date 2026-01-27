import profileImage from '../assets/mahesh-profile.jpg'
import { useEffect } from 'react'

function About() {
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

    document.querySelectorAll('.panel, .profile-showcase, .experience-item, .skills-category, .philosophy-card').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="stack gap-lg">
      {/* Hero Section with Profile */}
      <section className="about-hero">
        <div className="about-hero-content">
          <p className="eyebrow">About Me</p>
          <h1>Interior design as a calm, careful craft.</h1>
          <p className="lede">Creative designer focused on spaces that breathe and feel honest. 5+ years creating residential, commercial, and industrial interiors.</p>
        </div>
      </section>

      {/* Profile Card Section */}
      <section className="panel">
        <div className="profile-showcase">
          <div className="profile-image-section">
            <div className="profile-image-container">
              <img 
                src={profileImage}
                alt="Mahesh Bhagwat - Senior Interior Designer" 
                className="profile-image"
              />
            </div>
            <div className="profile-stats">
              <div className="stat-item">
                <div className="stat-icon">📐</div>
                <div className="stat-content">
                  <div className="stat-value">50+</div>
                  <div className="stat-label">Projects</div>
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-icon">🎓</div>
                <div className="stat-content">
                  <div className="stat-value">5+</div>
                  <div className="stat-label">Years</div>
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-icon">🌍</div>
                <div className="stat-content">
                  <div className="stat-value">4</div>
                  <div className="stat-label">Sectors</div>
                </div>
              </div>
            </div>
          </div>
          <div className="profile-info-section">
            <div className="info-block">
              <h3>Mahesh Bhagwat</h3>
              <p className="intro-subtitle">Senior Interior Designer | 3D Visualizer | UI/UX Designer</p>
            </div>
            <div className="info-block">
              <h4>About Me</h4>
              <p className="intro-description">
                Creative interior designer with hands-on experience in residential and commercial projects, combined with expertise in UI/UX design principles. I focus on spaces that feel grounded and welcoming—homes, offices, hospitality corners, and small factories that value clarity and comfort.
              </p>
            </div>
            <div className="contact-section">
              <h4>Get in Touch</h4>
              <div className="contact-badges">
                <a href="mailto:maheshbhagwat90@gmail.com" className="badge-large">
                  <span className="badge-icon">✉️</span>
                  <div>
                    <div className="badge-label">Email</div>
                    <div className="badge-value">maheshbhagwat90@gmail.com</div>
                  </div>
                </a>
                <a href="tel:+919552653064" className="badge-large">
                  <span className="badge-icon">📱</span>
                  <div>
                    <div className="badge-label">Phone</div>
                    <div className="badge-value">+91 9552653064</div>
                  </div>
                </a>
                <div className="badge-large">
                  <span className="badge-icon">📍</span>
                  <div>
                    <div className="badge-label">Location</div>
                    <div className="badge-value">Pune, Maharashtra</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="panel">
        <div className="panel-header">
          <h2>My Journey</h2>
          <p className="small">From residential to industrial design, always focused on the human experience.</p>
        </div>
        <div className="journey-timeline">
          <div className="journey-item">
            <div className="journey-marker">
              <div className="journey-dot"></div>
            </div>
            <div className="journey-content">
              <div className="journey-number">01</div>
              <h4>The Beginning</h4>
              <p>
                I started in residential work over a decade ago, learning how light, air, and material choices fundamentally change the pace and feel of a home.
              </p>
            </div>
          </div>
          <div className="journey-item">
            <div className="journey-marker">
              <div className="journey-dot"></div>
            </div>
            <div className="journey-content">
              <div className="journey-number">02</div>
              <h4>Evolution</h4>
              <p>
                Over time, I carried that sensitivity into offices, hospitality spaces, and industrial projects where people need to focus, share, and unwind.
              </p>
            </div>
          </div>
          <div className="journey-item">
            <div className="journey-marker">
              <div className="journey-dot"></div>
            </div>
            <div className="journey-content">
              <div className="journey-number">03</div>
              <h4>Collaboration</h4>
              <p>
                I believe honest work happens through collaboration. I enjoy partnering with carpenters, metalworkers, and site teams to refine details together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Philosophy Section */}
      <section className="panel">
        <div className="panel-header">
          <h2>Design Philosophy</h2>
        </div>
        <div className="philosophy-cards">
          <div className="philosophy-card-large">
            <div className="philosophy-header">
              <div className="philosophy-icon">✨</div>
              <h4>Calm Through Proportion</h4>
            </div>
            <p>Calm comes from proportion, storage, and light. I prioritize clear circulation, generous thresholds, and materials that age with dignity.</p>
          </div>
          <div className="philosophy-card-large">
            <div className="philosophy-header">
              <div className="philosophy-icon">⏱️</div>
              <h4>Paced Decision Making</h4>
            </div>
            <p>Each project is paced to allow the right decisions instead of rushed ones. Details matter when there's time to think.</p>
          </div>
          <div className="philosophy-card-large">
            <div className="philosophy-header">
              <div className="philosophy-icon">🤍</div>
              <h4>Warmth, Not Noise</h4>
            </div>
            <p>I believe warm spaces do not shout—they invite. My role is to design interiors that feel inevitable for the people who live and work in them.</p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="panel">
        <div className="panel-header">
          <h2>Professional Experience</h2>
          <p className="small">A decade of thoughtful interior design across diverse sectors.</p>
        </div>
        <div className="experience-container">
          <ul className="timeline">
          <li>
            <div className="timeline-year">Nov 2025—Present</div>
            <div>
              <p className="timeline-role">Senior Interior Designer</p>
              <p className="muted">Project Concepts, Pune, MH (On-site)</p>
              <p className="timeline-detail">
                Developed interior design concepts for commercial offices, industrial facilities, and factory spaces aligned with client requirements, brand identity, and functional needs. Prepared space planning, layout designs, and zoning plans ensuring efficient workflow, safety, and optimal utilization of space. Designed office interiors, including workstations, cabins, conference rooms, reception areas, and support spaces.
              </p>
            </div>
          </li>
          <li>
            <div className="timeline-year">Dec 2023—Sept 2025</div>
            <div>
              <p className="timeline-role">Interior Designer</p>
              <p className="muted">WellThenSo, Goa (On-site)</p>
              <p className="timeline-detail">
                Handled complete interior projects from concept to execution, including client communication and design development. Coordinated with vendors and contractors to ensure timely and quality site execution.
              </p>
            </div>
          </li>
          <li>
            <div className="timeline-year">Dec 2022—Sept 2023</div>
            <div>
              <p className="timeline-role">Interior Designer</p>
              <p className="muted">Studio Kriyaa, Pune (Freelancing)</p>
              <p className="timeline-detail">
                Efficiently arranged and organized interior spaces to meet client needs, considering traffic flow, functionality, and aesthetics. Communicated design ideas to clients through presentations, mood boards, and visual aids.
              </p>
            </div>
          </li>
          <li>
            <div className="timeline-year">Sept 2021—Nov 2022</div>
            <div>
              <p className="timeline-role">Interior Designer / 3D Visualizer</p>
              <p className="muted">Invision Architects, Jaipur (On-site)</p>
              <p className="timeline-detail">
                Assisted senior interior designers in developing design concepts, layouts, and detailed drawings for residential, commercial, and office projects. Selected appropriate materials for flooring, walls, ceilings, and other surfaces.
              </p>
            </div>
          </li>
          <li>
            <div className="timeline-year">Mar 2021—Aug 2021</div>
            <div>
              <p className="timeline-role">Assistant Interior Designer</p>
              <p className="muted">Horizon Architects, Mumbai (Remote)</p>
              <p className="timeline-detail">
                Prepared and updated 2D drawings, layouts, and basic working drawings under guidance. Helped in creating mood boards, material boards, and concept presentations for client discussions.
              </p>
            </div>
          </li>
        </ul>
        </div>
      </section>

      {/* Education Section */}
      <section className="panel">
        <div className="panel-header">
          <h2>Education</h2>
          <p className="small">Academic background and formal training.</p>
        </div>
        <div className="education-timeline">
          <div className="education-item">
            <div className="education-marker">
              <div className="education-dot"></div>
            </div>
            <div className="education-content">
              <div className="education-year">2019 - 2021</div>
              <h4>Bachelor's in Interior Design</h4>
              <p className="education-institute">Vishwakarma University, Pune</p>
            </div>
          </div>

          <div className="education-item">
            <div className="education-marker">
              <div className="education-dot"></div>
            </div>
            <div className="education-content">
              <div className="education-year">2014 - 2016</div>
              <h4>Higher Secondary Education</h4>
              <p className="education-institute">R.B. Narayanrao Boravake College, Shrirampur, MH</p>
            </div>
          </div>

          <div className="education-item">
            <div className="education-marker">
              <div className="education-dot"></div>
            </div>
            <div className="education-content">
              <div className="education-year">2004 - 2014</div>
              <h4>Primary Education</h4>
              <p className="education-institute">St. Mary's School, Newasa</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Tools Section */}
      <section className="panel">
        <div className="panel-header">
          <h2>Skills & Tools</h2>
          <p className="small">The technologies and tools I use to bring designs to life.</p>
        </div>
        <div className="skills-grid">
          <div className="skill-card">
            <div className="skill-icon">🖥️</div>
            <h3>Design Software</h3>
            <p>Autodesk AutoCAD, Google SketchUp</p>
          </div>
          <div className="skill-card">
            <div className="skill-icon">🎨</div>
            <h3>Visualization</h3>
            <p>Lumion, Vray, Enscape</p>
          </div>
          <div className="skill-card">
            <div className="skill-icon">📊</div>
            <h3>Production</h3>
            <p>Photoshop, InDesign, MS Office</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
