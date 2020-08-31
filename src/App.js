import React, {useState, useMemo, useEffect} from 'react';

function complexCompute(num) {
    console.log('compute');
    let i = 0;
    while (i < 1000000000) i++;
    return num * 2
}

function App() {
    const [number, setNumber] = useState(42);

    const [colored, setColored] = useState(false);

    // const styles = {
    //     color: colored ? 'darkred': 'black'
    // };

    const styles = useMemo(() => ({
        color: colored ? 'darkred': 'black'
    }), [colored]);

    // Чтобы тяжелая функция вызывалась только при изменении number оборачиваем в useMemo
    const computed = useMemo(() => {
        return complexCompute(number);
    }, [number]);

    // т.к в JS обьекты сравниваются по ссылкам, а после рендера создается новый styles
    // useEffect следит за старым styles и выполняется так как он изменился
    useEffect(() => {
        console.log('styles changed');
    }, [styles]);

    return (
        <>
            <h1 style={styles}>Вычисляемое свойство: {computed}</h1>
            <button onClick={() => setNumber(prev => prev + 1)}>Добавить</button>
            <button onClick={() => setNumber(prev => prev - 1)}>Убрать</button>
            <button onClick={() => setColored(prev => !prev)}>Изменить</button>
        </>
    );
}

export default App;
