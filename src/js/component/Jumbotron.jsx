import React from "react"

export default function Jumbotron(props) {

    return (

        <div className="mb-4">
            <h1 className="d-flex justify-content-center" style={{ fontSize: "80px", fontWeight: "lighter" }}>Generative Art with TouchDesigner</h1>
            <p className="text-center mt-3">{props.text}</p>
            <div className="d-flex justify-content-center">
                <button type="button" className="btn btn-dark my-3"> <a className="text-white text-decoration-none" href="https://derivative.ca/" target="_blank">Visit Website</a></button>
            </div>
        </div>
    )


}