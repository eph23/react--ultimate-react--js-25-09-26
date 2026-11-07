import { skills } from "./assets/data";

function Header() {
    return (
        <div className="header">
            <h1>Developer Profile</h1>
        </div>
    );
}
function Avatar() {
    return <img className="avatar" src="PP.jpg"></img>;
}

function Intro() {
    return (
        <div>
            <h2>Ephraim S.</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, id
                excepturi? Eveniet maiores, id incidunt aspernatur,
                exercitationem fugit corporis suscipit repudiandae deserunt
            </p>
        </div>
    );
}

// function Skill({ skill }) {
function Skill({ skill, color, level }) {
    return (
        /*         <div className="skill" style={{ backgroundColor: skill.color }}>
            {<span>
                {skill.level === "beginner" && "👶"}
                {skill.level === "intermediate" && "🤌"}
                {skill.level === "advanced" && "💪"}
                </span>
                <span>{skill.skill}</span>}
        </div> */
        <div className="skill" style={{ backgroundColor: color }}>
            <span>
                {level === "beginner" && "👶"}
                {level === "intermediate" && "🤌"}
                {level === "advanced" && "💪"}
            </span>
            <span>{skill}</span>
        </div>
    );
}

function SkillList() {
    return (
        <div className="skill-list">
            {skills.map((skill) => (
                // <Skill skill={skill} />
                <Skill
                    skill={skill.skill}
                    level={skill.level}
                    color={skill.color}
                />
            ))}
        </div>
    );
}

function Card() {
    return (
        <div className="card">
            <Avatar />
            <div className="data">
                <Intro />
                <SkillList />
            </div>
        </div>
    );
}

function App() {
    return (
        <div className="container">
            <Header />
            <Card />
        </div>
    );
}

export default App;
