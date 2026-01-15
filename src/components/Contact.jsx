import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-description">
          I'm always open to discussing new projects, creative ideas or opportunities.
        </p>
        <div className="contact-links">
          <a href="mailto:your.email@example.com" className="contact-link">
            Email
          </a>
          <a href="https://github.com/yourusername" className="contact-link" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/in/yourusername" className="contact-link" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
