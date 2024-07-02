import React, { useContext, useEffect } from "react";
import { CardSpecificCharacter } from "../component/CardSpecific.jsx";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";



export const StarshipDetails = () => {
    const { store, actions } = useContext(Context);
    const params = useParams()

    useEffect(() => {
            actions.getstarshipDetails(params.id)
    }, []);

    return (
        <React.Fragment>
            {store.starshipDetails ? (
                 <div className="container-fluid   d-flex flex-column justify-content-center" style={{ minHeight: "100vh" }}>
                    <div className="row border-bottom border-2 pb-4 border-danger py-5">
                        <div className="col-md-6">
                        < img className="img-fluid rounded"
						src={"https://starwars-visualguide.com/assets/img/starships/" + (params.id) + ".jpg"}
						alt={store.starshipDetails.uid} />
                        </div>
                        <div className="col-md-6 text-center d-flex flex-column justify-content-center">
                    <h1>{store.starshipDetails.name}</h1>
                    <p>{store.starshipDetails.name}</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Asperiores eaque exercitationem numquam architecto tenetur fugit praesentium sunt iste eos,
                        delectus minima saepe quam impedit obcaecati maiores,
                        voluptatum cupiditate quibusdam.
                        Tenetur.
                    </p>
                </div>
                <div className="row py-5">
                <div className="col">
                    <p><strong>Name</strong></p>
                    <p>{store.starshipDetails.name}</p>
                </div>
                <div className="col">
                    <p><strong>Birth Year</strong></p>
                    <p>{store.specificCharacter.birth_year}</p>
                </div>
                <div className="col">
                    <p><strong>Gender</strong></p>
                    <p>{store.specificCharacter.gender}</p>
                </div>
                <div className="col">
                    <p><strong>Height</strong></p>
                    <p>{store.specificCharacter.height}</p>
                </div>
                <div className="col">
                    <p><strong>Skin Color</strong></p>
                    <p>{store.specificCharacter.skin_color}</p>
                </div>
                <div className="col">
                    <p><strong>Eye Color</strong></p>
                    <p>{store.specificCharacter.eye_color}</p>
                </div>
            </div>
                    </div>
                </div>
            ) : (
                <p>Loading character...</p>
            )}
        </React.Fragment>
    );
};