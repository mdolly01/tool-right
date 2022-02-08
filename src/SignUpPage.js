import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';
import { useToken } from './useToken1';

export const SignUpPage = () => {
    const [token, setToken] = useToken();

    const [errorMessage, setErrorMessage] = useState('');

    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [confirmPasswordValue, setConfirmPasswordValue] = useState('');

    const history = useHistory();

    const onSignUpClicked = async () => {
        const response = await axios.post('/api/signup', {
            email: emailValue,
            password: passwordValue,
        });
        const { token } = response.data;
        setToken(token);
        history.push('/');
    }

    return (
        <div classNAme="content-container">
            <h1>Sign Up</h1>
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
                <input 
                type="password"
                value={confirmPasswordValue} 
                onChange={event => setConfirmPasswordValue(event.target.value)}
                placeholder="password"></input>
            <hr></hr>
            <button 
                disabled={!emailValue || !passwordValue || passwordValue !== confirmPasswordValue }
                onClick={onSignUpClicked}>Sign Up!</button>
                <button onClick={() => history.push('/login')}>Already have an account? Log In</button>
        </div>

    );
}

