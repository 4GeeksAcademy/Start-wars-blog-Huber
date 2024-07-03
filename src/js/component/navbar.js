import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const {store, actions} = useContext(Context)

    useEffect(() => {
            actions.getCharacters();
			console.log(store.characters)
		

    }, []);

	const handleDeleteFavorite = (uid, type) => {
		actions.deleteFavorite(uid, type);
	};
	
	return (
		<nav className="navbar navbar-expand-lg">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 ms-5">
					<img 
						src="https://cdn.worldvectorlogo.com/logos/star-wars.svg" 
						className="card-img-top" 
						style={{maxWidth: "7rem", maxHeight: "7rem"}}
					/>
				</span>
			</Link>
			<div className="navbar-nav ms-auto">
				<div className="dropdown">
  					<button 
					className="btn btn-secondary dropdown-toggle" 
					type="button" 
					data-bs-toggle="dropdown" 
					aria-expanded="false">
   	 					Favorite <span className="badge bg-secondary">{store.favorites.length}</span>
  					</button>
					  <ul className="dropdown-menu dropdown-menu-end">
                        {store.favorites.length > 0 ? (
                            store.favorites.map((favorite, index) => (
                                <li key={index}>
                                    
                                    <a className="dropdown-item" href="#">
                                        {favorite.name}
										<button 
										type="button" 
										className="btn btn-outline-danger btn-sm"
										onClick={() => handleDeleteFavorite(favorite.uid, favorite.type)}
										>
                            				<i className="fas fa-trash-alt"></i>
                        				</button>
                                    </a>
                                </li>
                            ))
                        ) : (
                            <li>
                                <a className="dropdown-item" href="#">
                                    No favorites yet
                                </a>
                            </li>
                        )}
                    </ul>
				</div>
			</div>
		</nav>
	);
};