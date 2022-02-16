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
        // const response = await axios.post({
        //     method: 'post',
        //     url: 'http://localhost:8080/api/signup',
        //     data: {
        //         email: emailValue,
        //         password: passwordValue
        //     }
        // });

        const response = await fetch('http://localhost:8080/api/signup', {
            method: "POST",
            headers: {
                Accept: "application/json", 
                "Content-Type": "application/json"},
            body: JSON.stringify({
                email: emailValue,
                password: passwordValue
            })
        })

        const {token}  = await response.json();
        console.log(token);
        setToken(token);
        history.push('/UserInfoPage');
    }

    // axios({
    //     method: ‘post’,
    //     url: ‘/user/12345’,
    //     data: {
    //       firstName: ‘Fred’,
    //       lastName: ‘Flintstone’
    //     }
    //   });

    return (
        <div classNAme="content-container">
            <h1>Sign Up</h1>
            <p><br></br></p>
            {errorMessage && <div className='fail'>{setErrorMessage}</div>}
            <input 
                value={emailValue}
                onChange={event => setEmailValue(event.target.value)}
                placeholder="someone@gmail.com"
                />
            <input 
                type="password"
                value={passwordValue} 
                onChange={event => setPasswordValue(event.target.value)}
                placeholder="password" />
                <input 
                type="password"
                value={confirmPasswordValue} 
                onChange={event => setConfirmPasswordValue(event.target.value)}
                placeholder="password" />
            <hr></hr>
            <button 
                disabled={!emailValue || !passwordValue || passwordValue !== confirmPasswordValue }
                onClick={onSignUpClicked}>Sign Up!</button>
                <button onClick={() => history.push('/login')}>Already have an account? Log In</button>
                <p><br></br></p>
                {/* <h3>{token}</h3> */}
        </div>

    );
}

