import { pizzaData } from "./assets/data.js";

function Header() {
    return (
        <div className="header">
            <h1>Fast React Pizza Co.</h1>
        </div>
    );
}

function Pizza({ pizza }) {
    if (pizza.soldOut) return null;

    return (
        <li className="pizza">
            <img src={pizza.photoName} alt={pizza.name} />
            <div>
                <h3>{pizza.name}</h3>
                <p>{pizza.ingredients}</p>
                <span>{pizza.price}</span>
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
            <>
                <p>
                    Authentic Italian cuisine. 6 creative dishes to choose from.
                    All from our stone oven, all organic, all delicious.
                </p>
                {numPizzas > 0 ? (
                    <ul className="pizzas">
                        {pizzaData.map((pizza) => {
                            return <Pizza pizza={pizza} key={pizza.name} />;
                        })}
                    </ul>
                ) : (
                    <p>We are still working on our menu.</p>
                )}
            </>
        </main>
    );
}

function OpenNotice({ closeHour }) {
    return (
        <div className="order">
            <p>
                We are currently open until {closeHour}:00. Come visit us or
                order online
            </p>
            <button className="btn">Order</button>
        </div>
    );
}

function CloseNotice({ openHour, closeHour }) {
    return (
        <div className="order">
            <p>
                We are happy to welcome you between {openHour}:00 and{" "}
                {closeHour}:00
            </p>
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
                <OpenNotice openHour={openHour} />
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
