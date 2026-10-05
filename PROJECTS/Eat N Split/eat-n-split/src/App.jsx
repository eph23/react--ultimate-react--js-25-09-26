import { useState } from "react";
import { initialFriends } from "./assets/data";

function Button({ onClick, children }) {
    return (
        <button onClick={onClick} className="button">
            {children}
        </button>
    );
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

function FormAddFriend() {
    return (
        <form className="form-add-friend">
            <label>🧑‍🤝‍🧑Friend's name</label>
            <input type="text" placeholder="Your friend's name" />

            <label>🖼️Friend's image</label>
            <input type="text" placeholder="Image URL..." />

            <Button className="button">Add</Button>
        </form>
    );
}

function FormSplitBill() {
    return (
        <form className="form-split-bill">
            <h2>Split Bill with X</h2>

            <label>💰Bill Value</label>
            <input type="text" />

            <label>🙍‍♂️Your Expenses</label>
            <input type="text" />

            <label>🧑‍🤝‍🧑X's Expenses</label>
            <input type="text" disabled />

            <label>💳Who is paying?</label>
            <select>
                <option value="user">You</option>
                <option value="friend">X</option>
            </select>

            <Button className="button">Split bill</Button>
        </form>
    );
}

function App() {
    const [showAddFriend, setShowAddFriend] = useState(false);

    function handleShowAddFriend() {
        setShowAddFriend((showFriend) => !showFriend);
    }

    return (
        <div className="app">
            <div className="sidebar">
                <FriendsList />
                {showAddFriend && <FormAddFriend />}
                <Button onClick={handleShowAddFriend}>
                    {!showAddFriend ? "Add friend" : "Close"}
                </Button>
            </div>
            <div>
                <FormSplitBill />
            </div>
        </div>
    );
}

export default App;
