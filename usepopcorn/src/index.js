import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import StarRating from './StarRating';

function Test() {
    const [rating, setRating] = useState(0);
    return (
        <div>
            <StarRating onSetRating={setRating} maxRating={10} color="blue" />
            <h1>This movie is {rating} stars</h1>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <StarRating
            maxRating={5}
            messages={['Terrible', 'Bad', 'Ok', 'Good', 'Great']}
            defaultRating={3}
            onSetRating={(rating) => console.log(rating)}
        />
        <Test />
    </React.StrictMode>
);
