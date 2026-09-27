function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-text">

        <p className="small-title">
          Hello, I'm
        </p>

        <h1>
          Menna Allah <span>Salem</span>
        </h1>

        <h2>
          Frontend Developer
        </h2>

        <p className="hero-description">
          I'm a Computer Science student passionate about
          building modern, responsive and user-friendly websites
          using React, TypeScript and modern web technologies.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary-btn">
            View My Work
          </a>

          <a href="#contact" className="btn outline-btn">
            Contact Me
          </a>
        </div>

        <div className="social-links">
          <a href="#" target="_blank">GitHub</a>
          <a href="#" target="_blank">LinkedIn</a>
        </div>

      </div>

      <div className="hero-card">
        <div className="avatar">
          MS
        </div>
      </div>

    </section>
  );
}

export default Hero;