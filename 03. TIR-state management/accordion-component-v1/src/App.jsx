import { useState } from "react";
import faqs from "./assets/data";

function AccordionItem({ index, title, text }) {
    const [isOpen, setIsOpen] = useState(false);

    function handleToggle() {
        setIsOpen((isCurrentlyOpen) => !isCurrentlyOpen);
    }

    return (
        <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
            <p className="number">{index < 9 ? `0${index + 1}` : index + 1}</p>
            <h4 className="title">{title}</h4>
            <p className="icon">{isOpen ? "-" : "+"}</p>
            {isOpen && <div className="content-box">{text}</div>}
        </div>
    );
}

function Accordion() {
    return (
        <div className="accordion">
            {faqs.map((faq, index) => (
                <AccordionItem
                    key={index}
                    index={index}
                    title={faq.title}
                    text={faq.text}
                />
            ))}
        </div>
    );
}

function App() {
    return <Accordion />;
}

export default App;
