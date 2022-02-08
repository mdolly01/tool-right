import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';
import { useToken } from './useToken1';

export const LogInPage = () => {
    const [token, setToken] = useToken();
    const [errorMessage, setErrorMessage] = useState('');

    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    const [getGoogleOauthUrl, setGoogleOauthUrl] = useState('');

    const history = useHistory();

    useEffect(() =>{
        const loadOauthUrl = async () => {
            try{
                const response = await axios.get('/auth/google/url');
                const { url } = response.data;
                setGoogleOauthUrl(url);
            } catch (e) {
                console.log(e);
            }
        }

        loadOauthUrl();
    },[])

    const onLogInClicked = async () => {
        const response = await axios.post('/api/login', {
            email: emailValue,
            password: passwordValue,
        });
        const { token } = response.data;
        setToken(token);
        history.push('/userInfoPage');
    }

    return (
        <div classNAme="content-container">
            <h1>Log In</h1>
            {errorMessage && <div className='fail'>{setErrorMessage}</div>}
            <input 
                value={emailValue}
                onChange={event => setEmailValue(event.target.value)}
                placeholder="someone@gmail.com"
                ></input>
            <input 
                type="password"
                value={passwordValue} 
                onChange={event => setPasswordValue(event.target.value)}
                placeholder="password"></input>
                <hr></hr>
            <button 
                disabled={!emailValue || !passwordValue}
                onClick={onLogInClicked}>Log In</button>
            <button onClick={() => history.push('/forgotpassword')}>Forgot your password?</button>
            <button onClick={() => history.push('/account')}>Sign Up!</button>
            <button>Log in with Google</button>
        </div>

    );
}

