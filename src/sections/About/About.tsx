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
            I&apos;m a Software Engineer with a background in C#/.NET and full-stack web
            development, currently focused on building reliable, well-tested applications with
            React on the front end. I care as much about how software is verified as how it&apos;s
            built — combining hands-on development with a strong QA and testing mindset to catch
            issues before they reach users. I enjoy working across the stack, from designing clean
            APIs to shaping accessible, maintainable interfaces, and I&apos;m looking for
            opportunities to bring that combination of engineering and quality focus to a team in
            Denmark.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
