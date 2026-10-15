import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { getSkillLevelLabel } from '../data/portfolio';

function SkillBar({ skill, index = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <div className="skill-bar" ref={ref}>
      <div className="skill-bar__header">
        <span className="skill-bar__name">{skill.name}</span>
        <div className="skill-bar__meta">
          <span className="skill-bar__level-label">{getSkillLevelLabel(skill.level)}</span>
          <span className="skill-bar__level">{skill.level}%</span>
        </div>
      </div>
      <div className="skill-bar__track">
        <motion.div
          className="skill-bar__fill"
          initial={{ width: 0 }}
          animate={{ width: isInView ? `${skill.level}%` : 0 }}
          transition={{ duration: 1, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}

export default SkillBar;
