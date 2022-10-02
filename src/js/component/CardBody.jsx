import React from "react";
import PropTypes from "prop-types"
import { CardTitle } from "./CardTitle";
import { CardText } from "./CardText";

export const CardBody = (props) =>{
    return(
        <div className="card-body">
            <CardTitle title={props.title}/>
            <CardText text={props.text}/>
        </div>
    )
}

CardBody.propTypes = {
    title:PropTypes.string,
    text:PropTypes.string
}