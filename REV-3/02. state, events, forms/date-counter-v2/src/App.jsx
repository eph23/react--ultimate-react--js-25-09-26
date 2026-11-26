import { useState } from "react";

function DateCounter() {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);

    function handleIncreaseCount() {
        setCount((currentCount) => currentCount + step);
    }
    function handleDecreaseCount() {
        setCount((currentCount) => currentCount - step);
    }

    function handleChangeStep(event) {
        setStep(+event.target.value);
    }
    function handleChangeCount(event) {
        setCount(+event.target.value);
    }

    function handleReset() {
        setCount(0);
        setStep(1);
    }

    const date = new Date();
    date.setDate(date.getDate() + count);

    return (
        <div>
            <div className="buttons">
                <input
                    type="range"
                    max="10"
                    min="1"
                    value={step}
                    onChange={handleChangeStep}
                />
            </div>
            <span>Step: {step}</span>
            <div className="buttons">
                <button onClick={handleDecreaseCount}>-</button>
                <input type="text" value={count} onChange={handleChangeCount} />
                <button onClick={handleIncreaseCount}>+</button>
            </div>
            <div>Count: {count}</div>
            <div>
                <h3>
                    <span>
                        {count === 0
                            ? "Today is "
                            : count > 0
                              ? `${count} days from today is `
                              : `${Math.abs(count)} days ago was `}
                    </span>
                    <span>{date.toDateString()}</span>
                </h3>
            </div>
            {count !== 0 || step !== 1 ? (
                <div className="buttons">
                    <button onClick={handleReset}>Reset</button>
                </div>
            ) : (
                ""
            )}
        </div>
    );
}

function App() {
    return (
        <div className="container">
            <h1>Date Counter</h1>
            <DateCounter />
        </div>
    );
}

export default App;
