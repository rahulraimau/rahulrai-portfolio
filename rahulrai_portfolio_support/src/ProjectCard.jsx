const ProjectCard = ({ project }) => (
  <div className="project-card">
    <h3>{project.name}</h3>
    <p>{project.description}</p>
    <a href={project.url} target="_blank" rel="noopener noreferrer">View on GitHub</a>
  </div>
);

export default ProjectCard;