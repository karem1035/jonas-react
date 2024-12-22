import React from 'react';

export function Stats({ items }) {
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
