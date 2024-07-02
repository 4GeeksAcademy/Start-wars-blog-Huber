import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/Card.jsx";
import { CardPlanet } from "../component/CardPlanet.jsx";
import { CardStarship } from "../component/CardStarShip.jsx";

export const Characters = () => {
    const {store, actions} = useContext(Context)

    useEffect(() => {
        actions.getCharacters()
        actions.getPlanets()
        actions.getstarship()

    }, [])
    
    return (
        <React.Fragment>
            <div className="overflow-auto mb-4">
            <div className="cards-container mt-3 g-2">
                <h1>Characters</h1>
                <div className="d-flex">
                    {store.characters && store.characters.length > 0 ? (
                        store.characters.map((character) => (
                            <div className="card bg-secondary text-light m-2" style={{ minWidth: "200px" }} key={character.uid}>
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

                <div className="cards-container mt-3 g-2">
                    <h1>Planets</h1>
                        <div className="d-flex">
                            {store.planets && store.planets.length > 0 ? (
                                store.planets.map((planet) => (
                                    <div className="card bg-secondary text-light m-2" style={{ minWidth: "200px" }} key={planet.uid}>
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

                <div className="cards-container mt-3 g-2">
                    <h1>StarShip</h1>
                        <div className="d-flex">
                            {store.starship && store.starship.length > 0 ? (
                                store.starship.map((starship) => (
                                    <div className="card bg-secondary text-light m-2" style={{ minWidth: "200px" }} key={starship.uid}>
                                        <CardStarship 
                                            img3={
                                                starship.uid === "2"
                                                ? "https://starwars-visualguide.com/assets/img/big-placeholder.jpg"
                                                : `https://starwars-visualguide.com/assets/img/starships/${starship.uid}.jpg`
                                            }
                                            title3={starship.name}
                                            link3={`/StarshipDetails/${starship.uid}`}
                                            starshiptId={starship.uid}
                                        />
                                    </div>
                                    ))
                                ) : (
                                    <p>Loading Starships...</p>
                                )}
                        </div>
                </div>

            </div>
        </React.Fragment>
    );
};