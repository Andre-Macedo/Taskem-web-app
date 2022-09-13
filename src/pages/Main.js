import React from "react";
import logo from "../assets/icons/dnd-5e-logo.svg"
import "../styles/main.scss"



function Main() {
    return (
        <div className="container-main">
            <nav className="navBar">
                <img className="logo"
                    src={logo}
                    alt="Dungeons and Dragons logo"
                    href=""
                />

                <ul className="nav-links">
                    <input type="checkbox" id="checkbox_toggle" />
                    <label htmlFor="checkbox_toggle" class="hamburguer">&#9776;</label>
                    <div className="menu">
                        <li>Home</li>
                        <li>Logout</li>
                    </div>
                </ul>


            </nav>

        </div>
    )


}


export { Main };