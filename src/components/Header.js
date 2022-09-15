import React from "react";
import logo from "../assets/icons/Taskem-Logo.svg";
import exit from "../assets/icons/exit.svg";
import exitDesktop from "../assets/icons/exitDesktop.svg";

export const Header = props => {

    const fullName = localStorage.getItem("userName");
    const firstName = fullName?.split(" ")[0] || "";

    return (
        <div className="container-header">
            <img className="logo" src={logo} alt="Taskem Logo"></img>
            <button><span>+</span>Add Task</button>
            <div className="mobile">
                <span>Hello, {firstName}</span>
                <img className="logOut" src={exit} alt="Log out icon" onClick={props.logOut}></img>
            </div>
            <div className="desktop">
                <span>Hello, {firstName}</span>
                <img className="logOut" src={exitDesktop} alt="Log out icon" onClick={props.logOut}></img>
            </div>
        </div>
    )
}