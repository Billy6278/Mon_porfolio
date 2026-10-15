import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { profile } from '../data/portfolio';
import ParticleBackground from '../components/ui/ParticleBackground';

function Hero() {
  function scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <section id="accueil" className="hero">
      <ParticleBackground />

      <div className="hero__content">
        <motion.div
          className="hero__text"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="hero__greeting">Bonjour, je suis</span>
          <h1 className="hero__name">Billy Nankouman Keita</h1>
          <p className="hero__description">
            Je conçois et développe des expériences numériques qui allient performance, simplicité et élégance. Passionné par l'innovation et la résolution de problèmes, je m'engage à créer des solutions fiables, intuitives et durables, en plaçant toujours l'utilisateur au cœur de chaque projet.
          </p>
          <p className="hero__description">
            Bienvenue dans mon univers, où chaque réalisation reflète mon engagement envers l'excellence, l'apprentissage continu et la création de valeur à travers la technologie.
          </p>

          <div className="hero__actions">
            <button type="button" className="btn btn--primary" onClick={() => scrollTo('projets')}>
              Voir mes projets
              <ArrowRight size={18} />
            </button>
            <a href={profile.cvUrl} className="btn btn--outline" download>
              <Download size={18} />
              Télécharger CV
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero__card glass-card">
            <div className="hero__card-glow" />
            <div className="hero__profile-image">
              <img src="/images/proflil.png" alt={profile.name} />
            </div>
            <div className="hero__card-info">
              <span className="hero__card-status">
                <span className="hero__status-dot" />
                Disponible pour projets
              </span>
              <p className="hero__card-title">{profile.title}</p>
              {profile.role && <p className="hero__card-role">{profile.role}</p>}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
