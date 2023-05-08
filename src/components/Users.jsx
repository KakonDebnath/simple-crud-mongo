/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Users = () => {
    const loadedUser = useLoaderData();
    const [allUsers, setAllUsers] = useState(loadedUser);
    const handleDeleteUser = (id) => {
        console.log(id);
        fetch(`http://localhost:5000/users/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount === 1) {
                    alert("Deleted successfully");
                    const remaining = allUsers.filter(user => user._id !== id);
                    setAllUsers(remaining);
                } else {
                    alert("Failed to delete");
                }
            })
    }

    // handleUpdate
    const handleUpdate = () => {

    }
    return (
        <div>
            <h1>Total Users Is: {allUsers.length}</h1>
            <div>
                {
                    allUsers.map((user) => <p key={user._id}>{user.name}: {user.email}
                        <Link to={`/update/${user._id}`}>
                            <button onClick={() => handleUpdate(user._id)} >Update</button>
                        </Link>
                        <button onClick={() => handleDeleteUser(user._id)}>X</button></p>)
                }
            </div>
        </div>
    );
};

export default Users;