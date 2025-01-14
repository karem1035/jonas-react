import { use, useState } from 'react';
import './App.css';
import { Button } from './Button';
import { FriendList } from './FriendList';
import { FormAddFriend } from './FormAddFriend';
import { FormSplitBill } from './FormSplitBill';

const initialFriends = [
    {
        id: 118836,
        name: 'Clark',
        image: 'https://i.pravatar.cc/48?u=118836',
        balance: -7,
    },
    {
        id: 933372,
        name: 'Sarah',
        image: 'https://i.pravatar.cc/48?u=933372',
        balance: 20,
    },
    {
        id: 499476,
        name: 'Anthony',
        image: 'https://i.pravatar.cc/48?u=499476',
        balance: 0,
    },
];

/**
 * The top-level component for the application.
 *
 * @return {React.Element} The app element.
 */
export default function App() {
    const [friends, setFriends] = useState([...initialFriends]);
    const [showAddFriend, setShowAddFriend] = useState(false);
    const [selectFriend, setSelectedFriend] = useState(null);

    const handleShowAddFriend = () => {
        setShowAddFriend(!showAddFriend);
    };

    const handleAddFriend = (friend) => {
        setFriends([...friends, friend]);
        setShowAddFriend(false);
    };

    const handleSelection = (friend) => {
        setSelectedFriend(selectFriend?.id === friend.id ? null : friend);
        setShowAddFriend(false);
    };

    function handleSplitBill(value) {
        setFriends((friends) =>
            friends.map((friend) =>
                friend.id === selectFriend.id
                    ? { ...friend, balance: friend.balance + value }
                    : friend
            )
        );
        setSelectedFriend(null);
    }
    return (
        <div className="app">
            <div className="sidebar">
                <FriendList
                    friends={friends}
                    onSelection={handleSelection}
                    selectFriend={selectFriend}
                />

                {showAddFriend && (
                    <FormAddFriend onAddFriend={handleAddFriend} />
                )}

                <Button onClick={handleShowAddFriend}>
                    {showAddFriend ? 'Close' : 'Add Friend'}
                </Button>
            </div>

            {selectFriend && (
                <FormSplitBill
                    selectFriend={selectFriend}
                    onSplitBill={handleSplitBill}
                    key={selectFriend.id}
                />
            )}
        </div>
    );
}
