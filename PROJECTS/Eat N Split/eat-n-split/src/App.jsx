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

function FriendsList({ friends }) {
    return (
        <ul>
            {friends.map((friend) => (
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

function FormAddFriend({ onAddFriend }) {
    const [name, setName] = useState("");
    const [image, setImage] = useState("https://i.pravatar.cc/48");

    function handleSetName(event) {
        setName(event.target.value);
    }
    function handleSetImage(event) {
        setImage(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();

        if (!name || !image) return;

        const id = crypto.randomUUID();

        const newFriend = {
            id,
            name,
            image: `${image}?=${id}`,
            balance: 0,
        };

        onAddFriend(newFriend);

        setName("");
        setImage("https://i.pravatar.cc/48");
    }

    return (
        <form className="form-add-friend" onSubmit={handleSubmit}>
            <label>🧑‍🤝‍🧑Friend's name</label>
            <input
                type="text"
                value={name}
                onChange={handleSetName}
                placeholder="Your friend's name"
            />

            <label>🖼️Friend's image</label>
            <input
                type="text"
                value={image}
                onChange={handleSetImage}
                placeholder="Image URL..."
            />

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
    const [friends, setFriends] = useState(initialFriends);

    function handleShowAddFriend() {
        setShowAddFriend((showFriend) => !showFriend);
    }

    function handleAddFriend(friend) {
        setFriends((friends) => [...friends, friend]);
        setShowAddFriend(false);
    }

    return (
        <div className="app">
            <div className="sidebar">
                <FriendsList friends={friends} />
                {showAddFriend && (
                    <FormAddFriend onAddFriend={handleAddFriend} />
                )}
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
