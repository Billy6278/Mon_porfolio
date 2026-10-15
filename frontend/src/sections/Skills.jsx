import { useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  Code2, Server, Smartphone, Database, Wrench, Cloud,
} from 'lucide-react';
import { useFetch } from '../hooks/useFetch';
import { getSkills } from '../services/skillService';
import {
  fallbackSkills, skillCategories, techCloud, getSkillLevelLabel,
} from '../data/portfolio';
import SkillBar from '../components/SkillBar';
import LoadingSpinner from '../components/LoadingSpinner';
import { SectionTitle, ScrollReveal } from '../components/ui/ScrollReveal';

const categoryIcons = {
  Frontend: Code2,
  Backend: Server,
  Mobile: Smartphone,
  'Base de données': Database,
  Outils: Wrench,
  Cloud: Cloud,
};

function Skills() {
  const { data: apiSkills, loading, error } = useFetch(getSkills, []);
  const skills = apiSkills.length > 0 ? apiSkills : fallbackSkills;

  const skillsByCategory = useMemo(() => {
    const grouped = {};
    skillCategories.forEach((cat) => { grouped[cat] = []; });
    skills.forEach((skill) => {
      const cat = skill.category || 'Outils';
      if (!grouped[cat]) grouped[cat] = [];
      grouped[cat].push(skill);
    });
    return grouped;
  }, [skills]);

  return (
    <section id="competences" className="section skills-section">
      <div className="container">
        <SectionTitle
          subtitle="Compétences"
          title="Technologies & Outils"
          description="Un éventail de compétences techniques pour donner vie à vos projets."
        />

        {loading && <LoadingSpinner label="Chargement des compétences..." />}

        {!loading && (
          <div className="skills-categories">
            {skillCategories.map((category, catIndex) => {
              const categorySkills = skillsByCategory[category];
              if (!categorySkills?.length) return null;
              const Icon = categoryIcons[category] || Code2;

              return (
                <ScrollReveal key={category} delay={catIndex * 0.05}>
                  <div className="skills-category glass-card">
                    <div className="skills-category__header">
                      <Icon size={22} />
                      <h3>{category}</h3>
                    </div>
                    <div className="skills-category__list">
                      {categorySkills.map((skill, i) => (
                        <SkillBar key={skill.id || skill.name} skill={skill} index={i} />
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        )}

        {error && (
          <p className="skills-fallback-note">
            Données locales affichées — API indisponible.
          </p>
        )}

        <ScrollReveal className="tech-cloud">
          <h3 className="tech-cloud__title">Nuage de technologies</h3>
          <div className="tech-cloud__tags">
            {techCloud.map((tech, i) => (
              <motion.span
                key={tech}
                className="tech-cloud__tag"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                whileHover={{ scale: 1.1, y: -4 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default Skills;
