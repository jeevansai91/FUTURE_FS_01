import { portfolio } from "../data/portfolioData"

function Skills(){

return(

<section id="skills">

<h2>Tech Stack</h2>

<ul>

{portfolio.skills.map((skill,index)=>(

<li key={index}>{skill}</li>

))}

</ul>

</section>

)

}

export default Skills