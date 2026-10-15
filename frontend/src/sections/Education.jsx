import { GraduationCap, University, Award } from 'lucide-react';
import { education } from '../data/portfolio';
import { SectionTitle, ScrollReveal } from '../components/ui/ScrollReveal';

const iconMap = {
  graduation: GraduationCap,
  university: University,
  certificate: Award,
};

function Education() {
  return (
    <section id="formation" className="section education-section">
      <div className="container">
        <SectionTitle
          subtitle="Formation"
          title="Parcours académique"
          description="Un parcours de formation solide pour des compétences techniques pointues."
        />

        <div className="education-timeline">
          {education.map((item, index) => {
            const Icon = iconMap[item.icon] || GraduationCap;
            return (
              <ScrollReveal key={item.id} delay={index * 0.1}>
                <div className="education-item">
                  <div className="education-item__marker">
                    <div className="education-item__icon">
                      <Icon size={20} />
                    </div>
                    {index < education.length - 1 && <div className="education-item__line" />}
                  </div>
                  <div className="education-item__content glass-card">
                    <span className="education-item__period">{item.period}</span>
                    <h3>{item.degree}</h3>
                    <h4>{item.institution}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Education;
