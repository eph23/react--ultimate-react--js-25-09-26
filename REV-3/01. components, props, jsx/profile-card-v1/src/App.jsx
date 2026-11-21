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
function Skill(props) {
    return (
        <div className="skill" style={{ backgroundColor: props.bgc }}>
            <span>{props.skill}</span>
            <span>{props.emoji}</span>
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
