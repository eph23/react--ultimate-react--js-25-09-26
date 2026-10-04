import { useState } from "react";
import faqs from "./assets/data";

function AccordionItem({ index, title, currentOpen, onOpen, children }) {
    const isOpen = index === currentOpen;

    function handleToggle() {
       onOpen(isOpen ? null : index);
    }

    return (
        <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
            <p className="number">{index < 9 ? `0${index + 1}` : index + 1}</p>
            <h4 className="title">{title}</h4>
            <p className="icon">{isOpen ? "-" : "+"}</p>
            {isOpen && <div className="content-box">{children}</div>}
        </div>
    );
}

function Accordion() {
    const [currentOpen, setIsOpen] = useState(null);

    return (
        <div className="accordion">
            {faqs.map((faq, index) => (
                <AccordionItem
                    currentOpen={currentOpen}
                    onOpen={setIsOpen}
                    key={index}
                    index={index}
                    title={faq.title}
                >
                    {faq.text}
                </AccordionItem>
            ))}
        </div>
    );
}

function App() {
    return <Accordion />;
}

export default App;
