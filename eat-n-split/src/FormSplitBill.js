import { useState } from 'react';
import { Button } from './Button';

/**
 * A form component to split a bill with a friend.
 *
 * @param {Object} props
 * @prop {Object} selectFriend The friend object to split the bill with.
 * @prop {function} onSplitBill The function to run when the form is submitted. It
 * should take the value of the split bill as an argument.
 *
 * @return {React.Element} The form element.
 */
export function FormSplitBill({ selectFriend, onSplitBill }) {
    const [bill, setBill] = useState('');
    const [paidByUser, setPaidByUser] = useState('');
    const paidByFriend = bill ? bill - paidByUser : '';
    const [whoIsPaying, setWhoIsPaying] = useState('user');

    function handleSubmit(e) {
        e.preventDefault();

        if (!bill || !paidByUser) return;
        onSplitBill(whoIsPaying === 'user' ? paidByFriend : -paidByUser);
    }

    return (
        <form className="form-split-bill" onSubmit={handleSubmit}>
            <h2>Split a bill with {selectFriend.name}</h2>

            <label>💰 Bill Value</label>
            <input
                type="number"
                value={bill}
                onChange={(e) => setBill(Number(e.target.value))}
            />

            <label>🧑‍🦱 Your expense</label>
            <input
                type="number"
                value={paidByUser}
                onChange={(e) =>
                    setPaidByUser(
                        Number(e.target.value) > bill
                            ? paidByUser
                            : Number(e.target.value)
                    )
                }
            />

            <label>🧑‍🤝‍🧑 {selectFriend.name}'s expense</label>
            <input type="text" disabled value={paidByFriend} />

            <label>🤑 Who is paying the bill</label>
            <select
                value={whoIsPaying}
                onChange={(e) => setWhoIsPaying(e.target.value)}
            >
                <option value="user">You</option>
                <option value="friend">{selectFriend.name}</option>
            </select>

            <Button>Split bill</Button>
        </form>
    );
}
