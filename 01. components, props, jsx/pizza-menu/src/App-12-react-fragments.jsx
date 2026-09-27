import pizzaData from "./assets/data";

function Header() {
    return (
        <div className="header">
            <h1>Fast React Pizza Co.</h1>;
        </div>
    );
}

function Pizza({ pizzaObj }) {
    return (
        <li className="pizza">
            <img src={pizzaObj.photoName} alt={name} />
            <div>
                <h3>{pizzaObj.name}</h3>
                <p>{pizzaObj.ingredients}</p>
                <span>{pizzaObj.price}</span>
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
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Explicabo voluptate consequuntur debitis
                        doloribus, aliquam commodi voluptates placeat incidunt
                        sit. Ad perspiciatis dicta esse sint assumenda doloribus
                        eos non nobis enim?
                    </p>
                    <ul className="pizzas">
                        {pizzas.map((pizza) => {
                            return <Pizza key={pizza.name} pizzaObj={pizza} />;
                        })}
                    </ul>
                </>
            ) : (
                <p>We are still working on our menu. Please check back later</p>
            )}
        </main>
    );
}

function Order(openHour, closeHour) {
    return (
        <div className="order">
            <p>We are open until {closeHour}:00</p>
            <button className="btn">Order</button>
        </div>
    );
}

function Notice({ openHour, closeHour }) {
    return (
        <div className="order">
            <p>
                We are happy to welcome you between {openHour}:00 to {closeHour}
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
