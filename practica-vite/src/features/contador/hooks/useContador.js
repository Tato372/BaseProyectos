function useContador(setCount) {
    function handleIncrement() {
        setCount((previousCount) => previousCount + 1);
    }

    function handleDecrement() {
        setCount((previousCount) => previousCount - 1);
    }

    return {
        handleIncrement,
        handleDecrement,
    };
};

export default useContador;
