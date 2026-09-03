import { skillCategories } from '../../data/skills';
import './Skills.css';

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-heading">Skills</h2>
        <ul className="skills__grid">
          {skillCategories.map((group) => (
            <li key={group.category} className="skill-card">
              <h3 className="skill-card__category">{group.category}</h3>
              <ul className="skill-card__list">
                {group.skills.map((skill) => (
                  <li key={skill} className="skill-card__pill">
                    {skill}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skills;
