import { Children, useState } from "react";

const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
];

function Button({ textColor, bgColor, onClick, text, emoji, children }) {
    return (
        <button
            style={{
                backgroundColor: bgColor,
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

    function handleClose() {
        setIsOpen((isCurrentlyOpen) => !isCurrentlyOpen);
    }

    function handlePrevious() {
        if (step > 1) setStep((currentStep) => currentStep - 1);
    }
    function handleNext() {
        if (step < messages.length) setStep((currentStep) => currentStep + 1);
    }

    return (
        <>
            <button className="close" onClick={handleClose}>
                &times;
            </button>
            <div>
                {isOpen && (
                    <div className="steps">
                        <div className="numbers">
                            <div className={step >= 1 ? "active" : ""}>1</div>
                            <div className={step >= 2 ? "active" : ""}>2</div>
                            <div className={step >= 3 ? "active" : ""}>3</div>
                        </div>
                        <p className="message">
                            Step {step}: {messages[step - 1]}
                        </p>
                        <div className="buttons">
                            <Button
                                textColor="#fff"
                                bgColor="#7950f2"
                                onClick={handlePrevious}
                            >
                                <span>⏮️</span> Previous
                            </Button>
                            <Button
                                textColor="#fff"
                                bgColor="#7950f2"
                                onClick={handleNext}
                            >
                                next <span>⏭️</span>
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default App;
