import { useState } from "react";

function BillInput({ bill, onSetBill }) {
    return (
        <div className="inputs">
            <label>How much was the bill?</label>
            <input
                type="text"
                value={bill}
                onChange={onSetBill}
                placeholder="Bill amount..."
            />
        </div>
    );
}

function SelectPercentage({ percentage, onSetPercentage, children }) {
    return (
        <div className="inputs">
            <label>{children}</label>
            <select value={percentage} onChange={onSetPercentage}>
                <option value="0">Dissatisfied (0%)</option>
                <option value="5">It was okay (5%)</option>
                <option value="10">It was good (10%)</option>
                <option value="20">Absolutely amazing (20%)</option>
            </select>
        </div>
    );
}

function Output({ bill, tip }) {
    return (
        <div className="message">
            <h3>
                {" "}
                You pay ${tip + bill} (Bill:${bill} + Tip:${tip})
            </h3>
        </div>
    );
}

function Reset({ onReset }) {
    return (
        <div className="buttons">
            <button className="button" onClick={onReset}>
                Reset
            </button>
        </div>
    );
}

function TipCalculator() {
    const [bill, setBill] = useState("");
    const [myPercentage, setMyPercentage] = useState(0);
    const [friendsPercentage, setFriendsPercentage] = useState(0);

    function handleSetBill(event) {
        setBill(+event.target.value);
    }

    function handleMyPercentage(event) {
        setMyPercentage(+event.target.value);
    }

    function handleFriendsPercentage(event) {
        setFriendsPercentage(+event.target.value);
    }

    function handleReset() {
        setBill("");
        setMyPercentage(0);
        setFriendsPercentage(0);
    }

    const avgPercentage = (myPercentage + friendsPercentage) / 2;
    const tip = bill * (avgPercentage / 100);

    return (
        <div>
            <BillInput bill={bill} onSetBill={handleSetBill} />
            <SelectPercentage
                percentage={myPercentage}
                onSetPercentage={handleMyPercentage}
            >
                How did you liked the service?
            </SelectPercentage>
            <SelectPercentage
                percentage={friendsPercentage}
                onSetPercentage={handleFriendsPercentage}
            >
                How did your friend liked the service?
            </SelectPercentage>
            {bill > 0 && (
                <>
                    <Output bill={bill} tip={tip} />
                    <Reset onReset={handleReset} />
                </>
            )}
        </div>
    );
}

function App() {
    return (
        <div className="container">
            <h1>Tip Calculator</h1>
            <TipCalculator />
        </div>
    );
}

export default App;
