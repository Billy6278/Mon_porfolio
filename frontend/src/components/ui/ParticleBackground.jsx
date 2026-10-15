import { motion, useScroll, useTransform } from 'framer-motion';

function ParticleBackground() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 80]);
  const y2 = useTransform(scrollY, [0, 500], [0, -60]);

  return (
    <div className="particle-bg" aria-hidden="true">
      <motion.div className="particle-bg__orb particle-bg__orb--1" style={{ y: y1 }} />
      <motion.div className="particle-bg__orb particle-bg__orb--2" style={{ y: y2 }} />
      <motion.div className="particle-bg__orb particle-bg__orb--3" />
      <div className="particle-bg__grid" />
      {[...Array(20)].map((_, i) => (
        <motion.span
          key={i}
          className="particle-bg__dot"
          style={{
            left: `${(i * 17 + 5) % 95}%`,
            top: `${(i * 23 + 10) % 90}%`,
          }}
          animate={{
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 3 + (i % 3),
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}
    </div>
  );
}

export default ParticleBackground;
