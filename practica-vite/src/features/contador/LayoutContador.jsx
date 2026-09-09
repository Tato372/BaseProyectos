import {useState} from 'react';
import { CONTADOR_TEXT } from './constants/contador.constants';

export function LayoutContador() {
    const [count, setContador] = useState(0);

    const handleIncrement = () => {
        setContador(prev => prev + 1);
    };

    const handleDecrement = () => {
        setContador(prev => prev - 1);
    };

    return (
    <>
        <h1>{CONTADOR_TEXT.COUNT}</h1>
        <p>{CONTADOR_TEXT.VALUE}: {count}</p>
        <button onClick={count < 5 && handleIncrement}>{CONTADOR_TEXT.INCREMENT}</button>
        <button onClick={count > 0 && handleDecrement}>{CONTADOR_TEXT.DECREMENT}</button>
    </>
    );
};

export default LayoutContador;