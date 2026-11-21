function Header() {
    return (
        <header className="header">
            <h1>First React Pizza Co.</h1>
        </header>
    );
}

function Pizza(props) {
    return (
        <div className="pizza">
            <img src={props.photoName} alt={props.name} />
            <div>
                <h3>{props.name}</h3>
                <p>{props.ingredients}</p>
                <span>{props.price + 3}</span>
            </div>
        </div>
    );
}

function Menu() {
    return (
        <main className="menu">
            <h2>Our Menu</h2>
            <ul className="pizzas">
                <Pizza
                    name="Pizza Spinaci"
                    ingredients="Tomato, mozarella, spinach, and ricotta cheese"
                    photoName="pizzas/spinaci.jpg"
                    price={10}
                />
                <Pizza
                    name="Pizza Funghi"
                    ingredients="Tomato, mushrooms, and ricotta cheese"
                    photoName="pizzas/funghi.jpg"
                    price={12}
                />
            </ul>
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
            <p>{new Date().toLocaleTimeString()}. We are currently open</p>
        </footer>
    );
}

function App() {
    return (
        <di className="container">
            <Header />
            <Menu />
            <Footer />
        </di>
    );
}

export default App;
