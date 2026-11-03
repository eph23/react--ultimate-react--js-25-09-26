import { skills } from "../public/data";

function Header() {
    return (
        <div className="header">
            <h1>Developer Profile</h1>
        </div>
    );
}

function Avatar() {
    return <img className="avatar" src="PP.jpg" alt="" />;
}

function Skill({ skill, level, color }) {
    return (
        <div className="skill" style={{ backgroundColor: color }}>
            <span>{skill}</span>
            <span>{level === "beginner" && "👶"}</span>
            <span>{level === "intermediate" && "👍"}</span>
            <span>{level === "advanced" && "💪"}</span>
        </div>
    );
}

function Skills() {
    return (
        <div className="skill-list">
            {skills.map((skill) => (
                <Skill
                    key={skill.skill}
                    skill={skill.skill}
                    level={skill.level}
                    color={skill.color}
                />
            ))}
        </div>
    );
}

function Data() {
    return (
        <div className="data">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                doloribus ad deserunt a natus sequi similique, dolorem sint aut
                quidem dolore dicta quas esse cum laboriosam labore voluptatibus
                adipisci voluptatum!
            </p>
            <Skills />
        </div>
    );
}

function Card() {
    return (
        <div className="card">
            <Avatar />
            <Data />
        </div>
    );
}

function App() {
    return (
        <div className="container">
            <Header />
            <Card />;
        </div>
    );
}

export default App;
