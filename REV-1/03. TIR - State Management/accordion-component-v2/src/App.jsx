import { useState } from "react";
import faqs from "./assets/data.js";

function AccordionItem({ title, index, currentOpen, onOpen, children }) {
    const isOpen = index === currentOpen;

    function handleToggle() {
        onOpen(isOpen ? null : index);
    }

    return (
        <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
            <p className="number">{index < 9 ? `0${index + 1}` : index + 1}</p>
            <h4 className="title">{title}</h4>
            <p className="icon">{isOpen ? "-" : "+"}</p>
            {isOpen && (
                <div className="content-box">
                    <p>{children}</p>
                </div>
            )}
        </div>
    );
}
function Accordion() {
    const [currentOpen, setCurrentOpen] = useState(null);

    return (
        <div className="accordion">
            {faqs.map((item, index) => {
                return (
                    <AccordionItem
                        key={index + 1}
                        currentOpen={currentOpen}
                        onOpen={setCurrentOpen}
                        title={item.title}
                        index={index}
                    >
                        {item.text}
                    </AccordionItem>
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
