import './App.css';
import { useState } from 'react';
import { LayoutContador } from './features/contador/LayoutContador';
import { LayoutRegistrar } from './features/registrar/LayoutRegistrar';

function App() {
    const [layout, setLayout] = useState(null);

    return (
        <>
            <h1>Abrir Feature</h1>

            <button onClick={() => setLayout('contador')}> CONTADOR </button>
            <button onClick={() => setLayout('registrar')}> REGISTRAR </button>

            {layout === 'contador' && <LayoutContador />}
            {layout === 'registrar' && <LayoutRegistrar />}
        </>
    );
}

export default App;