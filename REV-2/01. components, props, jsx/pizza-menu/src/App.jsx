import { pizzaData } from "./assets/data.js";

function Header() {
    return (
        <div className="header">
            <h1>Fast React Pizza Co.</h1>
        </div>
    );
}

function Pizza() {
    return (
        <div>
            <img src="pizzas/focaccia.jpg" alt="Focaccia" />
            <h3>Focaccia</h3>
            <p>Bread with italian olive oil and rosemary</p>
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

    return (
        <footer className="footer">
            {new Date().toLocaleTimeString()}.We're currently open
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
