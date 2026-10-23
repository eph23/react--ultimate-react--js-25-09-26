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

function Skill(props) {
    return (
        <div className="skill" style={{ backgroundColor: props.bgc }}>
            <span>{props.emoji}</span>
            <span>{props.skill}</span>
        </div>
    );
}

function Skills() {
    return (
        <div className="skill-list">
            <Skill skill="React" emoji="🌐" bgc="#2662EA" />
            <Skill skill="JavaScript" emoji="💪" bgc="#EFD81D" />
            <Skill skill="CSS" emoji="✅" bgc="#FF3B00" />
            <Skill skill="HTML" emoji="🎯" bgc="#60DAFB" />
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
