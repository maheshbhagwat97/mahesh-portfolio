import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../data/siteContent'

const categories = ['All', 'Residential', 'Commercial', 'Office', 'Factory']

function Work() {
  const [selected, setSelected] = useState('All')

  const visibleProjects = useMemo(() => {
    if (selected === 'All') return projects
    return projects.filter((project) => project.category === selected)
  }, [selected])

  return (
    <div className="stack gap-lg">
      <section className="panel">
        <div className="panel-header">
          <div>
            <p className="eyebrow">Work</p>
            <h1>Selected projects</h1>
            <p className="lede">Homes, workplaces, hospitality corners, and factories shaped for comfort and clarity.</p>
          </div>
        </div>

        <div className="chip-row" role="tablist" aria-label="Project categories">
          {categories.map((cat) => (
            <button
              key={cat}
              className={selected === cat ? 'chip active' : 'chip'}
              onClick={() => setSelected(cat)}
              role="tab"
              aria-selected={selected === cat}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="panel">
        <div className="grid three">
          {visibleProjects.map((project) => (
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
                  <div className="tag-row">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                  <span className="text-link">View project</span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Work
