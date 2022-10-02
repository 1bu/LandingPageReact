import React from "react";
import PropTypes from "prop-types"
import image from "../../img/img.png"
import { CardContainer } from "./CardContainer";

export const Card = (props) =>{
    return (
        <div className="row mb-5" >
        <CardContainer
        image={image}
        title="Card Title" 
        text="Some quick example text to build on the card title and make up the bulk of the card's content."
        />

    <CardContainer
        image={image}
        title="Card Title" 
        text="Some quick example text to build on the card title and make up the bulk of the card's content."
        />

    <CardContainer
        image={image}
        title="Card Title" 
        text="Some quick example text to build on the card title and make up the bulk of the card's content."
        />

    <CardContainer
        image={image}
        title="Card Title" 
        text="Some quick example text to build on the card title and make up the bulk of the card's content."
        />
        </div>
    )
}

CardContainer.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string
}

