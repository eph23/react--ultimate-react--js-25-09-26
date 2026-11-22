import PIZZA_DATA from "./assets/data";

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
            <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
            <div>
                <h3>{props.pizzaObj.name}</h3>
                <p>{props.pizzaObj.ingredients}</p>
                <span>{props.pizzaObj.price + 3}</span>
                {/* 
                <img src={props.photoName} alt={props.name} />
                <div>
                    <h3>{props.name}</h3>
                    <p>{props.ingredients}</p>
                    <span>{props.price + 3}</span>
                </div>
                 */}
            </div>
        </div>
    );
}

function Menu() {
    const pizzas = PIZZA_DATA;
    // const pizzas = [];
    const numPizzas = pizzas.length;

    return (
        <main className="menu">
            <h2>Our Menu</h2>
            {numPizzas > 0 && (
                <ul className="pizzas">
                    {pizzas.map((pizza) => (
                        <Pizza pizzaObj={pizza} key={pizza.name} />
                        /*  <Pizza
                        name={pizza.name}
                        ingredients={pizza.ingredients}
                        photoName={pizza.photoName}
                        price={pizza.price}
                    /> */
                    ))}
                </ul>
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
            {isOpen && (
                <div className="order">
                    <p>
                        We are open until {closeHour}:00. Come visit us or order
                        online
                    </p>
                    <button className="btn">Open</button>
                </div>
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
