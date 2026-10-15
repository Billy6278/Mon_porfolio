import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { GitHubIcon } from './icons/GitHubIcon';

function ProjectCard({ project, index = 0 }) {
  const status = project.status || 'Terminé';
  const date = project.date || new Date().getFullYear().toString();

  return (
    <motion.article
      className="project-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -8 }}
    >
      <div className="project-card__image-wrapper">
        {project.imageUrl ? (
          <img src={project.imageUrl} alt={project.title} className="project-card__image" loading="lazy" />
        ) : (
          <div className="project-card__image-placeholder" />
        )}
        <div className="project-card__overlay">
          <div className="project-card__overlay-actions">
            {project.githubUrl && project.githubUrl !== '#' && (
              <a href={project.githubUrl} target="_blank" rel="noreferrer" className="project-card__overlay-btn" aria-label="GitHub">
                <GitHubIcon size={20} />
              </a>
            )}
            {project.projectUrl && project.projectUrl !== '#' && (
              <a href={project.projectUrl} target="_blank" rel="noreferrer" className="project-card__overlay-btn" aria-label="Démo">
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>
        {project.featured && <span className="project-card__featured">Vedette</span>}
      </div>

      <div className="project-card__body">
        <div className="project-card__header">
          <h3>{project.title}</h3>
          <div className="project-card__meta">
            <span className={`project-card__status project-card__status--${status.toLowerCase().replace(' ', '-')}`}>
              {status}
            </span>
            <span className="project-card__date">{date}</span>
          </div>
        </div>

        <p className="project-card__description">{project.description}</p>

        {project.technologies?.length > 0 && (
          <ul className="tag-list">
            {project.technologies.map((tech) => (
              <li key={tech} className="tag">{tech}</li>
            ))}
          </ul>
        )}

        <div className="project-card__links">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn btn--outline btn--sm">
              <GitHubIcon size={16} />
              GitHub
            </a>
          )}
          {project.projectUrl && (
            <a href={project.projectUrl} target="_blank" rel="noreferrer" className="btn btn--primary btn--sm">
              <ExternalLink size={16} />
              Démo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
