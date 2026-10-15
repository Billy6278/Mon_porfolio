import { Mail, ArrowUp } from 'lucide-react';
import { GitHubIcon } from './icons/GitHubIcon';
import { LinkedInIcon } from './icons/LinkedInIcon';
import { navLinks, profile } from '../data/portfolio';

function Footer() {
  function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <div className="footer__logo">
            <span className="navbar__logo">BNK</span>
            <span>Portfolio</span>
          </div>
          <p className="footer__description">
            Développeur Full Stack passionné par la création d&apos;expériences numériques
            élégantes, performantes et accessibles.
          </p>
          <div className="footer__socials">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <GitHubIcon size={20} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LinkedInIcon size={20} />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="footer__links">
          <h3>Liens rapides</h3>
          <ul>
            {navLinks.map((link) => (
              <li key={link.id}>
                <button type="button" onClick={() => scrollToSection(link.id)}>
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__contact">
          <h3>Contact</h3>
          <p>{profile.email}</p>
          <p>{profile.phone}</p>
          <p>{profile.location}</p>
        </div>
      </div>

      <div className="footer__bottom">
        <p>&copy; {new Date().getFullYear()} {profile.name}. Tous droits réservés.</p>
        <button type="button" className="footer__top-btn" onClick={scrollToTop}>
          <ArrowUp size={16} />
          Retour en haut
        </button>
      </div>
    </footer>
  );
}

export default Footer;
