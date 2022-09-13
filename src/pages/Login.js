import React, { useState } from "react";
import logo from "../assets/icons/dnd-5e-logo.svg"
import logo2 from "../assets/icons/5e D&D Logo 1(1).svg"


function Login() {

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setLoading] = useState(false)

    const executeLogin = event => {
        event.preventDefault()
        setLoading(true)
        console.log(login);
        console.log(password);

        setTimeout(() => {
            setLoading(false)
        }, 3000);
    }


    return (
        <div className="container-login">
            <div className="container-logo">
                <img className="logo" src={logo2} alt="Dungeons and Dragons fifith edition logo"></img>
                {/* <p className="logo-text">New character</p> */}
            </div>

            <form >
                <input className="username" type="text" name="login" placeholder="Username"
                    value={login} onChange={event => setLogin(event.target.value)}></input>
                <input className="password" type="password" name="password" placeholder="Password"
                    value={password} onChange={event => setPassword(event.target.value)}></input>
                <button className="login-button" onClick={executeLogin} disabled={isLoading} >{isLoading === true ? "...Loading" : "Login"}</button>
                <a>Register here</a>
            </form>

        </div>
    )
};

export { Login };