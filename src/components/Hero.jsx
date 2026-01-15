import './Hero.css';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to My Portfolio</h1>
        <p className="hero-subtitle">
          I'm a passionate developer creating amazing web experiences
        </p>
        <button className="cta-button">View My Work</button>
      </div>
    </section>
  );
}

export default Hero;
