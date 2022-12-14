import React from "react";
import PropTypes from "prop-types"

export const CardTitle = (props) =>{
    return(
        <h5 className="card-title">{props.title}</h5>
    )
}

CardTitle.propTypes = {
    title: PropTypes.string
}