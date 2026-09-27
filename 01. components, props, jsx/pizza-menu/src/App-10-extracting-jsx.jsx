import pizzaData from "./assets/data";

function Header() {
    return (
        <div className="header">
            <h1>Fast React Pizza Co.</h1>;
        </div>
    );
}

function Pizza(props) {
    return (
        <li className="pizza">
            <img src={props.pizzaObj.photoName} alt={name} />
            <div>
                <h3>{props.pizzaObj.name}</h3>
                <p>{props.pizzaObj.ingredients}</p>
                <span>{props.pizzaObj.price}</span>
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
                <ul className="pizzas">
                    {pizzas.map((pizza) => {
                        return <Pizza key={pizza.name} pizzaObj={pizza} />;
                    })}
                </ul>
            ) : (
                <p>We are still working on our menu. Please check back later</p>
            )}
        </main>
    );
}

function Order(props) {

    return (
        <div className="order">
            <p>We are open until {props.closeHour}:00</p>
            <button className="btn">Order</button>
        </div>
    );
}

function Notice(props) {
    return (
        <div className="order">
            <p>
                We are happy to welcome you between {props.openHour}:00 to{" "}
                {props.closeHour}
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
                <Order closeHour={closeHour} openHour={openHour} />
            ) : (
                <Notice closeHour={closeHour} openHour={openHour} />
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
