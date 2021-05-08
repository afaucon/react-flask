// J'ai suivi ce tutorial:
// https://www.digitalocean.com/community/tutorials/how-to-add-login-authentication-to-react-applications

import './TestLogin.css';
import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

function Dashboard() {
    return (
        <h2>Dashboard</h2>
    );
}

function Preferences() {
    return (
        <h2>Preferences</h2>
    );
}




function Login({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await postLoginToServer({
            username,
            password
        });
        setToken(token);
    }

    return (
        <div className="login-wrapper">
            <h1>Please Log In</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Username</p>
                    <input type="text" onChange={e => setUserName(e.target.value)} />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={e => setPassword(e.target.value)} />
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}
Login.propTypes = {
    setToken: PropTypes.func.isRequired
}

async function postLoginToServer(credentials) {
    console.log(credentials)
    return fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    }).then(data => data.json())
}







function useToken() {
    const getToken = () => {
        const tokenString = localStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken?.access_token
    };
    const [token, setToken] = useState(getToken());

    const saveToken = userToken => {
        localStorage.setItem('token', JSON.stringify(userToken));
        setToken(userToken.access_token);
    };

    return {
        token,
        setToken: saveToken
    }
}

export default function TestLogin() {
    const { token, setToken } = useToken();
    console.log("Retrieved token is: " + token)

    if (!token) {
        return <Login setToken={setToken} />
    }

    return (
        <div className="wrapper">
            <h1>TestLogin</h1>
            <p>You are logged in.</p>
            <BrowserRouter>
                <Switch>
                    <Route path="/dashboard">
                        <Dashboard />
                    </Route>
                    <Route path="/preferences">
                        <Preferences />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

