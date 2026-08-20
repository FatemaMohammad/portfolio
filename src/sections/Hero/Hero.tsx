import './Hero.css';

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container hero__inner">
        <h1 className="hero__heading">
          Software Engineer building reliable, user-focused software.
        </h1>
        <p className="hero__subheading">
          I work across C#/.NET, React and software testing, combining development and QA
          experience to build maintainable, high-quality solutions.
        </p>
      </div>
    </section>
  );
}

export default Hero;
