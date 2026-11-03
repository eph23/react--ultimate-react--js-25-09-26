import { initialItems } from "./assets/data.js";

function Logo() {
    return <h1>🌴Far Away🧳</h1>;
}

function Forms() {
    {
        return (
            <div className="add-form">
                <h3>What do you need for your trip?</h3>
            </div>
        );
    }
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
                    <Item item={item} />
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
