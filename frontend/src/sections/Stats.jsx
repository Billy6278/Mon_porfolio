import { stats } from '../data/portfolio';
import StatCard from '../components/ui/StatCard';
import { ScrollReveal } from '../components/ui/ScrollReveal';

function Stats() {
  return (
    <section className="stats-section">
      <div className="container">
        <ScrollReveal>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <StatCard key={stat.id} stat={stat} index={index} />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default Stats;
