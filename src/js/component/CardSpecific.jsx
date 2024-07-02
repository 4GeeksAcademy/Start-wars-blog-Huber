import React from "react"

export const CardSpecificCharacter = ({ img, text, title, name, birthYear, gender, height, skinColor, EyeColor}) => {

    
    return(
        <React.Fragment>
                <div className="imgPlanet d-flex">
                        <img src={img} />       
                    <div className="titleTextPlanet ms-5">
                        <h5>{title}</h5>
                        <p>{text}</p>
                    </div>
                </div>
                <div className="stickPlanet">
                </div>
                <div className="infoPlanet d-flex">
                    <div>
                        <h6><strong>name</strong></h6>
                        <h6>{name}</h6>
                    </div>
                    <div>
                        <h6><strong>Birth Year</strong></h6>
                        <h6>{birthYear}</h6>
                    </div>
                    <div>
                        <h6><strong>Gender</strong></h6>
                        <h6>{gender}</h6>
                    </div>
                    <div>
                        <h6><strong>Height</strong></h6>
                        <h6>{height}</h6>
                    </div>
                    <div>
                        <h6><strong>Skin Color</strong></h6>
                        <h6>{skinColor}</h6>
                    </div>
                    <div>
                        <h6><strong>Eye Color</strong></h6>
                        <h6>{EyeColor}</h6>
                    </div> 
                </div>
        </React.Fragment>
    )
}