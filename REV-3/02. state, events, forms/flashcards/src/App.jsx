import { useState } from "react";
import { questions } from "./assets/data";

function App() {
    const [selectedId, setSelectedId] = useState(null);

    function handleSelect(id) {
        setSelectedId(id !== selectedId ? id : null);
    }

    return (
        <div className="flashcards">
            {questions.map((question) => (
                <div
                    key={question.id}
                    className={question.id === selectedId ? "selected" : ""}
                    onClick={() => handleSelect(question.id)}
                >
                    <h3>
                        {question.id === selectedId
                            ? question.answer
                            : question.question}
                    </h3>
                </div>
            ))}
        </div>
    );
}

export default App;
