import React, { useState } from 'react';

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
function PackingList({ items, onDeleteITem, onToggleItem, clearItems }) {
    const [sortBy, setSortBy] = useState('input');
    let sortedItems;

    if (sortBy === 'input') sortedItems = items;
    if (sortBy === 'description')
        sortedItems = items
            .slice()
            .sort((a, b) => a.description.localeCompare(b.description));

    if (sortBy === 'packed')
        sortedItems = items
            .slice()
            .sort((a, b) => Number(a.packed) - Number(b.packed));
    return (
        <div className="list">
            <ul>
                {sortedItems.map((item) => (
                    <Item
                        key={item.id}
                        item={item}
                        onDeleteITem={onDeleteITem}
                        onToggleItem={onToggleItem}
                    />
                ))}
            </ul>

            <div className="actions">
                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                >
                    <option value="input">Sort by input order</option>
                    <option value="description">Sort by description</option>
                    <option value="packed">Sort by packed status</option>
                </select>
                <button onClick={() => clearItems()}>Clear list</button>
            </div>
        </div>
    );
}

function Item({ item, onDeleteITem, onToggleItem }) {
    return (
        <li>
            <input
                type="checkbox"
                value={item.packed}
                onChange={() => onToggleItem(item.id)}
            />

            <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
                {item.quantity} {item.description}
            </span>
            <button className="">
                <span
                    role="img"
                    aria-label="heart emoji"
                    onClick={() => {
                        onDeleteITem(item.id);
                    }}
                >
                    ❌
                </span>
            </button>
        </li>
    );
}

function Stats({ items }) {
    if (!items.length) {
        return (
            <p className="stats">
                Start Adding some items to your packing list 🚀
            </p>
        );
    }
    const numItems = items.length;
    const packedItems = items.filter((item) => item.packed).length;
    const percentage = Math.round((packedItems / numItems) * 100);

    return (
        <footer className="stats">
            <em>
                {percentage === 100
                    ? 'You got everything! ready to go. 🛸'
                    : `👜 You have ${numItems} items on your list, and you already
                packed ${packedItems} which is ${percentage || 0}% of them.`}
            </em>
        </footer>
    );
}
