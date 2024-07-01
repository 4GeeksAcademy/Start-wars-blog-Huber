const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			specificCharacter: null,
			planets: [],
			specificPlanet: null,
			favorites: []
		},
		actions: {
			getCharacters: async () => {
				try {
					const response = await fetch("https://www.swapi.tech/api/people")
					if (!response.ok) {
						throw new Error("Levante un error")
					}
					const data = await response.json()
					setStore({ characters: data.results})
					console.log(data.results)
				} catch(error) {
					console.log(error)
				}
			},
			getSpecificCharacter: async (id) => {
				setStore({ specificCharacter: null }) // Restablecezco el estado antes de la nueva solicitud
				try {
					const response = await fetch(`https://www.swapi.tech/api/people/${id}`)
					if (!response.ok) {
						throw new Error("Levante un error")
					}
					const data = await response.json()
					setStore({ specificCharacter: data.result.properties})
					console.log(data.result)
				} catch(error) {
					console.log(error)
				}
			},
			getPlanets: async () => {
				try{
					const response = await fetch("https://www.swapi.tech/api/planets")
					if (!response.ok) {
							throw new Error("Levante un error");
						}
					const data = await response.json()
					setStore({ planets: data.results })
					console.log(data.results)
				} catch(error) {
					console.log(error)
				}
			},
			getSpecificPlanet: async (id) => {
				setStore({ specificPlanet: null }) // Restablecezco el estado antes de la nueva solicitud
				try {
					const response = await fetch(`https://www.swapi.tech/api/planets/${id}`)
					if (!response.ok) {
						throw new Error("Levante un error");
					}
					const data = await response.json()
					setStore({ specificPlanet: data.result.properties})
					console.log(data.result)
				} catch(error) {
					console.log(error)
				}
			},
			addFavorite: (item, type) => {
                const newFavorites = [...getStore().favorites, { ...item, type }];
                setStore({ favorites: newFavorites });
			},
			deleteFavorite: async (uid, type) => {
				const newDelete = getStore().favorites.filter(favorite => favorite.uid !== uid || favorite.type !== type);
				setStore({ favorites: newDelete });
			},
			// NO FUNCIONA
			deleteFavoriteCharacter: async (id) => {
				try {
					const response = await fetch(`https://www.swapi.tech/api/people/${id}`, {
						method: "DELETE",
						headers: {
							"Content-Type": "application/json"
						}
					});
					if (!response.ok) {
						throw new Error("Error al eliminar el favorito");
					}
				} catch(error) {
					console.log(error)
				}
			}
		}
	}
};

export default getState;