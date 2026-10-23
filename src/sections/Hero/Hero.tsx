import './Hero.css';

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow">Hello, I'm Fatema</p>

          <h1 className="hero__heading">
            Software Engineer
          </h1>

          <p className="hero__subheading">
            AI & Software Consultant with experience in
            C#/.NET, React, TypeScript, and software testing.
            I enjoy building practical solutions that combine
            software engineering, AI, and automation.
          </p>

          <div className="hero__actions">
            <a href="#projects" className="hero__button">
              View Projects
            </a>

            <a
              href="https://github.com/FatemaMohammad"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__button hero__button--secondary"
            >
              GitHub
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
