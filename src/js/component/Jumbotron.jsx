import React from "react"

export default function Jumbotron(props) {

    return (

        <div>
            <h1 className="d-flex justify-content-center mt-2" style={{ fontSize: "80px", fontWeight: "lighter" }}>Generative Art with TouchDesigner</h1>
            <p className="col-11 text-center m-auto my-3">{props.text}</p>
            <div className="d-flex justify-content-center">
                <a className="text-decoration-none my-4" href="https://derivative.ca/" target="_blank">Visit Website</a>
                
            </div>
        </div>
    )


}