import { initialItems } from "./assets/data.js";

function Logo() {
    return <h1>🌴Far Away🧳</h1>;
}

function Form() {
    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>What do you need for your trip?</h3>
            <select>
                {Array.from({ length: 20 }, (_, index) => index + 1).map(
                    (num) => (
                        <option key={num} value={num}>
                            {num}
                        </option>
                    ),
                )}
            </select>
            <input type="text" placeholder="Item..." />
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
function Stats() {
    return (
        <footer className="stats">
            <em>Start adding some items to your packing list</em>
        </footer>
    );
}

function App() {
    return (
        <div className="app">
            <Logo />
            <Form />
            <PackingList />
            <Stats />
        </div>
    );
}

export default App;
