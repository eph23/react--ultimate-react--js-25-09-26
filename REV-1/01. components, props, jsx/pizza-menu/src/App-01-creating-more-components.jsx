import { pizzaData } from "./data";

function Header() {
    return (
        <div>
            <h1>Header</h1>
        </div>
    );
}

function Pizza() {
    return (
        <div>
            <img src="pizzas/prosciutto.jpg" alt="Pizza Prosciutto" />
            <h2>Pizza Prosciutto</h2>
            <p>Tomato, mozarella, ham, aragula, and burrata cheese</p>
        </div>
    );
}

function Menu() {
    return (
        <div>
            <h1>Our Menu</h1>
            <Pizza />
        </div>
    );
}

function Footer() {
    return (
        <footer>{new Date().toLocaleTimeString()} We are currently open</footer>
    );
}

function App() {
    return (
        <div>
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}

export default App;
