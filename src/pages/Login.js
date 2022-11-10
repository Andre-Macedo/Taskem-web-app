import React, { useState } from 'react';
import { Input } from '../components/Input'
import logo from '../assets/icons/Taskem-Logo.svg'
import email from '../assets/icons/mail.svg'
import lock from '../assets/icons/lock.svg'
import { executeRequest } from '../services/api';


export const Login = props => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('')
    const [isLoading, setLoading] = useState(false);

    const executeLogin = async event => {
        try {
            event.preventDefault();
            setLoading(true);
            setErrorMsg('');

            const body = {
                login,
                password
            };

            const result = await executeRequest('login', 'POST', body);
            if (result?.data?.token) {
                localStorage.setItem('accessToken', result.data.token);
                localStorage.setItem('userEmail', result.data.email);
                localStorage.setItem('userName', result.data.name);
                props.setAccessToken(result.data.token);
            }
            console.log(result);
        } catch (e) {
            console.log(e);
            if (e?.response?.data?.error) {
                setErrorMsg(e.response.data.error)
            } else {
                setErrorMsg('Not possible to access database.')
            }
        };
        setLoading(false)
    };


    return (
        <div className='container-login'>
            <img className='logo' src={logo} alt='Taskm Logo'></img>

            <form >
                {errorMsg && <p>{errorMsg}</p>}
                <Input imgSrc={email} inputType='text' inputName='login' inputPlaceholder='Username'
                    value={login} setValue={setLogin}></Input>
                <Input imgSrc={lock} inputType='password' inputName='password' inputPlaceholder='Password'
                    value={password} setValue={setPassword}></Input>
                <button className='login-button' onClick={executeLogin} disabled={isLoading} >{isLoading === true ? '...Loading' : 'Login'}</button>
                <a>Register here</a>
            </form>

        </div>
    )
};
