import React, { useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CardPlanet = ({img2, title2, link2, planetId}) => {
    const {store, actions} = useContext(Context)
    const handleAddFavorite = () => {
		const planet = store.planets.find(planet => planet.uid === planetId);
		if (planet) {
			actions.addFavorite(planet, 'planet');
		}
	};

    return (
        <React.Fragment>
            <div className="card bg-secondary text-light" style={{ minWidth: "200px" }}>
                <img src={img2} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{title2}</h5>
                    <div className="d-flex justify-content-between align-items-center">
                        <Link to={`/SPlanet/${planetId}`} href={link2} className="btn btn-primary"> Details </Link>
                        <button type="button" className="btn-outline-warning" onClick={handleAddFavorite}>
                            <i className="fas fa-heart  "></i>
                        </button>
                    </div>
                </div>
            </div>
    </React.Fragment>
    )
}