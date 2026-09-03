import { experience } from '../../data/experience';
import './Experience.css';

function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-heading">Experience</h2>
        <ol className="experience__list">
          {experience.map((item, index) => (
            <li key={index} className="experience-card">
              <div className="experience-card__header">
                <h3 className="experience-card__role">{item.role}</h3>
                <span className="experience-card__period">{item.period}</span>
              </div>
              <p className="experience-card__company">{item.company}</p>
              <p className="experience-card__description">{item.description}</p>
              {item.highlights && item.highlights.length > 0 && (
                <ul className="experience-card__highlights">
                  {item.highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex}>{highlight}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Experience;
