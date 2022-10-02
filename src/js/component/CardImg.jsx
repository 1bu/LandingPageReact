import React from "react";
import PropTypes from "prop-types";

export const CardImg = (props) =>{
    return(
        <img className="card-img-top img" src={props.image} alt=""/>
    )
}

CardImg.propTypes = {
    image: PropTypes.string
}