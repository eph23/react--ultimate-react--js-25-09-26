import { useState } from "react";
import { initialFriends } from "./assets/data";

function Button({ onClick, children }) {
    return (
        <button onClick={onClick} className="button">
            {children}
        </button>
    );
}

function Friend({ friend, onSelect, selectedFriend }) {
    const isSelected = selectedFriend?.id === friend.id;

    return (
        <li className={isSelected ? "selected" : ""}>
            <img src={friend.image} alt="" />
            <h3>{friend.name}</h3>
            <p
                className={
                    friend.balance > 0
                        ? `green`
                        : friend.balance < 0
                          ? `red`
                          : ``
                }
            >
                <span>
                    {friend.balance > 0
                        ? `${friend.name} owe ${friend.name} $${friend.balance}`
                        : friend.balance < 0
                          ? `You owe's ${friend.name} $${friend.balance}`
                          : `You and ${friend.name} are even`}
                </span>
            </p>

            <button className="button" onClick={() => onSelect(friend)}>
                {!isSelected ? "Select" : "Close"}
            </button>
        </li>
    );
}

function FriendsList({ friends, onSelect, selectedFriend }) {
    return (
        <ul>
            {friends.map((friend) => (
                <Friend
                    key={friend.id}
                    friend={friend}
                    selectedFriend={selectedFriend}
                    onSelect={onSelect}
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

function FormSplitBill({ selectedFriend }) {
    return (
        <form className="form-split-bill">
            <h2>Split Bill with {selectedFriend.name}</h2>

            <label>💰Bill Value</label>
            <input type="text" />

            <label>🙍‍♂️Your Expenses</label>
            <input type="text" />

            <label>🧑‍🤝‍🧑{selectedFriend.name}'s Expenses</label>
            <input type="text" disabled />

            <label>💳Who is paying?</label>
            <select>
                <option value="user">You</option>
                <option value="friend">{selectedFriend.name}</option>
            </select>

            <Button className="button">Split bill</Button>
        </form>
    );
}

function App() {
    const [showAddFriend, setShowAddFriend] = useState(false);
    const [friends, setFriends] = useState(initialFriends);
    const [selectedFriend, setSelectedFriend] = useState(null);

    function handleShowAddFriend() {
        setShowAddFriend((showFriend) => !showFriend);
        setSelectedFriend(null);
    }

    function handleAddFriend(friend) {
        setFriends((friends) => [...friends, friend]);
        setShowAddFriend(false);
    }

    function handleSelectFriend(friend) {
        setSelectedFriend((currentFriend) =>
            currentFriend?.id === friend.id ? "" : friend,
        );
        setShowAddFriend(false);
    }

    return (
        <div className="app">
            <div className="sidebar">
                <FriendsList
                    friends={friends}
                    selectedFriend={selectedFriend}
                    onSelect={handleSelectFriend}
                />
                {showAddFriend && (
                    <FormAddFriend onAddFriend={handleAddFriend} />
                )}
                <Button onClick={handleShowAddFriend}>
                    {!showAddFriend ? "Add friend" : "Close"}
                </Button>
            </div>
            <div>
                {selectedFriend && (
                    <FormSplitBill selectedFriend={selectedFriend} />
                )}
            </div>
        </div>
    );
}

export default App;
