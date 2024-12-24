import { useState } from 'react';
import { Button } from './Button';

/**
 * A form component to add a new friend.
 *
 * @param {function} onAddFriend The function to run when the form is submitted.
 * It should take a new friend object with keys `name`, `image`, and `balance` as
 * an argument.
 *
 * @return {React.Element} The form element.
 */
export function FormAddFriend({ onAddFriend }) {
    const [name, setName] = useState('');
    const [image, setImage] = useState('https://i.pravatar.cc/48');

    function handleSubmit(e) {
        e.preventDefault();

        if (!name || !image) return;

        const id = crypto.randomUUID;

        const newFriend = {
            name,
            image: image,
            balance: 0,
            id,
        };

        setName('');
        setImage('https://i.pravatar.cc/48');
        onAddFriend(newFriend);
    }

    return (
        <form className="form-add-friend" onSubmit={handleSubmit}>
            <label>💁‍♂️ Friend name</label>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <label>📷 Image URL</label>
            <input
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
            />
            <Button>Add</Button>
        </form>
    );
}
