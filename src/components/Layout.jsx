import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import profileImage from '../assets/mahesh-profile.jpg'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/work', label: 'Work' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
]

function Layout() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  return (
    <div className="page-shell">
      <header className="site-header">
        <div className="brand">
          <div className="brand-avatar">
            <img 
              src={profileImage}
              alt="Mahesh Bhagwat"
              className="avatar-image"
            />
          </div>
          <div className="brand-info">
            <p className="eyebrow">Mahesh Bhagwat</p>
            <p className="role">Senior Interior Designer</p>
          </div>
        </div>
        <nav className="nav-links" aria-label="Primary">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              end={link.to === '/'}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main className="site-main">
        <Outlet />
      </main>

      <footer className="site-footer">
        <p>Thoughtful interiors shaped with care and patience.</p>
        <p className="footer-note">© {new Date().getFullYear()} Mahesh Bhagwat</p>
      </footer>
    </div>
  )
}

export default Layout
