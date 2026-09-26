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

const Skill = function (props) {
    return (
        <div className="skill" style={{ backgroundColor: props.bgc }}>
            <span>{props.skill}</span>
            <span>{props.emoji}</span>
        </div>
    );
};

const SkillList = function () {
    return (
        <div className="skill-list">
            <Skill skill="React" emoji="🌐" bgc="#2662EA" />
            <Skill skill="JavaScript" emoji="💪" bgc="#EFD81D" />
            <Skill skill="CSS" emoji="✅" bgc="#FF3B00" />
            <Skill skill="HTML" emoji="🎯" bgc="#60DAFB" />
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
