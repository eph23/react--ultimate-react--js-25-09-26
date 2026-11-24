const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
];

function App() {
    const step = 1;

    function handlePrevious() {
        console.log(`Previous`);
    }

    function handleNext() {
        console.log(`Next`);
    }

    return (
        <div className="steps">
            <div className="numbers">
                <div className={step >= 1 ? "active" : ""}>1</div>
                <div className={step >= 2 ? "active" : ""}>2</div>
                <div className={step >= 3 ? "active" : ""}>3</div>
            </div>

            <div className="message">
                <h3>Step: {step}</h3>
                <p>{messages[step - 1]}</p>
            </div>

            <div className="buttons">
                <button
                    onClick={handlePrevious}
                    style={{ backgroundColor: "#7950f2", color: "#fff" }}
                >
                    Previous
                </button>
                <button
                    onClick={handleNext}
                    style={{ backgroundColor: "#7950f2", color: "#fff" }}
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default App;
