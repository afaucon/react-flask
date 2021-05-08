import React, { useState, useEffect, useRef } from 'react';

function TestApiCall() {
    const [shoppingList, setShoppingList] = useState([]);
    const [itemInputByUser, setItemInputByUser] = useState('');
    const [displayPostResult, setDisplayPostResult] = useState(false);
    const componentIsMounted = useRef(true);

    useEffect(() => {
        componentIsMounted.current = true;
        if (shoppingList.length === 0 || displayPostResult) {
            getShoppingListFromServer()
                .then(items => {
                    if (componentIsMounted.current) {
                        setShoppingList(items)
                    }
                })
        }
        return () => componentIsMounted.current = false;
    }, [shoppingList, displayPostResult])

    useEffect(() => {
        if (displayPostResult) {
            setTimeout(() => {
                if (componentIsMounted.current) {
                    setDisplayPostResult(false);
                }
            }, 2500)
        }
    }, [displayPostResult])

    const handleSubmit = (e) => {
        e.preventDefault();
        postItemToServer(itemInputByUser)
            .then(() => {
                if (componentIsMounted.current) {
                    setItemInputByUser('');
                    setDisplayPostResult(true);
                    // setTimeout(() => {
                    //     setDisplayPostResult(false);
                    // }, 2500)
                }
            })
    };

    return (
        <div>
            <h1>TestApiCall</h1>
            <h2>My Shopping List</h2>
            <ul>
                {shoppingList.map(item => <li key={item.item}>{item.item}</li>)}
            </ul>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>New Item</p>
                    <input type="text"
                        onChange={event => setItemInputByUser(event.target.value)}
                        value={itemInputByUser} />
                </label>
                <button type="submit">Submit</button>
                {displayPostResult && <p>Submit Successful</p>}
            </form>
        </div>
    )
}

export default TestApiCall;



// Service calls

function getShoppingListFromServer() {
    return fetch('http://localhost:5000/list').then(data => data.json())
}

function postItemToServer(item) {
    return fetch('http://localhost:5000/list', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ item })
    }).then(data => data.json())
}