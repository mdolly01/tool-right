import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';
import { useToken } from './useToken1';
import { useQueryParams } from './useQueryParams';
import AccountPic from './account-page-picture.jpg';
// import { googleOauthUrl } from 'googleapis';
import './LogInPage.css';

export const LogInPage = () => {
    const [token, setToken] = useToken();
    const [errorMessage, setErrorMessage] = useState('');

    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    const [,setGoogleOauthUrl] = useState('');
    const { token: oauthToken } = useQueryParams();

    const history = useHistory();

    useEffect(() => {
        if (oauthToken) {
            setToken(oauthToken);
            history.push('/');
        }
    }, [oauthToken, setToken, history]);

    // useEffect(() =>{
    //     const loadOauthUrl = async () => {
    //         try{
    //             const response = await axios.get('/auth/google/url');
    //             const { url } = response.data;
    //             setGoogleOauthUrl(url);
    //         } catch (e) {
    //             console.log(e);
    //         }
    //     }

    //     loadOauthUrl();
    // },[])

const onLogInClicked = async () => {
        try {
            const response = await axios.post('/api/login', {
                email: emailValue,
                password: passwordValue,
            });
            const { token } = response.data;
            setToken(token);
            console.log(token);
            history.push('/');
        } catch (e) {
            console.log(e);
            setErrorMessage(e.message);
        }
    }

    return (
        <div className="content-container">
            <img src={AccountPic} style={{height: 350, width:600}} alt='Account'/>
            <h1>Log In</h1>
            {errorMessage && <div className='fail'>{setErrorMessage}</div>}
            <input style={{height: 30, width:300}}
                value={emailValue}
                onChange={event => setEmailValue(event.target.value)}
                placeholder="someone@gmail.com"
                ></input>

            <input style={{height: 30, width:300}}
                type="password"
                value={passwordValue} 
                onChange={event => setPasswordValue(event.target.value)}
                placeholder="password"></input><p><br></br></p>
                <hr></hr>
            <button 
                disabled={!emailValue || !passwordValue}
                onClick={onLogInClicked}>Log In</button>
            <button onClick={() => history.push('/forgotpassword')}>Forgot your password?</button>
            <button onClick={() => history.push('/signup')}>Sign Up!</button>
            <button
                // onClick={() => { window.location.href = googleOauthUrl}}
                // disabled={!googleOauthUrl}
            >Log in with Google</button><p><br></br><br></br><br></br><br></br></p>
        </div>
        

    );
}

