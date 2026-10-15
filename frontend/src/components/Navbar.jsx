import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { navLinks, profile } from '../data/portfolio';
import { useScrollSpy } from '../hooks/useScrollSpy';
import ThemeToggle from './ui/ThemeToggle';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useScrollSpy(navLinks.map((l) => l.id), 120);

  function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  }

  return (
    <nav className="navbar" role="navigation" aria-label="Navigation principale">
      <div className="navbar__inner">
        <button
          type="button"
          className="navbar__brand"
          onClick={() => scrollToSection('accueil')}
          aria-label="Retour à l'accueil"
        >
          <span className="navbar__logo">BNK</span>
          <span className="navbar__logo-text">Portfolio</span>
        </button>

        <ul className="navbar__links">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                type="button"
                className={`navbar__link ${activeId === link.id ? 'navbar__link--active' : ''}`}
                onClick={() => scrollToSection(link.id)}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="navbar__actions">
          <ThemeToggle />
          <a href={profile.cvUrl} className="btn btn--primary btn--sm navbar__cv" download>
            <Download size={16} />
            <span>CV</span>
          </a>
          <button
            type="button"
            className="navbar__burger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="navbar__mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="navbar__mobile-links">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <button
                    type="button"
                    className={`navbar__mobile-link ${activeId === link.id ? 'navbar__link--active' : ''}`}
                    onClick={() => scrollToSection(link.id)}
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </ul>
            <a href={profile.cvUrl} className="btn btn--primary btn--full" download>
              <Download size={16} />
              Télécharger le CV
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
