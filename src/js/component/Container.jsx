import React from "react";
import { Jumbotron } from "./Jumbotron";
import { Card } from "./Card";

export const Container = () =>{
    return(
        <div className="container border-bottom">
            <Jumbotron/>
            <Card/>
        </div>
    )
}
        