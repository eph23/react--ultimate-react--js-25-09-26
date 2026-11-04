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

function Skill(props) {
    return (
        <div className="skill" style={{ backgroundColor: props.color }}>
            <span>{props.emoji}</span>
            <span>{props.skill}</span>
        </div>
    );
}

function SkillList() {
    return (
        <div className="skill-list">
            <Skill skill="React" emoji="👶" color="#2f7fd0" />
            <Skill skill="JavaScript" emoji="🤌" color="orangered" />
            <Skill skill="CSS" emoji="💪" color="yellow" />
            <Skill skill="HTML" emoji="💪" color="orange" />
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
