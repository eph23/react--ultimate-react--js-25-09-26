function Header() {
    return (
        <div className="header">
            <h1>Fast React Pizza Co.</h1>;
        </div>
    );
}

function Pizza() {
    return (
        <div className="pizza">
            <img src="pizzas/spinaci.jpg" alt="Pizza Spinaci" />
            <div>
                <h3>Pizza Spinaci</h3>
                <p>Tomato, mozarella, spinach, and ricotta cheese</p>
            </div>
        </div>
    );
}

function Menu() {
    return (
        <main className="menu">
            <h2>Our Menu</h2>
            <div className="pizzas">
                <Pizza />
            </div>
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
        <footer>
            <p>{new Date().toLocaleTimeString()}. We are currently open!</p>
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
