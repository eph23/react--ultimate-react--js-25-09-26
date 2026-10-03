import { useState } from "react";
// import initialItems from "./assets/data";

import { Logo } from "./Logo.jsx";
import { Form } from "./Form.jsx";
import { PackingList } from "./PackingList.jsx";
import { Stats } from "./Stats.jsx";

function App() {
    // const [items, setItems] = useState(initialItems);
    const [items, setItems] = useState([]);

    function handleAddItems(item) {
        setItems((currentItems) => [...currentItems, item]);
    }

    function handleDeleteItem(id) {
        setItems((currentItems) =>
            currentItems.filter((item) => item.id !== id),
        );
    }

    function handleToggleItem(id) {
        setItems((currentItems) =>
            currentItems.map((item) =>
                item.id === id ? { ...item, packed: !item.packed } : item,
            ),
        );
    }

    function handleClearList() {
        const confirmed = window.confirm(
            `Are you sure you want to DELETE all items?`,
        );

        if (confirmed) {
            setItems([]);
        }
    }

    return (
        <div className="app">
            <Logo />
            <Form onAddItems={handleAddItems} />
            <PackingList
                items={items}
                onDeleteItem={handleDeleteItem}
                onToggleItem={handleToggleItem}
                onClearList={handleClearList}
            />
            <Stats items={items} />
        </div>
    );
}

export default App;
