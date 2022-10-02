import React from "react";
import PropTypes from "prop-types"
import { CardBody } from "./CardBody";
import { CardImg } from "./CardImg";
import { CardBtn } from "./CardBtn";

export const CardContainer = (props)=>{
    return(
        <div className="card">
            <CardImg image={props.image}/>
            <CardBody title={props.title} text={props.text} />
            <CardBtn/>
        </div>
    )
}

CardImg.propTypes={
    image:PropTypes.string
}

CardBody.propTypes = {
    title:PropTypes.string,
    Text:PropTypes.string
}