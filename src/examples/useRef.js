import React, {useState, useEffect, useRef} from 'react';

function App() {

    // const [renderCount, setRenderCount] = useState(1);
    const [value, setValue] = useState('initial');

    // состояние определенное через useRef сохраняется между рендерами компонентов (компонент не перерндеривается)
    const renderCount = useRef(1); // renderCount - object. renderCount.current - get value

    const inputRef = useRef(null);

    // Можно сохранять предидущее состояние
    const prevValue = useRef('');

    useEffect(() => {
        // setRenderCount(prevState => prevState + 1)
        renderCount.current++;
        console.log(inputRef.current.value);
    });

    useEffect(() => {
        prevValue.current = value;
    }, [value]);

    // Сделать фокус на элементе с помощью useRef
    const focus = () => inputRef.current.focus();



    return (
        <div>
            <h1>Количество рендеров {renderCount.current}</h1>
            <h1>Прошлое состояние {prevValue.current}</h1>
            <input ref={inputRef} type="text" onChange={e => setValue(e.target.value)} value={value}/>
            <button onClick={focus}>Focus</button>
        </div>
    );
}

export default App;
