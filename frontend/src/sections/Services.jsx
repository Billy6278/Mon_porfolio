import { motion } from 'framer-motion';
import {
  Code2, Server, Smartphone, Palette, Cloud, Lightbulb, ArrowRight,
} from 'lucide-react';
import { services } from '../data/portfolio';
import { SectionTitle, ScrollReveal } from '../components/ui/ScrollReveal';

const iconMap = {
  code: Code2,
  server: Server,
  smartphone: Smartphone,
  palette: Palette,
  cloud: Cloud,
  consulting: Lightbulb,
};

function Services() {
  return (
    <section id="services" className="section services-section">
      <div className="container">
        <SectionTitle
          subtitle="Services"
          title="Ce que je propose"
          description="Des solutions sur mesure pour répondre à vos besoins numériques."
        />

        <div className="services-grid">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Code2;
            return (
              <ScrollReveal key={service.id} delay={i * 0.08}>
                <motion.div
                  className="service-card glass-card"
                  whileHover={{ y: -8, transition: { duration: 0.25 } }}
                >
                  <div className="service-card__icon">
                    <Icon size={28} />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul className="service-card__features">
                    {service.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                  <button type="button" className="service-card__btn">
                    En savoir plus
                    <ArrowRight size={16} />
                  </button>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
