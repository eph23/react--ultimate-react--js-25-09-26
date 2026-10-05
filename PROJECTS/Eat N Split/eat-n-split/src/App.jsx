import { initialFriends } from "./assets/data";

function Button({ children }) {
    return <button className="button">{children}</button>;
}

function Friend({ name, imageURL, balance }) {
    return (
        <li>
            <img src={imageURL} alt="" />
            <h3>{name}</h3>
            <p className={balance > 0 ? `green` : balance < 0 ? `red` : ``}>
                <span>
                    {balance > 0
                        ? `${name} owe ${name} $${balance}`
                        : balance < 0
                          ? `You owe's ${name} $${balance}`
                          : `You and ${name} are even`}
                </span>
            </p>

            <button className="button">Select</button>
        </li>
    );
}

function FriendsList() {
    return (
        <ul>
            {initialFriends.map((friend) => (
                <Friend
                    key={friend.id}
                    name={friend.name}
                    imageURL={friend.image}
                    balance={friend.balance}
                />
            ))}
        </ul>
    );
}

function App() {
    return (
        <div className="app">
            <div className="sidebar">
                <FriendsList />
            </div>
        </div>
    );
}

export default App;
