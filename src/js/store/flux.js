const getState = ({ getStore, setStore }) => {
	return {
		store: {
			characters: [],
			detailsCharacter: null,
			planets: [],
			detailsPlanet: null,
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

			getDetailsCharacter: async (id) => {
				setStore({ detailsCharacter: null }) 
				try {
					const response = await fetch(`https://www.swapi.tech/api/people/${id}`)
					if (!response.ok) {
						throw new Error("Error")
					}
					const data = await response.json()
					setStore({ detailsCharacter: data.result.properties})
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

			getDetailsPlanet: async (id) => {
				setStore({ detailsPlanet: null }) 
				try {
					const response = await fetch(`https://www.swapi.tech/api/planets/${id}`)
					if (!response.ok) {
						throw new Error("Error");
					}
					const data = await response.json()
					setStore({ detailsPlanet: data.result.properties})
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