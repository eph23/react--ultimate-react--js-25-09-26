/* 
function App() {
    return (
        <div className="profile-card">
            <img src="https://placehold.net/600x600.png" alt="" />
            <h4>John Doe</h4>
            <p>Frontend Dev</p>
        </div>
    );
} */

import { profiles } from "./data.js";

function ProfileCard({ profile }) {
    return (
        <div className="card">
            <div className="image-container">
                <img className="image" src={profile.avatar} alt="" />
            </div>
            <p className="location">📌 {profile.location}</p>
            <h4 className="title">{profile.name}</h4>
            <p className="role">{profile.role}</p>
            <p className="list-skill">
                {profile.skills.map((skill) => (
                    <span className="item-list-button" key={skill}>
                        {skill}
                    </span>
                ))}
            </p>
        </div>
    );
}

function ProfileCards({ profiles }) {
    return (
        <div className="card-container">
            {profiles.map((profile) => (
                <ProfileCard profile={profile} key={profile.id} />
            ))}
        </div>
    );
}

function App() {
    return <ProfileCards profiles={profiles} />;
}

export default App;
