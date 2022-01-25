import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export const LogInPage = () => {
    const [errorMessage, setErrorMessage] = useState('');

    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    const history = useHistory();

    const onLogInClicked = async () => {
        alert('Log in not created yet')
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
        </div>

    );
}

