import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";



export const Starship = () => {
    const { store, actions } = useContext(Context);
    const params = useParams()

    useEffect(() => {
            actions.getSpicificStarship(params.id)
    }, []);

    return (
        <React.Fragment>
            <div>
            {store.specificStarship ? (
                <div className="container-fluid   d-flex flex-column justify-content-center" style={{ minHeight: "100vh" }}>
                    <div className="row border-bottom border-2 pb-4 border-danger py-5">
                    <div className="col-md-6">
                        < img className="img-fluid rounded"
                        src={"https://starwars-visualguide.com/assets/img/planets/" + (params.id) + ".jpg"}
                        alt={store.specificStarship.uid} />
                    </div>
                    <div className="col-md-6 text-center d-flex flex-column justify-content-center">
                    <h1>{store.specificStarship.name}</h1>
                    <p>{store.specificStarship.name}</p>
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
                    <p>{store.specificStarship.name}</p>
                </div>
                <div className="col">
                    <p><strong>Model</strong></p>
                    <p>{store.specificStarship.model}</p>
                </div>
                <div className="col">
                    <p><strong>Starship Class</strong></p>
                    <p>{store.specificStarship.starship_class}</p>
                </div>
                <div className="col">
                    <p><strong>Manufacturer</strong></p>
                    <p>{store.specificStarship.manufacturer}</p>
                </div>
                <div className="col">
                    <p><strong>Cost in Credits</strong></p>
                    <p>{store.specificStarship.cost_in_credits}</p>
                </div>
                <div className="col">
                    <p><strong>Length</strong></p>
                    <p>{store.specificStarship.length}</p>
                </div>

            </div>
                    </div>
                </div>
            ) : (
                <p>Loading Starships...</p>
            )}
            </div>
        </React.Fragment>

    );
};