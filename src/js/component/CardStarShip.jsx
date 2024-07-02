import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CardStarship = ({img3, title3, link3, starshipId}) => {
    const {store, actions} = useContext(Context)
   
    const handleAddFavorite = () => {
		const starship = store.starship.find(starship => starship.uid === starshipId);
		if (starship) {
			actions.addFavorite(starship, 'starship');
		}
	};

    return (
        <React.Fragment>
            <div className="card bg-secondary text-light" style={{ minWidth: "200px" }}>
                <img src={img3} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{title3}</h5>
                    <div className="d-flex justify-content-between align-items-center">
                        <Link 
                            to={`/demo3/${starshipId}`}
                            href={link3} 
                            className="btn btn-primary"
                        >
                                Details 
                        </Link>
                        <button 
                        type="button" 
                        className=  "btn-outline-warning"
                        onClick={handleAddFavorite}
                        >
                            <i className="fas fa-heart  "></i>
                        </button>
                    </div>
                </div>
            </div>
    </React.Fragment>
    )
}