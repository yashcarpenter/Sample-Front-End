// src/components/UserForm.js
import React, { useState } from 'react';
import axios from 'axios';

const UserForm = () => {
    const [user, setUser] = useState({
        name: '',
        age: 0,
    });

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8085/api/users', user);
            console.log('User saved:', response.data);
        } catch (error) {
            console.error('Error saving user:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" name="name" value={user.name} onChange={handleChange} />
            </label>
            <br />
            <label>
                Age:
                <input type="number" name="age" value={user.age} onChange={handleChange} />
            </label>
            <br />
            <button type="submit">Save User</button>
        </form>
    );
};

export default UserForm;
