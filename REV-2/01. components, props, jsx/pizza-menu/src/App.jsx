import { pizzaData } from "./assets/data.js";

function Header() {
    return <h1>Fast React Pizza Co.</h1>;
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
        <div>
            <h2>Our Menu</h2>
            <Pizza />
        </div>
    );
}

function Footer() {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;
    console.log(isOpen);

    /* if (hour >= openHour && hour <= closeHour) {
        alert(`We are currently open`);
    } else {
        alert(`Sorry we are closed`);
    } */

    return (
        <footer>{new Date().toLocaleTimeString()}.We're currently open</footer>
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
