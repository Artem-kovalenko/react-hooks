import React, {useState, useEffect} from 'react';

function App() {

    const [type, setType] = useState('users');
    const [data, setData] = useState([]);
    const [pos, setPos] = useState({
        x: 0, y: 0
    });


    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(response => response.json())
            .then(json => setData(json))

        return () => {
            console.log('clean type');
        }
    }, [type]);

    const mouseMoveHandler = event => {
        setPos({
            x: event.clientX,
            y: event.clientY
        })
    };

    useEffect(() => {
        console.log('ComponentDidMount');

        window.addEventListener('mousemove', event => mouseMoveHandler(event));

        return () => {
            window.removeEventListener('mousemove', event => mouseMoveHandler);
        }
    }, []);

    return (
        <div>
            <h1>Ресурс: {type}</h1>

            <button onClick={() => setType('Users')}>Пользователи</button>
            <button onClick={() => setType('Todos')}>Todos</button>
            <button onClick={() => setType('Posts')}>Посты</button>

            {/*<pre>{JSON.stringify(data, null, 2)}</pre>*/}
            <pre>{JSON.stringify(pos, null, 2)}</pre>
        </div>
    );
}

export default App;
