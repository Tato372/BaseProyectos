import { CONTADOR_TEXT } from "../constants/contador.constants";
import useContador from "../hooks/useContador";

export function Contador1({setCount, count}) {
    const { handleDecrement } = useContador(setCount);

    return (
    <>
        <h1>{CONTADOR_TEXT.COUNT} 2</h1>
        <p>{CONTADOR_TEXT.VALUE}: {count}</p>
        <button onClick={handleDecrement} disabled={count <= 0}>
            {CONTADOR_TEXT.DECREMENT}
        </button>
    </>
    )
};

export default Contador1;