import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { CardCharacter } from "../component/CardCharacter.jsx";
import { CardPlanet } from "../component/CardPlanet.jsx";


export const Blog = () => {
    const {store, actions} = useContext(Context)

    useEffect(() => {
        actions.getCharacters()
        actions.getPlanets()

    }, [])
    
    return (
        <React.Fragment>
            <div className="container-fluid  py-5">
            <h1 className="text-center mb-5"><strong>Star Wars Universe</strong></h1>
            <div className="cards-container mt-3 g-2">
                <h1>Characters</h1>
                <div className="overflow-auto mb-4">
                <div className="d-flex flex-row flex-nowrap">
                    {store.characters && store.characters.length > 0 ? (
                        store.characters.map((character) => (
                            <div className="card bg-secondary text-light m-2" style={{ minWidth: "200px" }} key={character.uid}>
                                <CardCharacter 
                                    img={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`}
                                    title={character.name}
                                    link={`/SCharacter/${character.uid}`}
                                    characterId={character.uid}
                                />
                            </div>
                        ))
                    ) : (
                        <p>Loading characters...</p>
                    )}
                </div>
                </div>
            </div>

                <div className="cards-container mt-3 g-2">
                    <h1>Planets</h1>
                    <div className="overflow-auto mb-4">
                        <div className="d-flex flex-row flex-nowrap">
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
                                            link2={`/SPlanet/${planet.uid}`}
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

                

            </div>
        </React.Fragment>
    );
};