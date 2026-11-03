import { pizzaData } from "./assets/data.js";

function Pizza() {
    return (
        <div>
            <img src="pizzas/focaccia.jpg" alt="Focaccia" />
            <h3>Focaccia</h3>
            <p>Bread with italian olive oil and rosemary</p>
        </div>
    );
}

function App() {
    return (
        <div>
            <Pizza />
            <Pizza />
            <Pizza />
        </div>
    );
}

export default App;
