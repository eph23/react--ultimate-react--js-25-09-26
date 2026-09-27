function Header() {
    return (
        <div className="header">
            <h1>Fast React Pizza Co.</h1>;
        </div>
    );
}

function Pizza(props) {
    console.log(props);
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
            <div className="pizzas">
                <Pizza
                    name="Pizza Spinaci"
                    ingredients="Tomato, spinach, and ricotta cheese"
                    photoName="pizzas/spinaci.jpg"
                    price={10}
                />
                <Pizza
                    name="Pizza Funghi"
                    ingredients="Tomato, mushrooms, and mozzarella cheese"
                    photoName="pizzas/funghi.jpg"
                    price={12}
                />
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
