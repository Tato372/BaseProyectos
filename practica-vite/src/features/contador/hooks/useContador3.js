import { useState } from 'react';
import useContador from './useContador';

function useContador3({ age, name, setAge, setCount, setName }) {
    const { handleIncrement } = useContador(setCount);
    const [users, setUsers] = useState(new Map());

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleAgeChange(event) {
        const ageValue = event.target.value;
        setAge(ageValue === '' ? null : Number.parseInt(ageValue, 10));
    }

    function handleSubmit(event) {
        event.preventDefault();

        if (!name.trim() || !Number.isInteger(age)) {
            return;
        }

        const userName = name.trim();

        setUsers((currentUsers) => {
            const updatedUsers = new Map(currentUsers);

            updatedUsers.set(userName, {
                name: userName,
                age,
            });

            return updatedUsers;
        });
        handleIncrement();
        setName('');
        setAge(null);
    }

    return {
        handleAgeChange,
        handleNameChange,
        handleSubmit,
        users,
    };
}

export default useContador3;