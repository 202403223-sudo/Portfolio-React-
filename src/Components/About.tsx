function About() {
  return (
    <section id="about" className="section">

      <div className="section-heading">
        <p>Get To Know Me</p>
        <h2>About <span>Me</span></h2>
      </div>

      <div className="about-container">

        <div className="about-text">

          <h3>
            Frontend Developer & Computer Science Student
          </h3>

          <p>
            I'm passionate about creating beautiful and
            interactive websites that provide a great user
            experience.
          </p>

          <p>
            I work with modern frontend technologies and enjoy
            transforming ideas and designs into functional
            websites.
          </p>

          <p>
            I'm always learning new technologies and improving
            my programming and problem-solving skills.
          </p>

        </div>

        <div className="about-cards">

          <div className="about-card">
            <div className="card-icon">💻</div>
            <h3>Frontend</h3>
            <p>Modern Web Development</p>
          </div>

          <div className="about-card">
            <div className="card-icon">⚛️</div>
            <h3>React</h3>
            <p>React & TypeScript</p>
          </div>

          <div className="about-card">
            <div className="card-icon">🎨</div>
            <h3>UI Design</h3>
            <p>Clean & Responsive Design</p>
          </div>

          <div className="about-card">
            <div className="card-icon">🚀</div>
            <h3>Learning</h3>
            <p>Always Improving</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;