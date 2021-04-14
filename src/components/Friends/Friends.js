import React from 'react';
import { Link, useHistory } from 'react-router-dom';



const Friends = (props) => {
    const { name, email, id } = props.friends;
    const history = useHistory();
    const handleClick = (friendId) => {
        const url = `/friend/${friendId}`;
        history.push(url);
    }
        
    const friendStyle = {
        border: '1px solid purple',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px'
    }
    return (
        <div style={friendStyle}>
            <h1>Name: {name}</h1>
            <p>email: {email}</p>
            <Link to={'/friend/${id}'}>
                <button onClick={() => handleClick}>Show Detail of {id} </button>
            </Link>
        </div>
    );
};

export default Friends;