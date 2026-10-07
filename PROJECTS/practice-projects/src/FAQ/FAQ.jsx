import { useState } from "react";
import { faqs } from "./data.js";

function AccordionItem({ item, index, currentOpen, setCurrentOpen }) {
    const isOpen = index === currentOpen;

    function handleToggle() {
        setCurrentOpen(isOpen ? null : index);
    }

    return (
        <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
            <p className="number">{index < 9 ? `0${index + 1}` : index + 1}.</p>
            <h4 className="title">{item.question}</h4>
            <p className="icon">{isOpen ? "-" : "+"}</p>
            {isOpen && <div className="content-box">{item.answer}</div>}
        </div>
    );
}

function Accordion() {
    const [currentOpen, setCurrentOpen] = useState(null);

    return (
        <div className="accordion">
            {faqs.map((item, index) => (
                <AccordionItem
                    key={item.id}
                    item={item}
                    index={index}
                    currentOpen={currentOpen}
                    setCurrentOpen={setCurrentOpen}
                />
            ))}
        </div>
    );
}

function App() {
    return <Accordion />;
}

export default App;
