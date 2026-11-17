import { useState } from "react";
import faqs from "./assets/data.js";

function AccordionItem({ title, text, index }) {
    const [isOpen, setIsOpen] = useState(false);

    function handleToggle() {
        setIsOpen((currentOpen) => !currentOpen);
    }

    return (
        <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
            <p className="number">{index < 9 ? `0${index + 1}` : index + 1}</p>
            <h4 className="title">{title}</h4>
            <p className="icon">{isOpen ? "-" : "+"}</p>
            {isOpen && (
                <div className="content-box">
                    <p>{text}</p>
                </div>
            )}
        </div>
    );
}
function Accordion() {
    return (
        <div className="accordion">
            {faqs.map((item, index) => {
                return (
                    <AccordionItem
                        key={index + 1}
                        title={item.title}
                        index={index}
                        text={item.text}
                    />
                );
            })}
        </div>
    );
}

function App() {
    return (
        <div>
            <Accordion />
        </div>
    );
}

export default App;
