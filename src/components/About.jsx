import { portfolio } from "../data/portfolioData"
import "./About.css"

function About(){

return(

<section id="about">

<h2>About & Background</h2>

<div className="about-grid">

  <div className="about-card">
    <h3>About Me</h3>
    <p>
      I specialize in bridging the gap between hardware and the web, integrating physical sensors with real-time dashboards. I am passionate about writing clean, maintainable code and enjoy the thrill of solving complex algorithmic problems.
    </p>
    <p>
      Beyond development, I am an active competitive programmer and serve as a Student Institute Innovation Ambassador under the Ministry of Education (MoE), where I help foster innovation and entrepreneurship at the grassroots level.
    </p>
  </div>

  <div className="about-card education-card">
    <div>
      <h3>Education</h3>
      <p><strong>{portfolio.education.college}</strong></p>
      <p>{portfolio.education.degree}</p>
    </div>

    <div className="education-footer">
      <p><strong>Expected Graduation:</strong> {portfolio.education.graduation}</p>
      <p><strong>Current CGPA:</strong> {portfolio.education.cgpa}</p>
    </div>
  </div>

  <div className="about-card skills-card">
    <h3>My Tech Stack</h3>
    <ul className="skills-list">
      {portfolio.skills.map((skill) => (
        <li key={skill} className="skill-pill">{skill}</li>
      ))}
    </ul>
  </div>

</div>

</section>

)

}

export default About