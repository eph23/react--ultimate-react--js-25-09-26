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

function Stats({ items }) {
    if (!items.length) {
        return (
            <footer className="stats">
                <em>Start adding some items to your packing list 🚀</em>
            </footer>
        );
    }

    const numItems = items.length;
    const numPacked = items.filter((item) => item.packed).length;
    const percentage = Math.round((numPacked / numItems) * 100);

    return (
        <footer className="stats">
            <em>
                {percentage === 100
                    ? `You got everything packed! Ready to go🛩️`
                    : `You have ${numItems} items in your list, and you already packed ${numPacked}(${percentage}%)`}
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
            <Stats items={items} />
        </div>
    );
}

export default App;
