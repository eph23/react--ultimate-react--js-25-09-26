import { useState } from "react";

function App() {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);

    function handleChangeStep(event) {
        setStep(+event.target.value);
    }
    function handleChangeCount(event) {
        setCount(+event.target.value);
    }

    function handleIncreaseCount() {
        setCount((currentCount) => currentCount + step);
    }
    function handleDecreaseCount() {
        setCount((currentCount) => currentCount - step);
    }

    function handleReset() {
        setCount(0);
        setStep(1);
    }

    const date = new Date();
    date.setDate(date.getDate() + count);

    return (
        <div className="container">
            <h1>Date Counter</h1>
            <div>
                <div>
                    <div className="buttons">
                        <input
                            type="range"
                            min="1"
                            max="10"
                            value={step}
                            onChange={handleChangeStep}
                        />
                    </div>
                    <p>Step: {step}</p>
                </div>
                <div>
                    <div className="buttons">
                        <button onClick={handleDecreaseCount}>-</button>
                        <input
                            type="text"
                            value={count}
                            onChange={handleChangeCount}
                        />
                        <button onClick={handleIncreaseCount}>+</button>
                    </div>
                    <p>Count: {}</p>
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

export default App;
