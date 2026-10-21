import { pizzaData } from "./data";

function Pizza() {
    return (
        <div>
            <img src="pizzas/prosciutto.jpg" alt="Pizza Prosciutto" />
            <h2>Pizza Prosciutto</h2>
            <p>Tomato, mozarella, ham, aragula, and burrata cheese</p>
        </div>
    );
}

function App() {
    return (
        <div>
            <h1>Hello React</h1>
            <Pizza />
        </div>
    );
}

export default App;
