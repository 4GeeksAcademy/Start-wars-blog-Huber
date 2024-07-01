import React, { useContext, useEffect } from "react";
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
            <div className="card" style={{width: "18rem"}}>
                <img src={img2} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{title2}</h5>
                    <div className="d-flex mt-3">
                        <Link 
                            to={`/demo2/${planetId}`}
                            href={link2} 
                            className="btn btn-primary"
                        >
                                Learn more!
                        </Link>
                        <button 
                            type="button" 
                            className="btn"
                            onClick={handleAddFavorite}
                        >
                                🖤
                        </button>
                    </div>
                </div>
            </div>
    </React.Fragment>
    )
}