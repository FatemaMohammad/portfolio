import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="container about__inner">
        <div className="about__photo" aria-hidden="true">
          <span className="about__photo-initials">F</span>
        </div>
        <div className="about__content">
          <h2 className="section-heading">About</h2>

          <p className="about__bio">
            I&apos;m a Software Engineer currently working as an AI & Software
            Consultant at Dynamics Inspire, where I focus on AI solutions,
            workflow automation, and software integrations.

            My background includes software development with C#, .NET,
            React, TypeScript, and REST APIs, as well as hands-on
            experience in software testing and quality assurance.

            I enjoy building practical software solutions, solving
            technical challenges, and continuously developing my
            skills in software engineering and AI.
          </p>

        </div>
      </div>
    </section>
  );
}

export default About;
