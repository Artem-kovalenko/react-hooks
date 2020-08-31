import React, {useState} from 'react';

function computeInitialCounter() {
    console.log('Some calculations');
    return Math.trunc(Math.random() * 20);
}

function App() {

    // const [counter, setCounter] = useState(computeInitialCounter());
    const [counter, setCounter] = useState(() => {
        return computeInitialCounter()
    });

    const [state, setState] = useState({
        title: 'Счетчик',
        date: Date.now()
    });

    function increment() {
        // setCounter(counter + 1);
        // setCounter(counter + 1);
        setCounter(prevState => {
            return prevState + 1
        });
        // setCounter(prev => prev + 1);
    }

    function decrement() {
        setCounter(counter - 1)
    }

    function updateTitle() {
        setState(prevState => {
            return {
                ...prevState,
                title: 'New name'
            }
        })
    }

    return (
        <div>
            <h1>Счетчик {counter}</h1>
            <button onClick={increment}>Добавить</button>
            <button onClick={decrement}>Убрать</button>
            <button onClick={updateTitle}>Изменить название</button>

            <pre>{JSON.stringify(state, null, 2)}</pre>
        </div>
    );
}

export default App;
