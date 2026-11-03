import { pizzaData } from "./data";

function Header() {
    return (
        <header className="header">
            <h1>Fast React Pizza Co.</h1>;
        </header>
    );
}

function Pizza({ pizzaObj }) {
    return (
        <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
            <img src={pizzaObj.photoName} alt="Pizza Prosciutto" />
            <div>
                <h3>{pizzaObj.name}</h3>
                <p>{pizzaObj.ingredients}</p>
                <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
            </div>
        </li>
    );
}

function Menu() {
    const pizzas = pizzaData;
    // const pizzas = [];
    const numPizzas = pizzas.length;

    return (
        <main className="menu">
            <h2>Our Menu</h2>
            {numPizzas > 0 ? (
                <>
                    <p>
                        Authentic Italian Cuisine. 6 creative dishes to choose
                        from. All from our stone oven, all organic, all
                        delicious
                    </p>
                    <ul className="pizzas">
                        {pizzas.map((pizza) => (
                            <Pizza pizzaObj={pizza} key={pizza.name} />
                        ))}
                    </ul>
                </>
            ) : (
                <p>We are still working on our menu. Please come back later</p>
            )}
        </main>
    );
}

function OpenNotice({ openHour, closeHour }) {
    return (
        <div className="order">
            <p>
                We are open until {closeHour}:00. Come visit us or order online
            </p>
            <button className="btn">Order</button>
        </div>
    );
}

function CloseNotice({ openHour, closeHour }) {
    return (
        <div className="order">
            <p>
                We're happy to welcome you between {openHour}:00 and {closeHour}
                :00
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
                <OpenNotice closeHour={closeHour} openHour={openHour} />
            ) : (
                <CloseNotice />
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
