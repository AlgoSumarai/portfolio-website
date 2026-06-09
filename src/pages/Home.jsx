
import './Home.css'
import graduationImage from '../assets/avatar/graduation_image.svg'
import ProjectsCarousel from '../components/ProjectsCarousel'

function Home() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (!section) return

    const header = document.querySelector('header, .site-header, .header')
    const offset = header?.offsetHeight ? header.offsetHeight + 24 : 72
    const start = window.pageYOffset
    const target = section.getBoundingClientRect().top + start - offset
    const distance = target - start
    const duration = 800
    let startTime = null

    const ease = (t) => 1 - Math.pow(1 - t, 3)

    const animateShake = () => {
      section.classList.add('scroll-target-shake')
      window.setTimeout(() => section.classList.remove('scroll-target-shake'), 420)
    }

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const time = Math.min(1, (timestamp - startTime) / duration)
      window.scrollTo(0, start + distance * ease(time))
      if (time < 1) {
        window.requestAnimationFrame(step)
      } else {
        animateShake()
      }
    }

    window.requestAnimationFrame(step)
  }

  return (
    <main id="top" className="home-page">
      <section className="hero">
        <div className="hero-copy-row">
          <img className="hero-avatar" src={graduationImage} alt="Graduation cap illustration" />
          <div className="hero-copy">
            {/* <p className="eyebrow">Resume & portfolio</p> */}
            <h1 className="hero-title">Sennelo Mulanga Gundo</h1>
            <p className="hero-text">
              Graduate Software Engineer with hands-on experience in C#, ASP.NET MVC, .NET Web API, SQL,
              Entity Framework, and LINQ. I build reliable backend systems and polished front-end
              interfaces while working across the software development life cycle.
            </p>
          <div className="hero-actions">
            <button className="primary-button" type="button" onClick={() => scrollToSection('experience')}>
              View experience
            </button>
            <button className="secondary-button" type="button" onClick={() => scrollToSection('contact')}>
              Contact me
            </button>
          </div>
        </div>
      </div>

        <div className="hero-visual">
          <div className="visual-copy">
            <p className="visual-copy-label">Software Engineer</p>
            <div className="language-logos" role="list" aria-label="Programming languages">
              <span className="language-logo language-csharp" role="listitem">C#</span>
              <span className="language-logo language-java" role="listitem">Java</span>
              <span className="language-logo language-javascript" role="listitem">JavaScript</span>
              <span className="language-logo language-python" role="listitem">Python</span>
              <span className="language-logo language-sql" role="listitem">SQL</span>
            </div>
          </div>
        </div>

        <div className="hero-stat-grid">
          <article className="stat-card">
            <p className="stat-value">2025</p>
            <p className="stat-label">BSc Information Technology</p>
          </article>
          <article className="stat-card">
            <p className="stat-value">Junior</p>
            <p className="stat-label">Software Engineer</p>
          </article>
          <article className="stat-card">
            <p className="stat-value" style={{ fontSize: '1.45rem' }}>
              mgsennelo@gmail.com
            </p>
            <p className="stat-label">Email</p>
          </article>
        </div>
      </section>

      <section id="summary">
        <h2 className="section-heading">Summary</h2>
        <p className="section-subtitle">
          Graduate Software Engineer experienced in ASP.NET MVC, .NET Web API, SQL, Entity Framework,
          and LINQ. Comfortable working on bug fixes, testing, and learning existing codebases in
          collaborative environments.
        </p>
      </section>

      
      <section id="education" style={{ marginTop: '32px' }}>
        <h2 className="section-heading">Education</h2>
        <div className="project-grid">
          <article className="project-card">
            <div>
              <h3 className="project-title">University of Johannesburg</h3>
              <p className="project-text">
                Bachelor of Science in Information Technology
                <br />Auckland Park, Johannesburg
                <br />Feb. 2021 – Jul. 2025
              </p>
            </div>
          </article>
        </div>
      </section>

      <section id="experience" style={{ marginTop: '32px' }}>
        <h2 className="section-heading">Experience</h2>
        <div className="project-grid">
          <article className="project-card">
            <h3 className="project-title">Junior Software Engineer</h3>
            <p className="project-text">
              TheRad · Remote | Sep. 2025 – Apr. 2026
            </p>
            <p className="project-text">
              • Solely developed a web-based learning platform with 26 math games using HTML, CSS, and JavaScript.
              <br />• Assisted in building a modular ERP system for a manufacturing client with Laravel and Filament.
              <br />• Maintained and debugged an existing Joomla/PHP production site, improving stability.
              <br />• Gained experience across development, debugging, testing, and deployment.
            </p>
          </article>
        </div>
      </section>

      

      <section id="projects" style={{ marginTop: '32px' }}>
        <h2 className="section-heading">Projects</h2>
        <ProjectsCarousel />
      </section>

      <section id="skills">
        <h2 className="section-heading">Programming skills</h2>
        <div className="feature-grid">
          <article className="feature-card">
            <h3 className="feature-title">Languages</h3>
            <div className="language-logos" role="list" aria-label="Programming languages">
              <span className="language-logo language-csharp" role="listitem">C#</span>
              <span className="language-logo language-java" role="listitem">Java</span>
              <span className="language-logo language-javascript" role="listitem">JS</span>
              <span className="language-logo language-python" role="listitem">Py</span>
              <span className="language-logo language-sql" role="listitem">SQL</span>
            </div>
          </article>
          <article className="feature-card">
            <h3 className="feature-title">Web</h3>
            <div className="language-logos" role="list" aria-label="Web technologies">
              <span className="language-logo language-aspnet" role="listitem">ASP.NET</span>
              <span className="language-logo language-webapi" role="listitem">Web API</span>
              <span className="language-logo language-html" role="listitem">HTML</span>
              <span className="language-logo language-css" role="listitem">CSS</span>
            </div>
          </article>
          <article className="feature-card">
            <h3 className="feature-title">Databases & tools</h3>
            <div className="language-logos" role="list" aria-label="Databases and tools">
              <span className="language-logo language-sqlserver" role="listitem">SQL Server</span>
              <span className="language-logo language-mysql" role="listitem">MySQL</span>
              <span className="language-logo language-ef" role="listitem">Entity Framework</span>
              <span className="language-logo language-linq" role="listitem">LINQ</span>
              <span className="language-logo language-git" role="listitem">Git</span>
              <span className="language-logo language-postman" role="listitem">Postman</span>
            </div>
          </article>
        </div>
      </section>

      <section id="contact" className="contact-card">
        <div>
          <h2 className="contact-title">Get in touch</h2>
          <p className="contact-text">
            Email: <a className="contact-link-inline" href="mailto:mgsennelo@gmail.com">
              <svg className="contact-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M3 6.5C3 5.67157 3.67157 5 4.5 5H19.5C20.3284 5 21 5.67157 21 6.5V17.5C21 18.3284 20.3284 19 19.5 19H4.5C3.67157 19 3 18.3284 3 17.5V6.5Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3.75 7.5L12 13L20.25 7.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>mgsennelo@gmail.com</span>
            </a>
            <br />Mobile: <a className="contact-link-inline" href="tel:+27697949195">
              <svg className="contact-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M22 16.92V20C22 20.5304 21.7893 21.0391 21.4142 21.4142C20.0391 22.7893 16.2 22 7 12.8C-2.2 3.6-1.41071-0.839844  -0.0371094 0.414213C0.339112 0.789345 0.848687 1 1.37908 1H4.46C4.70354 1 4.93558 1.10536 5.09131 1.29289L7.36 4.32C7.5039 4.5039 7.55388 4.74541 7.49746 4.97717L7.06 7.88C7.01 8.092 6.872 8.287 6.672 8.42L4.94 9.83C6.811 13.001 10.999 17.189 14.17 19.06L15.58 17.33C15.71 17.13 15.9 16.99 16.11 16.94L19.01 16.5C19.2419 16.4448 19.4845 16.4955 19.669 16.64L22.7 18.91C22.8886 19.0709 22.9941 19.3013 22.9941 19.545V22.62C22.9941 23.152 22.7825 23.6642 22.4058 24.0418C22.0292 24.4185 21.517 24.6301 20.985 24.6301H18.125C17.8821 24.63 17.65 24.5246 17.4942 24.3371L15.225 21.31C15.0829 21.1254 15.0322 20.8828 15.0874 20.651L15.52 17.74C15.56 17.55 15.69 17.36 15.88 17.23L18.61 15.82C16.741 12.65 12.553 8.462 9.382 6.59L7.65 8.32C7.52 8.45 7.33 8.58 7.12 8.62L4.21 9.06C3.97907 9.11606 3.73652 9.06536 3.549 8.92086L0.52 6.65C0.330341 6.49012 0.224853 6.25974 0.224853 6.01602V3.08601C0.224853 2.554 0.436458 2.04177 0.81318 1.6641C1.1899 1.28643 1.70209 1.07484 2.2341 1.07484H5.1C5.33 1.07484 5.55 1.16 5.72 1.31L8.02 3.82C8.218 4.004 8.365 4.232 8.443 4.485L9.01 7.6C9.061 7.823 9.007 8.057 8.86 8.25L6.99 10.88C8.861 14.051 13.049 18.239 16.22 20.11L17.65 18.38C17.78 18.25 17.97 18.11 18.18 18.06L21.09 17.62C21.3219 17.565 21.5645 17.6151 21.75 17.76L24.78 19.03" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>069-794-9195</span>
            </a>
          </p>
          <p className="contact-text">
            GitHub: <a className="contact-link-inline" href="https://github.com/AlgoSumarai" target="_blank" rel="noopener noreferrer">
              <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.96 3.22 9.16 7.69 10.64.56.1.76-.24.76-.53 0-.26-.01-.95-.01-1.86-3.12.68-3.78-1.5-3.78-1.5-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 . +0.01 1.66.73 2.06 1.12.64 1.08 1.69.77 2.1.59.06-.46.25-.77.45-.95-2.49-.28-5.11-1.24-5.11-5.52 0-1.22.44-2.22 1.16-3-.12-.29-.5-1.46.11-3.05 0 0 .95-.3 3.12 1.15a10.86 10.86 0 0 1 2.84-.38c.96 0 1.93.13 2.84.38 2.17-1.45 3.12-1.15 3.12-1.15.61 1.59.23 2.76.11 3.05.72.78 1.16 1.78 1.16 3 0 4.29-2.63 5.24-5.13 5.52.26.22.49.65.49 1.31 0 .95-.01 1.72-.01 1.95 0 .29.2.64.77.53A11.26 11.26 0 0 0 23.25 11.75C23.25 5.48 18.27.5 12 .5z"/>
              </svg>
              <span>github.com/AlgoSumarai</span>
            </a>
            <br />LinkedIn: <a className="contact-link-inline" href="https://linkedin.com/in/mulangasennelo" target="_blank" rel="noopener noreferrer">
              <svg className="contact-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="1.2"/>
                <path d="M7 10.5V18" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                <path d="M7 7.5A1.5 1.5 0 1 0 7 4.5a1.5 1.5 0 0 0 0 3z" stroke="currentColor" strokeWidth="0.8"/>
                <path d="M12.5 18V13.5c0-1.5 1.2-2 2.2-2 1.2 0 2.3.9 2.3 2.4V18" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
              <span>linkedin.com/in/mulangasennelo</span>
            </a>
          </p>
        </div>
        {/* <a className="contact-link" href="mailto:mgsennelo@gmail.com">Send an email</a> */}
      </section>
    </main>
  )
}

export default Home
