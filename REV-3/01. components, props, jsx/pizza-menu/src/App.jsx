function Header() {
    return (
        <header className="header">
            <h1>First React Pizza Co.</h1>
        </header>
    );
}

function Pizza() {
    return (
        <div>
            <img src="pizzas/spinaci.jpg" alt="Pizza Soinaci" />
            <h3>Pizza Spinaci</h3>
            <p>Tomato, mozarella, spinach, and ricotta cheese</p>
        </div>
    );
}

function Menu() {
    return (
        <main className="menu">
            <Pizza />
        </main>
    );
}

function Footer() {
    return (
        <footer className="footer">
            <p>We are currently open</p>
        </footer>
    );
}

function App() {
    return (
        <di className="container">
            <Header />
            <Menu />
            <Footer />
        </di>
    );
}

export default App;
