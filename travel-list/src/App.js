import React, { useState } from 'react';
import Logo from './components/Logo';
import { Form } from './components/Form';
import { PackingList } from './components/PackingList';
import { Stats } from './components/Stats';

export default function App() {
    const [items, setItems] = useState([]);

    function handleAddItem(item) {
        setItems((items) => [...items, item]);
    }

    function handleDeleteItem(id) {
        setItems((items) => items.filter((item) => item.id !== id));
    }

    function handleToggleItem(id) {
        setItems((items) =>
            items.map((item) =>
                item.id === id ? { ...item, packed: !item.packed } : item
            )
        );
    }

    function clearList() {
        const confirmed = window.confirm(
            'Are you sure you want to delete all items?'
        );
        if (confirmed) setItems([]);
    }
    console.log(items);

    return (
        <div className="app">
            <Logo />
            <Form onAddItems={handleAddItem} />
            <PackingList
                items={items}
                onDeleteITem={handleDeleteItem}
                onToggleItem={handleToggleItem}
                clearItems={clearList}
            />
            <Stats items={items} />
        </div>
    );
}
