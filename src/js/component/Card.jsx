import React from "react"
import PropTypes from "prop-types"


export default function Card({ImgSrc, Titulo, description}) {



    return (

        <div className="card" style={{ width: "18rem" }}>
            <img src={ImgSrc} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{Titulo}</h5>
                <p className="card-text">{description}</p>
                <a href="#" className="btn btn-dark">Find out more</a>
            </div>
        </div>
    )

}

Card.PropTypes = {

ImgSrc: PropTypes.string.isRequired,
Titulo: PropTypes.string.isRequired,
description: PropTypes.string.isRequired
}


