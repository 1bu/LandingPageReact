import React from "react";
import { NavbarList } from "./NavbarList";
import { NavbarBrand } from "./NavbarBrand";

export const NavbarContent = () =>{
    return(
        <div className="container-fluid nav">
            <NavbarBrand/>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <NavbarList/>
            </div>
        </div>       
    )
}