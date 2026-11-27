import initialItems from "./assets/data";

function Logo() {
    return <h1>🏝️Far Away🧳</h1>;
}
function Form() {
    return (
        <div className="add-form">
            <h3>What do you need for your trip?</h3>
        </div>
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
                {initialItems.map((item) => {
                    return <Item item={item} key={item.id} />;
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
