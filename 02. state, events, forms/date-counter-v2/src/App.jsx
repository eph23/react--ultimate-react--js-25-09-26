import { useState } from "react";

function Counter() {
    const [step, setStep] = useState(1);
    const [count, setCount] = useState(0);

    const date = new Date();
    date.setDate(date.getDate() + count);

    function handleStepChange(event) {
        setStep(Number(event.target.value));
        console.log(step);
    }

    function handleCountChange(event) {
        setCount(Number(event.target.value));
        console.log(count);
    }

    function handleCountIncrease() {
        setCount((currentCount) => currentCount + step);
    }

    function handleCountDecrease() {
        setCount((currentCount) => currentCount - step);
    }

    function handleReset() {
        setStep(1);
        setCount(0);
    }

    return (
        <>
            <div className="input-container">
                <input
                    type="range"
                    min="0"
                    max="10"
                    onChange={handleStepChange}
                    value={step}
                />
                <div>Step: {step}</div>
            </div>
            <div className="input-container">
                <div className="buttons">
                    <button onClick={handleCountDecrease}>-</button>
                    <input
                        type="text"
                        min="0"
                        max="10"
                        onChange={handleCountChange}
                        value={count}
                    />
                    <button onClick={handleCountIncrease}>+</button>
                </div>
                <span>Count: {count}</span>
            </div>

            <div>
                <h1>
                    <span>{count === 0 ? "Today is " : ""}</span>
                    <span>
                        {count < 0 ? `${Math.abs(count)} days ago was ` : ""}
                    </span>
                    <span>
                        {count > 0
                            ? `${Math.abs(count)} days from today is `
                            : ""}
                    </span>

                    <span>{date.toDateString()}</span>
                </h1>
            </div>
            {count !== 0 || step !== 1 ? (
                <div className="buttons">
                    <button onClick={handleReset}>Reset</button>
                </div>
            ) : (
                ""
            )}
        </>
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
