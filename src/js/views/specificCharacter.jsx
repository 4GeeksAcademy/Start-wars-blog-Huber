import React, { useContext, useEffect } from "react";
import { CardSpecificCharacter } from "../component/CardSpecific.jsx";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";



export const SpecificCharacter = () => {
    const { store, actions } = useContext(Context);
    const { id } = useParams();

    useEffect(() => {
            actions.getSpecificCharacter(id);
    }, []);

    return (
        <React.Fragment>
            {store.specificCharacter ? (
                <div className="container">
                    <div className="row">
                        <div className="cardSpecificCharacter col-4">
                            <CardSpecificCharacter
                               img={
                                store.specificCharacter.uid
                                ? `https://starwars-visualguide.com/assets/img/planets/${store.specificCharacter.uid}.jpg`
                                : "https://starwars-visualguide.com/assets/img/big-placeholder.jpg" 
                            }
                               title={store.specificCharacter.name}
                               text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Maecenas sit amet blandit urna. Praesent vel nunc a lacus vestibulum volutpat. Donec quis dolor nec ipsum tempor blandit vel a odio."}
                               name={store.specificCharacter.name}
                               birthYear={store.specificCharacter.birth_year}
                               gender={store.specificCharacter.gender}
                               height={store.specificCharacter.height}
                               skinColor={store.specificCharacter.skin_color}
                               EyeColor={store.specificCharacter.eye_color}
                            />
                        </div>
                    </div>
                </div>
            ) : (
                <p>Loading character...</p>
            )}
        </React.Fragment>
    );
};