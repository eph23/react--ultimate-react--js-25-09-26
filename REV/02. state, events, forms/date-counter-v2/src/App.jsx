import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);

    function handleDecreaseCount() {
        setCount((currentCount) => currentCount - step);
    }
    function handleIncreaseCount() {
        setCount((currentCount) => currentCount + step);
    }

    function handleStep(event) {
        setStep(Number(event.target.value));
    }

    function handleCount(event) {
        setCount(Number(event.target.value));
    }

    function handleReset() {
        setCount(0);
        setStep(1);
    }

    const date = new Date();
    date.setDate(date.getDate() + count);

    return (
        <div>
            <div>
                <input
                    type="range"
                    min="0"
                    max="10"
                    onChange={handleStep}
                    value={step}
                />
                <br />
                Step: {step}
            </div>
            <div>
                <div className="buttons">
                    <button onClick={handleDecreaseCount}>-</button>
                    <input type="text" value={count} onChange={handleCount} />
                    <button onClick={handleIncreaseCount}>+</button>
                </div>
                <span>Count: {count}</span>
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
            {count !== 0 || step !== 1 ? (
                <div className="buttons">
                    <button onClick={handleReset}>Reset</button>
                </div>
            ) : null}
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
