import {useState} from 'react';
import Contador1 from './contador1/contador1';
import Contador2 from './contador2/contador2';
import Contador3 from './contador3/contador3';

export function LayoutContador() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Contador1 count={count} setCount={setCount} />
            <Contador2 count={count} setCount={setCount} />
            <Contador3 count={count} setCount={setCount} />
        </>
    )
};

export default LayoutContador;