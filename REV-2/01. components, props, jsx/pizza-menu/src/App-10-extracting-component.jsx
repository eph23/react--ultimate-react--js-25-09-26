import { pizzaData } from "./assets/data.js";

function Header() {
    return (
        <div className="header">
            <h1>Fast React Pizza Co.</h1>
        </div>
    );
}

function Pizza(props) {
    if (props.pizza.soldOut) return null;

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

function CloseNotice(props) {
    return (
        <div className="order">
            <p>
                We are happy to welcome you between {props.openHour}:00 and{" "}
                {props.closeHour}:00
            </p>
        </div>
    );
}

function OpenNotice(props) {
    return (
        <div className="order">
            <p>
                We are currently open until {props.closeHour}:00. Come visit us
                or order online
            </p>
            <button className="btn">Order</button>
        </div>
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
                <OpenNotice openHour={openHour} closeHour={closeHour} />
            ) : (
                <CloseNotice openHour={openHour} closeHour={closeHour} />
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
