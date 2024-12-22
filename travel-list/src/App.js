import React, { useState } from 'react';

const initialItems = [
    { id: 1, description: 'Passports', quantity: 2, packed: false },
    { id: 2, description: 'Socks', quantity: 12, packed: false },
    { id: 3, description: 'Charger', quantity: 1, packed: true },
];

export default function App() {
    const [items, setItems] = useState([]);

    function handleAddItem(item) {
        setItems((items) => [...items, item]);
    }

    return (
        <div className="app">
            <Logo />
            <Form onAddItems={handleAddItem} />
            <PackingList items={items} />
            <Stats />
        </div>
    );
}

function Logo() {
    return (
        <h1>
            <span role="img" aria-label="heart emoji">
                🌴
            </span>
            Far Away
            <span role="img" aria-label="heart emoji">
                🏖️
            </span>
        </h1>
    );
}
function Form({ onAddItems }) {
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState(1);

    function handleSubmit(e) {
        e.preventDefault();

        if (!description) return;

        const newItem = {
            id: Date.now(),
            description,
            quantity,
            packed: false,
        };
        onAddItems(newItem);
        setDescription('');
        setQuantity(1);
    }

    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>
                What do you need for your
                <span role="img" aria-label="heart emoji">
                    😍
                </span>
                trip
            </h3>
            <select
                value={quantity}
                onChange={(e) => {
                    setQuantity(Number(e.target.value));
                }}
            >
                {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                    <option key={num} value={num}>
                        {num}
                    </option>
                ))}
            </select>
            <input
                type="text"
                placeholder="Item..."
                value={description}
                onChange={(e) => {
                    setDescription(e.target.value);
                }}
            />
            <button>Add</button>
        </form>
    );
}
function PackingList({ items }) {
    return (
        <div className="list">
            <ul>
                {items.map((item) => (
                    <Item key={item.id} item={item} />
                ))}
            </ul>
        </div>
    );
}

function Item({ item }) {
    return (
        <li>
            <input type="checkbox" />
            <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
                {item.quantity} {item.description}
            </span>
            <button className="">
                <span role="img" aria-label="heart emoji">
                    ❌
                </span>
            </button>
        </li>
    );
}

function Stats() {
    return (
        <footer className="stats">
            <em>
                <span role="img" aria-label="heart emoji">
                    👜
                </span>
                You have x items on your list, and you already packes X (X%) of
                them.
            </em>
        </footer>
    );
}
