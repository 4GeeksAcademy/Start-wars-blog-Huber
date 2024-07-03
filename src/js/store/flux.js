const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			specificCharacter: null,
			planets: [],
			specificPlanet: null,
			starship: [],
			specificStarship: null,
			favorites: []
		},
		actions: {

			getCharacters: async () => {
				try {
					const response = await fetch("https://www.swapi.tech/api/people")
					if (!response.ok) {
						throw new Error("Error")
					}
					const data = await response.json()
					setStore({ characters: data.results})
					console.log(data.results)
				} catch(error) {
					console.log(error)
				}
			},

			getSpecificCharacter: async (id) => {
				setStore({ specificCharacter: null }) 
				try {
					const response = await fetch(`https://www.swapi.tech/api/people/${id}`)
					if (!response.ok) {
						throw new Error("Error")
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
							throw new Error("Error");
						}
					const data = await response.json()
					setStore({ planets: data.results })
					console.log(data.results)
				} catch(error) {
					console.log(error)
				}
			},

			getSpecificPlanet: async (id) => {
				setStore({ specificPlanet: null }) 
				try {
					const response = await fetch(`https://www.swapi.tech/api/planets/${id}`)
					if (!response.ok) {
						throw new Error("Error");
					}
					const data = await response.json()
					setStore({ specificPlanet: data.result.properties})
					console.log(data.result)
				} catch(error) {
					console.log(error)
				}
			},

			getstarship: async () => {
				try{
					const response = await fetch("https://www.swapi.tech/api/starships/")
					if (!response.ok) {
							throw new Error("Error");
						}
					const data = await response.json()
					setStore({ starship: data.results })
					console.log(data.results)
				} catch(error) {
					console.log(error)
				}
			},

			getSpicificStarship: async (id) => {
				setStore({ specificStarship: null }) 
				try {
					const response = await fetch(`https://www.swapi.tech/api/starships/${id}`)
					if (!response.ok) {
						throw new Error("Error");
					}
					const data = await response.json()
					setStore({ specificStarship: data.result.properties})
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
			
			deleteFavoriteCharacter: async (id) => {
				try {
					const response = await fetch(`https://www.swapi.tech/api/people/${id}`, {
						method: "DELETE",
						headers: {
							"Content-Type": "application/json"
						}
					});
					if (!response.ok) {
						throw new Error("Error");
					}
				} catch(error) {
					console.log(error)
				}
			}
			
		}
	}
};

export default getState;