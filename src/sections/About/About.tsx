
import profileImage from '../../images/profile.jpg';
import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="container about__inner">
        <div className="about__photo">
          <img
            src={profileImage}
            alt="Portrait of Fatema"
            className="about__photo-image"
          />
        </div>

        <div className="about__content">
          <h2 className="section-heading">About</h2>

          <div className="about__bio">
            <p>
              I&apos;m a Software Engineer currently working as an
              AI &amp; Software Consultant at Dynamics Inspire,
              focusing on AI solutions, workflow automation,
              and software integrations.
            </p>

            <p>
              My background includes software development with
              C#, .NET, React, TypeScript, and REST APIs,
              alongside hands-on experience in software
              testing and quality assurance.
            </p>

            <p>
              I enjoy building practical software solutions,
              solving technical challenges, and continuously
              developing my skills in software engineering and AI.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
