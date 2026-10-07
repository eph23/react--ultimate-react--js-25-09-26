import { faqs } from "./data.js";

function AccordionItem({ item, index }) {
    return (
        <div className="item">
            <p className="number">{index < 9 ? `0${index + 1}` : index + 1}.</p>
            <h4 className="title">{item.question}</h4>
            <p className="icon">-</p>
            <div className="content-box">{item.answer}</div>
        </div>
    );
}

function Accordion() {
    return (
        <div className="accordion">
            {faqs.map((item, index) => (
                <AccordionItem key={item.id} item={item} index={index} />
            ))}
        </div>
    );
}

function App() {
    return <Accordion />;
}

export default App;
