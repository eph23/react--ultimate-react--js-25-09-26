function Pizza() {
    return (
        <div>
            <img src="pizzas/spinaci.jpg" alt="Pizza Soinaci" />
            <h3>Pizza Spinaci</h3>
            <p>Tomato, mozarella, spinach, and ricotta cheese</p>
        </div>
    );
}

function App() {
    return (
        <div>
            <h1>Hello React!</h1>
            <Pizza />
        </div>
    );
}

export default App;
