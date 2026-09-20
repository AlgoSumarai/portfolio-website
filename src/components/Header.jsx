import { profile } from "../data/portfolio";

const scrollToSection = (e, id) => {
  e.preventDefault();

  document.querySelector(id)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a
          className="wordmark"
          href="#top"
          aria-label="Sennelo Mulanga Gundo, home"
        >
          <span className="monogram">
            SM<span>.</span>
          </span>
          <span className="wordmark-label">SOFTWARE ENGINEER</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#projects" 
          onClick={(e) => scrollToSection(e, "#projects")}>Projects</a>
          <a href="#experience"
           onClick={(e) => scrollToSection(e, "#experience")}>Experience</a>
          <a href="#skills" 
          onClick={(e) => scrollToSection(e, "#skills")}>Skills</a>
          <a href="#about" 
          onClick={(e) => scrollToSection(e, "#about")}>About</a>
          <a href="#contact" 
          onClick={(e) => scrollToSection(e, "#contact")}>Contact</a>
        </nav>
        <a className="header-resume" href={profile.resume}>
          Resume <span aria-hidden="true">↗</span>
        </a>
      </div>
    </header>
  );
}
