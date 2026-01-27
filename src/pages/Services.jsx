import { services } from '../data/siteContent'

function Services() {
  return (
    <div className="stack gap-lg narrow">
      <section className="panel">
        <p className="eyebrow">Services</p>
        <h1>Practical, attentive interior design services.</h1>
        <p className="lede">
          I help clients move from a clear brief to a finished interior that feels warm, ordered, and considerate of how
          they live or work every day.
        </p>
      </section>

      <section className="panel">
        <div className="grid two">
          {services.map((service) => (
            <div key={service.title} className="pill-card">
              <h3>{service.title}</h3>
              <p>{service.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="panel accent">
        <div className="panel-header">
          <h2>Have a project in mind?</h2>
          <p className="small">I am happy to review early plans or help shape a brief.</p>
        </div>
      </section>
    </div>
  )
}

export default Services
