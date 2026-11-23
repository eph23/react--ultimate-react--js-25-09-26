import skills from "./assets/data";

function Header() {
    return (
        <div className="header">
            <h1>Dev Profile</h1>
        </div>
    );
}

function Avatar() {
    return <img src="PP.jpg" alt="" className="avatar" />;
}

function Skill({ skill, level, color }) {
    return (
        <div className="skill" style={{ backgroundColor: color }}>
            <span>{skill}</span>
            <span>
                {level === "advanced" && "💪"}
                {level === "intermediate" && "👍"}
                {level === "beginner" && "👶"}
            </span>
        </div>
    );
}

function Skills() {
    return (
        <div className="skill-list">
            {skills.map((skill) => (
                <Skill
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
            <h2>Ephraim S.</h2>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Corporis excepturi laborum impedit fugit maiores, quod nostrum
                nisi labore iure optio deserunt minus recusandae pariatur maxime
                debitis voluptate perspiciatis adipisci exercitationem.
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
            <Card />
        </div>
    );
}

export default App;
