import './Projects.css';

function Projects() {
  const projects = [
    {
      title: "Project Title",
      category: "Category / tags",
      timeline: "Jan 2025 - Ongoing",
      description: "It is short story of the problem statement",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Project Title",
      category: "Category / tags",
      timeline: "Timeline",
      description: "It is short story of the problem statement",
      image: "/api/placeholder/400/300"
    }
  ];

  return (
    <section className="projects-section">
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-content">
              <div className="project-info">
                <div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-category">{project.category}</p>
                  <p className="project-timeline">{project.timeline}</p>
                  <div className="project-description">
                    <h4 className="project-description-title">Problem Statement</h4>
                    <p className="project-description-text">{project.description}</p>
                  </div>
                </div>
                <button className="view-button">View</button>
              </div>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;