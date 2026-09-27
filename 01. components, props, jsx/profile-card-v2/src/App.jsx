import skills from "./assets/data";

const Header = function () {
    return (
        <div className="header">
            <h1>Dev Profile Card</h1>
        </div>
    );
};

const Avatar = function () {
    return (
        <div>
            <img className="avatar" src="PP.jpg" alt="Ephraim S" />
        </div>
    );
};

const Intro = function () {
    return (
        <div>
            <h1>Ephraim S</h1>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
                blanditiis itaque ipsa explicabo amet doloremque soluta?
                Voluptate iste magnam id dolorem! Odio ut perferendis ea
                aliquam? Facilis, placeat! Obcaecati, quibusdam.
            </p>
        </div>
    );
};

const Skill = function ({ skill, level, color }) {
    return (
        <div className="skill" style={{ backgroundColor: color }}>
            <span>{skill}</span>
            <span>{level === "beginner" && "👶"}</span>
            <span>{level === "intermediate" && "👍"}</span>
            <span>{level === "advanced" && "💪"}</span>
        </div>
    );
};

const SkillList = function () {
    return (
        <div className="skill-list">
            {skills.map((skill) => {
                return (
                    <Skill
                        key={skill.skill}
                        skill={skill.skill}
                        level={skill.level}
                        color={skill.color}
                    />
                );
            })}
        </div>
    );
};

const Card = function () {
    return (
        <div className="card">
            <Avatar />
            <div className="data">
                <Intro />
                <SkillList />
            </div>
        </div>
    );
};

function App() {
    return (
        <div className="container">
            <Header />
            <Card />
        </div>
    );
}

export default App;
