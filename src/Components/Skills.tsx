interface Skill {
  name: string;
  level: string;
  percentage: number;
}

const skills: Skill[] = [
  {
    name: "HTML",
    level: "Advanced",
    percentage: 90
  },
  {
    name: "CSS",
    level: "Advanced",
    percentage: 85
  },
  {
    name: "JavaScript",
    level: "Intermediate",
    percentage: 80
  },
  {
    name: "TypeScript",
    level: "Intermediate",
    percentage: 75
  },
  {
    name: "React",
    level: "Intermediate",
    percentage: 80
  },
  {
    name: "Bootstrap",
    level: "Advanced",
    percentage: 85
  },
  {
    name: "Python",
    level: "Intermediate",
    percentage: 75
  },
  {
    name: "Git & GitHub",
    level: "Intermediate",
    percentage: 70
  }
];

function Skills() {
  return (
    <section id="skills" className="section">

      <div className="section-heading">
        <p>What I Know</p>
        <h2>My <span>Skills</span></h2>
      </div>

      <div className="skills-container">

        {skills.map((skill) => (

          <div className="skill" key={skill.name}>

            <div className="skill-info">
              <span>{skill.name}</span>
              <span>{skill.level}</span>
            </div>

            <div className="progress">
              <div
                className="progress-bar"
                style={{ width: `${skill.percentage}%` }}
              />
            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Skills;