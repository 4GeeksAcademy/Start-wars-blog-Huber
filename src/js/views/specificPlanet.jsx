import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { CardSpecificPlanet } from "../component/CardSpecificPlanet.jsx";
import { useParams } from "react-router-dom";


export const SpecificPlanet = () => {
    const {store, actions} = useContext(Context)
    const { id } = useParams();
    
    useEffect(() =>{
            actions.getSpecificPlanet(id)
    }, [id])
    
    if (!store.specificPlanet) {
        return <p>Loading planet...</p>;
    }
    
    return (
        <React.Fragment>
            <div>
            {store.specificCharacter ? (
                <div className="container">
                    <div className="cardSpecificCharacter col-4">
                        <CardSpecificPlanet 
                       img={
                        store.specificPlanet.uid
                            ? `https://starwars-visualguide.com/assets/img/characters/${store.specificPlanet.uid}.jpg`
                            : "https://starwars-visualguide.com/assets/img/big-placeholder.jpg"
                    }
                        title={store.specificPlanet.name}
                        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Maecenas sit amet blandit urna. Praesent vel nunc a lacus vestibulum volutpat. Donec quis dolor nec ipsum tempor blandit vel a odio."}
                        name={store.specificPlanet.name}
                        climate={store.specificPlanet.climate}
                        population={store.specificPlanet.population}
                        orbitalPeriod={store.specificPlanet.orbital_period}
                        rotationPeriod={store.specificPlanet.rotation_period}
                        diameter={store.specificPlanet.diameter}
                        />
                    </div>
                </div>
            ) : (
                <p>Loading planet...</p>
            )}
            </div>
        </React.Fragment>
    )
}