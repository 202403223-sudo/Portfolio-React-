interface Project {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
}

const projects: Project[] = [
  {
    title: "Netflix Website",
    description:
      "A responsive movie website with login page, movie cards, details and interactive features.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap"
    ],
    github: "#",
    demo: "#"
  },

  {
    title: "Apple Website",
    description:
      "A modern responsive website inspired by Apple's clean and professional design.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    github: "#",
    demo: "#"
  },

  {
    title: "McKinsey Website",
    description:
      "A professional corporate website focusing on clean layout and responsive design.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    github: "#",
    demo: "#"
  },

  {
    title: "Pet Shop",
    description:
      "An online pet shop website with products, categories and responsive interface.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    github: "#",
    demo: "#"
  },

  {
    title: "Sorting Visualizer",
    description:
      "A visual application that demonstrates different sorting algorithms.",
    technologies: [
      "Python",
      "CustomTkinter",
      "Algorithms"
    ],
    github: "#",
    demo: "#"
  },

  {
    title: "Personal Portfolio",
    description:
      "A modern personal portfolio built with React and TypeScript.",
    technologies: [
      "React",
      "TypeScript",
      "CSS"
    ],
    github: "#",
    demo: "#"
  }
];

function Projects() {
  return (
    <section id="projects" className="section">

      <div className="section-heading">
        <p>My Recent Work</p>
        <h2>My <span>Projects</span></h2>
      </div>

      <div className="projects-grid">

        {projects.map((project, index) => (

          <article
            className="project-card"
            key={project.title}
          >

            <div className="project-top">
              <span className="project-number">
                0{index + 1}
              </span>

              <span className="project-icon">
                ↗
              </span>
            </div>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="tech-list">

              {project.technologies.map((tech) => (
                <span key={tech}>
                  {tech}
                </span>
              ))}

            </div>

            <div className="project-buttons">

              <a href={project.github}>
                GitHub
              </a>

              <a href={project.demo}>
                Live Demo ↗
              </a>

            </div>

          </article>

        ))}

      </div>

    </section>
  );
}

export default Projects;