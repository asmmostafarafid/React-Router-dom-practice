import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const {friendId} = useParams();
    const [friend,setFriend] = useState();
    useEffect(() => {
        const url =`https://jsonplaceholder.typicode.com/users/${friendId}`; 
        fetch(url)
        .then(rse => rse.json())
        .then(data => setFriend(data))
    }, [])
    return (
        <div>
            <p>This is Friend Details ...........{friendId}</p>
            <h2>Name: {friend.name}</h2>
            <p>Email: {friend.email}</p>
            <p>Phone: {friend.phone}</p>
            <p>Website: {friend.website}</p>
        </div>
    );
};

export default FriendDetail;