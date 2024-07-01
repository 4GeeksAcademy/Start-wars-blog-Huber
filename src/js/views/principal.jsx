import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/Card.jsx";
import { CardPlanet } from "../component/CardPlanet.jsx";


export const Characters = () => {
    const {store, actions} = useContext(Context)

    useEffect(() => {
        actions.getCharacters()
        actions.getPlanets()
    }, [])
    
    return (
        <React.Fragment>
            <div className="container">
            <div className="cards-container mt-3 g-2">
                <h1>Characters</h1>
                <div className="d-flex">
                    {store.characters && store.characters.length > 0 ? (
                        store.characters.map((character) => (
                            <div className="col-3 g-2" key={character.uid}>
                                <Card 
                                    img={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`}
                                    title={character.name}
                                    link={`/specificCharacter/${character.uid}`}
                                    characterId={character.uid}
                                />
                            </div>
                        ))
                    ) : (
                        <p>Loading characters...</p>
                    )}
                </div>
            </div>

                <div className="cards-planet-container mt-3">
                    <h1>Planets</h1>
                        <div className="d-flex">
                            {store.planets && store.planets.length > 0 ? (
                                store.planets.map((planet) => (
                                    <div className="col-3" key={planet.uid}>
                                        <CardPlanet 
                                            img2={
                                                planet.uid === "1"
                                                ? "https://starwars-visualguide.com/assets/img/big-placeholder.jpg"
                                                : `https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`
                                            }
                                            title2={planet.name}
                                            link2={`/specificPlanet/${planet.uid}`}
                                            planetId={planet.uid}
                                        />
                                    </div>
                                    ))
                                ) : (
                                    <p>Loading planets...</p>
                                )}
                        </div>
                </div>
            </div>
        </React.Fragment>
    );
};