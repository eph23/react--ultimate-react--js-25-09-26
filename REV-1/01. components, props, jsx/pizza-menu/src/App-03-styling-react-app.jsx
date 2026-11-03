import { pizzaData } from "./data";

function Header() {
    return (
        <header className="header">
            <h1>Fast React Pizza Co.</h1>;
        </header>
    );
}

function Pizza() {
    return (
        <div>
            <img src="pizzas/prosciutto.jpg" alt="Pizza Prosciutto" />
            <h3>Pizza Prosciutto</h3>
            <p>Tomato, mozarella, ham, aragula, and burrata cheese</p>
        </div>
    );
}

function Menu() {
    return (
        <main className="menu">
            <h2>Our Menu</h2>
            <Pizza />
        </main>
    );
}

function Footer() {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;
    console.log(isOpen);

    return (
        <footer className="footer">
            {new Date().toLocaleTimeString()} We are currently open
        </footer>
    );
}

function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}

export default App;
