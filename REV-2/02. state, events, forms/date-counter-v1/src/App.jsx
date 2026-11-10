import { useState } from "react";

function App() {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);

    function handleIncreaseStep() {
        setStep((currentStep) => currentStep + 1);
    }
    function handleDecreaseStep() {
        setStep((currentStep) => currentStep - 1);
    }

    function handleIncreaseCount() {
        setCount((currentCount) => currentCount + step);
    }
    function handleDecreaseCount() {
        setCount((currentCount) => currentCount - step);
    }

    const date = new Date();
    date.setDate(date.getDate() + count);

    return (
        <div className="container">
            <h1>Date Counter</h1>
            <div>
                <div className="buttons">
                    <button onClick={handleDecreaseStep}>-</button>
                    <span>Step: {step}</span>
                    <button onClick={handleIncreaseStep}>+</button>
                </div>
                <div className="buttons">
                    <button onClick={handleDecreaseCount}>-</button>
                    <span>Count: {count}</span>
                    <button onClick={handleIncreaseCount}>+</button>
                </div>
            </div>
            <div>
                <h2>
                    <span>
                        {count === 0
                            ? "Today is "
                            : count > 0
                              ? `${count} days from today is `
                              : `${Math.abs(count)} days ago was `}
                    </span>
                    <span>{date.toDateString()}</span>
                </h2>
            </div>
        </div>
    );
}

export default App;
