function Header() {
    return <h1>Fast React Pizza Co.</h1>;
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

    return (
        <footer>
            <p>{new Date().toLocaleTimeString()}. We are currently open!</p>
        </footer>
    );
}

function Pizza() {
    return (
        <div>
            <img src="pizzas/spinaci.jpg" alt="Pizza Spinaci" />
            <h2>Pizza Spinaci</h2>
            <p>Tomato, mozarella, spinach, and ricotta cheese</p>
        </div>
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
