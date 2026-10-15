import { useState, useMemo } from 'react';
import { useFetch } from '../hooks/useFetch';
import { getProjects } from '../services/projectService';
import { fallbackProjects, projectFilters } from '../data/portfolio';
import ProjectCard from '../components/ProjectCard';
import LoadingSpinner from '../components/LoadingSpinner';
import { SectionTitle, ScrollReveal } from '../components/ui/ScrollReveal';

function matchesCategory(project, filter) {
  const techs = project.technologies?.map((t) => t.toLowerCase()) || [];
  const category = (project.category || '').toLowerCase();

  switch (filter) {
    case 'Frontend':
      return category.includes('frontend') || techs.some((t) =>
        ['react', 'vue', 'angular', 'next', 'typescript', 'tailwind'].some((k) => t.includes(k))
      );
    case 'Backend':
      return category.includes('backend') || techs.some((t) =>
        ['node', 'express', 'python', 'django', 'api'].some((k) => t.includes(k))
      );
    case 'Flutter':
      return techs.some((t) => t.includes('flutter')) || category.includes('flutter');
    case 'Node.js':
      return techs.some((t) => t.includes('node'));
    case 'React':
      return techs.some((t) => t.includes('react'));
    default:
      return false;
  }
}

function matchesFilter(project, filter) {
  if (filter === 'Tous') return true;
  if (filter === 'Autres') {
    return !['Frontend', 'Backend', 'Flutter', 'Node.js', 'React'].some(
      (f) => matchesCategory(project, f)
    );
  }
  return matchesCategory(project, filter);
}

function Projects() {
  const [activeFilter, setActiveFilter] = useState('Tous');
  const { data: apiProjects, loading, error } = useFetch(getProjects, []);
  const projects = apiProjects.length > 0 ? apiProjects : fallbackProjects;

  const filteredProjects = useMemo(
    () => projects.filter((p) => matchesFilter(p, activeFilter)),
    [projects, activeFilter]
  );

  return (
    <section id="projets" className="section projects-section">
      <div className="container">
        <SectionTitle
          subtitle="Projets"
          title="Mes réalisations"
          description="Une sélection de projets qui illustrent mon expertise et ma créativité."
        />

        <ScrollReveal>
          <div className="project-filters" role="tablist" aria-label="Filtrer les projets">
            {projectFilters.map((filter) => (
              <button
                key={filter}
                type="button"
                role="tab"
                aria-selected={activeFilter === filter}
                className={`project-filter ${activeFilter === filter ? 'project-filter--active' : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {loading && <LoadingSpinner label="Chargement des projets..." />}

        {!loading && filteredProjects.length === 0 && (
          <p className="empty-state">Aucun projet dans cette catégorie.</p>
        )}

        {!loading && filteredProjects.length > 0 && (
          <div className="projects-grid">
            {filteredProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        )}

        {error && (
          <p className="skills-fallback-note">
            Données locales affichées — API indisponible.
          </p>
        )}
      </div>
    </section>
  );
}

export default Projects;
