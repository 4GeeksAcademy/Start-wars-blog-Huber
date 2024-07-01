import React from "react";

export const CardSpecificPlanet = ({img, title, text, name, climate, population, orbitalPeriod, rotationPeriod, diameter}) => {
    return (
        <React.Fragment>
            <div className="imgPlanet d-flex">
                    <img src={img} />       
                <div className="titleText ms-5">
                    <h5>{title}</h5>
                    <p>{text}</p>
                </div>
            </div>

            <div className="stickPlanet"></div>

            <div className="infoPlanet d-flex">
                    <div>
                        <h6><strong>Name</strong></h6>
                        <h6>{name}</h6>
                    </div>
                    <div>
                        <h6><strong>Climate</strong></h6>
                        <h6>{climate}</h6>
                    </div>
                    <div>
                        <h6><strong>Population</strong></h6>
                        <h6>{population}</h6>
                    </div>
                    <div>
                        <h6><strong>Orbital Period</strong></h6>
                        <h6>{orbitalPeriod}</h6>
                    </div>
                    <div>
                        <h6><strong>Rotation Period</strong></h6>
                        <h6>{rotationPeriod}</h6>
                    </div>
                    <div>
                        <h6><strong>Diameter</strong></h6>
                        <h6>{diameter}</h6>
                    </div> 
                </div>
        </React.Fragment>
    )
}