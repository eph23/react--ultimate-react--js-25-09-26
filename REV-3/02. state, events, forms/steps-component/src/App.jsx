import { useState } from "react";

const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
];

function App() {
    const [isOpen, setIsOpen] = useState(true);
    const [step, setStep] = useState(1);

    function handleToggle() {
        setIsOpen(!isOpen);
    }

    function handlePrevious() {
        if (step > 1) setStep(step - 1);
    }

    function handleNext() {
        if (step < messages.length) setStep(step + 1);
    }

    return (
        <>
            <button className="close" onClick={handleToggle}>
                &times;
            </button>
            {isOpen && (
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
                            style={{
                                backgroundColor: "#7950f2",
                                color: "#fff",
                            }}
                        >
                            Previous
                        </button>
                        <button
                            onClick={handleNext}
                            style={{
                                backgroundColor: "#7950f2",
                                color: "#fff",
                            }}
                        >
                            Next
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default App;
