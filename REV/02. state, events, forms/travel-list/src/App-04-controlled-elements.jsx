import { useState } from "react";
import { initialItems } from "./assets/data.js";

function Logo() {
    return <h1>🌴Far Away🧳</h1>;
}

function Forms() {
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);

    function handleChangeDescription(event) {
        setDescription(event.target.value);
    }
    function handleChangeQuantity(event) {
        setQuantity(Number(event.target.value));
    }

    function handleSubmit(event) {
        event.preventDefault();

        if (!description) return;

        const newItem = {
            description,
            quantity,
            packed: false,
            id: Date.now(),
        };

        console.log(newItem);

        setDescription("");
        setQuantity(1);
    }

    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>What do you need for your trip?</h3>
            <select value={quantity} onChange={handleChangeQuantity}>
                {Array.from({ length: 20 }, (_, index) => index + 1).map(
                    (num) => (
                        <option value={num} key={num}>
                            {num}
                        </option>
                    ),
                )}
            </select>
            <input
                type="text"
                placeholder="Item"
                value={description}
                onChange={handleChangeDescription}
            />
            <button>Add</button>
        </form>
    );
}

function Item({ item }) {
    return (
        <li>
            <span style={item.packed ? { textDecoration: "line-through" } : {}}>
                {item.quantity} {item.description}
            </span>
            <button>❌</button>
        </li>
    );
}

function PackingList() {
    return (
        <div className="list">
            <ul>
                {initialItems.map((item) => (
                    <Item item={item} key={item.id} />
                ))}
            </ul>
        </div>
    );
}

function State() {
    return (
        <footer className="stats">
            <em>You have X items on your list, and you already packed X(X%)</em>
        </footer>
    );
}

function App() {
    return (
        <div className="app">
            <Logo />
            <Forms />
            <PackingList />
            <State />
        </div>
    );
}

export default App;
