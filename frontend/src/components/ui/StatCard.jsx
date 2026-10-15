import { motion } from 'framer-motion';
import { useCountUp } from '../../hooks/useCountUp';

function StatCard({ stat, index }) {
  const { count, ref } = useCountUp(stat.value);

  return (
    <motion.div
      ref={ref}
      className="stat-card glass-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
    >
      <span className="stat-card__value">
        {count}
        {stat.suffix}
      </span>
      <span className="stat-card__label">{stat.label}</span>
    </motion.div>
  );
}

export default StatCard;
