import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <p>
            I'm a passionate developer with expertise in building modern web applications.
            I love creating elegant solutions to complex problems and continuously learning
            new technologies.
          </p>
          <div className="skills">
            <h3>Skills</h3>
            <div className="skill-tags">
              <span className="skill-tag">React</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">HTML/CSS</span>
              <span className="skill-tag">Node.js</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
