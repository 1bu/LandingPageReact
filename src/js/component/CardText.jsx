import React from "react";
import PropTypes from "prop-types"

export const CardText = (props) =>{
    return(
        <p className="card-text">{props.text}</p>
    )
}

CardText.propTypes = {
    text: PropTypes.string
}