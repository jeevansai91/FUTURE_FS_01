import { portfolio } from "../data/portfolioData"
import "./Projects.css"

function Projects(){

return(

<section id="projects">

<h2>Featured Projects</h2>

<div className="projects-grid">
  {portfolio.projects.map((project,index)=>(

  <div key={index} className="project-card">

    <div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>

      <div className="project-tags">
        {project.tech.map((tag)=>(
          <span key={tag} className="project-tag">{tag}</span>
        ))}
      </div>
    </div>

    {project.demo && (
      <a
        className="project-link"
        href={project.demo}
        target="_blank"
        rel="noreferrer"
      >
        Live Demo
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12H19" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 5L19 12L12 19" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>
    )}

  </div>

  ))}
</div>

</section>

)

}

export default Projects