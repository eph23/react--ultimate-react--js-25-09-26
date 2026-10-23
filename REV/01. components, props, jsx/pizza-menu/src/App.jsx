import { pizzaData } from "./data";

function Header() {
    return (
        <header className="header">
            <h1>Fast React Pizza Co.</h1>;
        </header>
    );
}

function Pizza(props) {
    return (
        <div className="pizza">
            <img src={props.photoName} alt="Pizza Prosciutto" />
            <div>
                <h3>{props.name}</h3>
                <p>{props.ingredients}</p>
                <span>{props.price}</span>
            </div>
        </div>
    );
}

function Menu() {
    return (
        <main className="menu">
            <h2>Our Menu</h2>
            <Pizza
                name="Pizza Prosciutto"
                ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
                photoName="pizzas/prosciutto.jpg"
                price={12}
            />
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
