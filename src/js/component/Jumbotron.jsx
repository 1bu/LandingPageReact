import React from "react";
import { JumbotronTitle } from "./JumbotronTitle";
import { JumbotronText } from "./JumbotronText";
import { JumbotronBtn } from "./JumbotronBtn";

export const Jumbotron = () =>{
    return (
        <div className="jumbotron container">
            <JumbotronTitle/>
            <JumbotronText/>
            <JumbotronBtn/>
        </div>
    )
}