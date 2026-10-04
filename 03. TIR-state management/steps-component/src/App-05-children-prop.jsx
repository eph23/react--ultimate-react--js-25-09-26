import { useState } from "react";

const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
];

function Button({ textColor, backgroundColor, onClick, children }) {
    return (
        <button
            style={{
                backgroundColor: backgroundColor,
                color: textColor,
            }}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

function App() {
    const [step, setStep] = useState(1);
    const [isOpen, setIsOpen] = useState(true);

    function handlePrevious() {
        if (step > 1) {
            setStep((currentStep) => currentStep - 1);
        }
    }

    function handleNext() {
        if (step < messages.length) {
            setStep((currentStep) => currentStep + 1);
        }
    }

    function handleClose() {
        setIsOpen((open) => !open);
    }

    return (
        <>
            <button className="close" onClick={handleClose}>
                &times;
            </button>

            {isOpen && (
                <div className="steps">
                    <div className="numbers">
                        <div className={step >= 1 ? "active" : ""}>1</div>
                        <div className={step >= 2 ? "active" : ""}>2</div>
                        <div className={step >= 3 ? "active" : ""}>3</div>
                    </div>

                    <p className="message">
                        Ste {step}: {messages[step - 1]}
                    </p>
                    <div className="buttons">
                        <Button
                            backgroundColor="#7950f2"
                            textColor="#fff"
                            onClick={handlePrevious}
                        >
                            <span>⏪</span> Previous
                        </Button>
                        <Button
                            backgroundColor="#7950f2"
                            textColor="#fff"
                            onClick={handleNext}
                        >
                            Next <span>⏩</span>
                        </Button>
                    </div>
                </div>
            )}
        </>
    );
}
export default App;
