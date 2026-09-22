import { CONTADOR_TEXT } from "../constants/contador.constants";
import useContador from "../hooks/useContador";

export function Contador1({setCount, count}) {
    const { handleIncrement, handleDecrement } = useContador(setCount);

    return (
    <>
        <h1>{CONTADOR_TEXT.COUNT} 1</h1>
        <p>{CONTADOR_TEXT.VALUE}: {count}</p>
        <button onClick={count < 5 && handleIncrement}>{CONTADOR_TEXT.INCREMENT}</button>
        <button onClick={count > 0 && handleDecrement}>{CONTADOR_TEXT.DECREMENT}</button>
    </>
    )
};

export default Contador1;