import React from "react";

export const NavbarList = () =>{
    return(
        <ul className="navbar-nav">
        <li className="nav-item active">
            <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">Features</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">Pricing</a>
        </li>
        <li className="nav-item">
            <a className="nav-link disabled" href="#">Disabled</a>
        </li>
        </ul>
    )
}