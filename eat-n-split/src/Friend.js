import { Button } from './Button';

/**
 * A single friend component.
 *
 * @param {Object} props
 * @prop {Object} friend The friend object.
 * @prop {function} onSelection The function to run when the user clicks on the
 * friend.
 * @prop {Object} selectFriend The currently selected friend object.
 *
 * @return {React.Element} The friend element.
 */
export function Friend({ friend, onSelection, selectFriend }) {
    const isSelected = selectFriend?.id === friend.id;
    return (
        <li className={isSelected ? 'selected' : ''}>
            <img src={friend.image} alt={friend.name} />
            <h3>{friend.name}</h3>
            {/* Viewing the text */}
            {friend.balance < 0 ? (
                <p className="red">
                    you owe {friend.name} ${Math.abs(friend.balance)}
                </p>
            ) : friend.balance > 0 ? (
                <p className="green">
                    {friend.name} owes you ${Math.abs(friend.balance)}
                </p>
            ) : (
                <p>you and {friend.name} are even.</p>
            )}
            <Button onClick={() => onSelection(friend)}>
                {isSelected ? 'close' : 'Select'}
            </Button>
        </li>
    );
}
