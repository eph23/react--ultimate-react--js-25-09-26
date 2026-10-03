import { useState } from "react";
import initialItems from "./assets/data";

function Logo() {
    return <h1>🏝️Far Away🧳</h1>;
}

function Form({ onAddItems }) {
    const [quantity, setQuantity] = useState(1);
    const [description, setDescription] = useState("");

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

        onAddItems(newItem);

        setQuantity(1);
        setDescription("");
    }

    function handleChangeQuantity(event) {
        setQuantity(Number(event.target.value));
    }

    function handleChangeDescription(event) {
        setDescription(event.target.value);
    }

    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>What do you need for your trip?</h3>
            <select onChange={handleChangeQuantity} value={quantity}>
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
                placeholder="Item..."
                value={description}
                onChange={handleChangeDescription}
            />
            <button>Add</button>
        </form>
    );
}

function Item({ item, onDeleteItem, onToggleItem }) {
    return (
        <li>
            <input
                type="checkbox"
                value={item.packed}
                onChange={() => onToggleItem(item.id)}
            />
            <span style={item.packed ? { textDecoration: "line-through" } : {}}>
                {item.quantity} {item.description}
            </span>
            <button onClick={() => onDeleteItem(item.id)}>❌</button>
        </li>
    );
}

function PackingList({ items, onDeleteItem, onToggleItem }) {
    return (
        <div className="list">
            <ul>
                {items.map((item) => {
                    return (
                        <Item
                            item={item}
                            key={item.id}
                            onDeleteItem={onDeleteItem}
                            onToggleItem={onToggleItem}
                        />
                    );
                })}
            </ul>
        </div>
    );
}

function Stats() {
    return (
        <footer className="stats">
            <em>
                You have X items in your list, and you already packed X (X%)
            </em>
        </footer>
    );
}

function App() {
    // const [items, setItems] = useState(initialItems);
    const [items, setItems] = useState([]);

    function handleAddItems(item) {
        setItems((currentItems) => [...currentItems, item]);
    }

    function handleDeleteItem(id) {
        setItems((currentItems) =>
            currentItems.filter((item) => item.id !== id),
        );
    }

    function handleToggleItem(id) {
        setItems((currentItems) =>
            currentItems.map((item) =>
                item.id === id ? { ...item, packed: !item.packed } : item,
            ),
        );
    }

    return (
        <div className="app">
            <Logo />
            <Form onAddItems={handleAddItems} />
            <PackingList
                items={items}
                onDeleteItem={handleDeleteItem}
                onToggleItem={handleToggleItem}
            />
            <Stats />
        </div>
    );
}

export default App;
