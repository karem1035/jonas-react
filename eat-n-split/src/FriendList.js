import { Friend } from './Friend';

/**
 * A component that renders a list of friends.
 *
 * @param {Object} props
 * @prop {Array<Object>} friends The friends to render.
 * @prop {function} onSelection The function to run when the user clicks on a
 * friend.
 * @prop {Object} selectFriend The currently selected friend object.
 *
 * @return {React.Element} The list of friends.
 */
export function FriendList({ friends, onSelection, selectFriend }) {
    return (
        <div>
            <ul>
                {friends.map((friend) => (
                    <Friend
                        key={friend.id}
                        friend={friend}
                        onSelection={onSelection}
                        selectFriend={selectFriend}
                    />
                ))}
            </ul>
        </div>
    );
}
