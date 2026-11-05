import { pizzaData } from "./assets/data.js";

function Header() {
    return (
        <div className="header">
            <h1>Fast React Pizza Co.</h1>
        </div>
    );
}

function Pizza(props) {
    return (
        <li className="pizza">
            <img src={props.pizza.photoName} alt={props.pizza.name} />
            <div>
                <h3>{props.pizza.name}</h3>
                <p>{props.pizza.ingredients}</p>
                <span>{props.pizza.price}</span>
            </div>
        </li>
    );
}

function Menu() {
    const pizzas = pizzaData;
    // const pizzas = [];
    const numPizzas = pizzas.length;
    // const numPizzas = 0;

    return (
        <main className="menu">
            <h2>Our Menu</h2>
            {numPizzas > 0 ? (
                <ul className="pizzas">
                    {pizzaData.map((pizza) => {
                        return <Pizza pizza={pizza} key={pizza.name} />;
                    })}
                </ul>
            ) : (
                <p>We are still working on our menu.</p>
            )}
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
            {isOpen ? (
                <div className="order">
                    <p>
                        We are currently open until {closeHour}:00. Come visit
                        us or order online
                    </p>
                    <button className="btn">Order</button>
                </div>
            ) : (
                <p>
                    We are happy to welcome you between {openHour}:00 and{" "}
                    {closeHour}:00
                </p>
            )}
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
