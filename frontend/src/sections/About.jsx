import { MapPin, Mail, Phone, Globe, Target } from 'lucide-react';
import { profile, journey } from '../data/portfolio';
import { SectionTitle, ScrollReveal } from '../components/ui/ScrollReveal';

function About() {
  const infoItems = [
    { icon: MapPin, label: 'Localisation', value: profile.location },
    { icon: Mail, label: 'Email', value: profile.email },
    { icon: Phone, label: 'Téléphone', value: profile.phone },
    { icon: Globe, label: 'Langues', value: profile.languages.join(', ') },
    { icon: Target, label: 'Objectifs', value: profile.professionalGoals },
  ];

  return (
    <section id="apropos" className="section about">
      <div className="container">
        <SectionTitle
          subtitle="À propos"
          title="Qui suis-je ?"
          description="Passionné par le code et le design, je transforme des idées en solutions numériques concrètes."
        />

        <div className="about__grid">
          <ScrollReveal direction="right" className="about__photo-wrapper">
            <div className="about__photo glass-card">
              <div className="about__photo-glow" />
              <div className="about__avatar">
                <span>BNK</span>
              </div>
              <div className="about__photo-badge">
                <span>{profile.age} ans</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left" className="about__content">
            <h3 className="about__name">{profile.name}</h3>
            <p className="about__role">{profile.title}</p>

            <div className="about__info-grid">
              {infoItems.map(({ icon: Icon, label, value }) => (
                <div key={label} className="about__info-item">
                  <Icon size={18} className="about__info-icon" />
                  <div>
                    <span className="about__info-label">{label}</span>
                    <span className="about__info-value">{value}</span>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal className="about__timeline">
          <h3 className="about__section-heading">Mon parcours</h3>
          <div className="timeline">
            {journey.map((item, index) => (
              <div key={item.year} className="timeline__item">
                <div className="timeline__marker">
                  <span className="timeline__dot" />
                  {index < journey.length - 1 && <span className="timeline__line" />}
                </div>
                <div className="timeline__content glass-card">
                  <span className="timeline__year">{item.year}</span>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <div className="about__cards">
          {[
            { title: 'Valeurs', items: profile.values },
            { title: 'Vision', items: [profile.vision] },
            { title: 'Objectifs', items: profile.objectives },
          ].map((card, i) => (
            <ScrollReveal key={card.title} delay={i * 0.1}>
              <div className="about__card glass-card">
                <h3>{card.title}</h3>
                <ul>
                  {card.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
