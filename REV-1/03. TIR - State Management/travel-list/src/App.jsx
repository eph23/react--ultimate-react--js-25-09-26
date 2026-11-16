import { useState } from "react";
import Logo from "./Logo";
import Forms from "./Forms";
import PackingList from "./PackingList";
import State from "./State";

function App() {
    const [items, setItems] = useState([]);

    function handleAddItems(item) {
        setItems((items) => [...items, item]);
    }

    function handleDeleteItem(id) {
        setItems((items) => items.filter((item) => item.id !== id));
    }

    function handleToggleItem(id) {
        setItems((items) =>
            items.map((item) =>
                item.id === id ? { ...item, packed: !item.packed } : item,
            ),
        );
    }

    function handleClearList() {
        const confirmed = window.confirm("Are you sue?");
        if (confirmed) {
            setItems([]);
        }
    }

    return (
        <div className="app">
            <Logo />
            <Forms onAddItems={handleAddItems} />
            <PackingList
                items={items}
                onDeleteItem={handleDeleteItem}
                onToggleItem={handleToggleItem}
                onClearList={handleClearList}
            />
            <State items={items} />
        </div>
    );
}

export default App;
