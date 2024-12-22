import React from 'react';

export function Item({ item, onDeleteITem, onToggleItem }) {
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
