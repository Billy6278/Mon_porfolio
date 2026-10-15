import { Briefcase } from 'lucide-react';
import { experiences } from '../data/portfolio';
import { SectionTitle, ScrollReveal } from '../components/ui/ScrollReveal';

function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <SectionTitle
          subtitle="Expérience"
          title="Parcours professionnel"
          description="Des expériences variées qui ont forgé mon expertise technique et humaine."
        />

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <ScrollReveal key={exp.id} delay={index * 0.1}>
              <div className="experience-item glass-card">
                <div className="experience-item__header">
                  <div className="experience-item__logo">{exp.logo}</div>
                  <div>
                    <h3>{exp.position}</h3>
                    <h4>{exp.company}</h4>
                    <span className="experience-item__period">{exp.period}</span>
                  </div>
                  <Briefcase size={20} className="experience-item__icon" />
                </div>

                <ul className="experience-item__responsibilities">
                  {exp.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <div className="experience-item__techs">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="tag">{tech}</span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
