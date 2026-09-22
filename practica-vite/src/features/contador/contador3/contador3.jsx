import { useState } from 'react';
import { CONTADOR_TEXT } from '../constants/contador.constants';
import useContador3 from '../hooks/useContador3';

export const Contador3 = ({ setCount, count }) => {
	const [name, setName] = useState('');
	const [age, setAge] = useState(null);
	const {
		handleAgeChange,
		handleNameChange,
		handleSubmit,
		users,
	} = useContador3({ age, name, setAge, setCount, setName });

	return (
		<>
			<h1>{CONTADOR_TEXT.COUNT} 3</h1>
			<p>{CONTADOR_TEXT.VALUE}: {count}</p>
			<p>{CONTADOR_TEXT.USERS}: {users.size}</p>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder={CONTADOR_TEXT.NAME}
					value={name}
					onChange={handleNameChange}
				/>
				<input
					type="number"
					placeholder={CONTADOR_TEXT.AGE}
					value={age ?? ''}
					onChange={handleAgeChange}
				/>
				<button type="submit">{CONTADOR_TEXT.ADD_USER}</button>
			</form>
		</>
	);
};

export default Contador3;