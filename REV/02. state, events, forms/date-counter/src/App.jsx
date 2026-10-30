import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(1);
    const [step, setStep] = useState(1);

    function handleDecreaseCount() {
        setCount((currentCount) => currentCount - step);
    }
    function handleIncreaseCount() {
        setCount((currentCount) => currentCount + step);
    }

    function handleDecreaseStep() {
        setStep((currentStep) => currentStep - 1);
    }
    function handleIncreaseStep() {
        setStep((currentStep) => currentStep + 1);
    }

    const date = new Date();
    date.setDate(date.getDate() + count);

    return (
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
            <h1>
                <span>{count === 0 ? "Today is " : ""}</span>
                <span>
                    {count < 0 ? `${Math.abs(count)} days ago was ` : ""}
                </span>
                <span>
                    {count > 0 ? `${Math.abs(count)} days from today is ` : ""}
                </span>

                <span>{date.toDateString()}</span>
            </h1>
        </div>
    );
}

function App() {
    return (
        <div className="container">
            <Counter />
        </div>
    );
}

export default App;
