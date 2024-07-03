import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";



export const SpecificPlanet = () => {
    const { store, actions } = useContext(Context);
    const params = useParams()

    useEffect(() => {
            actions.getSpecificPlanet(params.id)
    }, []);

    return (
        <React.Fragment>
            <div>
            {store.specificPlanet ? (
                <div className="container-fluid   d-flex flex-column justify-content-center" style={{ minHeight: "100vh" }}>
                    <div className="row border-bottom border-2 pb-4 border-danger py-5">
                    <div className="col-md-6">
                        < img className="img-fluid rounded"
                        src={"https://starwars-visualguide.com/assets/img/planets/" + (params.id) + ".jpg"}
                        alt={store.specificPlanet.uid} />
                    </div>
                    <div className="col-md-6 text-center d-flex flex-column justify-content-center">
                    <h1>{store.specificPlanet.name}</h1>
                    <p>{store.specificPlanet.name}</p>
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
                    <p>{store.specificPlanet.name}</p>
                </div>
                <div className="col">
                    <p><strong>Diameter</strong></p>
                    <p>{store.specificPlanet.diameter}</p>
                </div>
                <div className="col">
                    <p><strong>Climate</strong></p>
                    <p>{store.specificPlanet.climate}</p>
                </div>
                <div className="col">
                    <p><strong>Population</strong></p>
                    <p>{store.specificPlanet.population}</p>
                </div>
                <div className="col">
                    <p><strong>Orbital Period</strong></p>
                    <p>{store.specificPlanet.orbital_period}</p>
                </div>
                <div className="col">
                    <p><strong>Rotation period</strong></p>
                    <p>{store.specificPlanet.rotation_period}</p>
                </div>
            </div>
                    </div>
                </div>
            ) : (
                <p>Loading planet...</p>
            )}
            </div>
        </React.Fragment>

    );
};