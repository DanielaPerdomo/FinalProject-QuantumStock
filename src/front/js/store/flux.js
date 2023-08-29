const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],

			token: localStorage.getItem("token") ?? null,
			info: "",
			almacen: [],
			product:[]

		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			create_token: async (event, email, password) => {
				const store = getStore()
				event.preventDefault()
				try {
					const response = await fetch(process.env.BACKEND_URL + "api/login", {
						method: "POST",
						body: JSON.stringify({
							"email": email,
							"password": password
						}),
						headers: {
							"content-type": "Application/json"
						}

					})

					if (response.ok) {
						const body = await response.json()
						/* console.log(body) */
						setStore({ token: body.token })
						localStorage.setItem("token", body.token)
						/* console.log("esto es token",store.token) */

						return true
					}
				} catch (error) {

					console.log(error)

					return false
				}

			},

			get_app: async () => {

				const store = getStore();
				try {
					const response = await fetch(process.env.BACKEND_URL + "api/demo", {
						method: "GET",

						headers: {
							Authorization: ` Bearer ${store.token}`,
						}

					})
					if (response.ok) {

						const body = await response.json()

						/* console.log(body) */
						setStore({ info: body })

						return true
					}
					/* console.log("esto es store.info",store.info) */

				} catch (error) {

					console.log(error)
				}
			},

			setToken: (token) => {

				setStore({ token })
			},

			logOut: () => {
				localStorage.removeItem("token");
				setStore({ token: null })
			},


			getStock: async () => {

				

				try {
					const response = await fetch(process.env.BACKEND_URL + "api/user/store", {
						method: "GET",
						headers: {
							"Content-Type": "application/json",
						},
					})
					if (response.ok) {
						const body = await response.json()
						console.log("esto es almacenfa jaja",body)
						setStore({ almacen: body })
					}
				} catch (error) {
					console.log(error)
				}
			},

			getProduct: async () => {

			
				try {
					const response = await fetch(process.env.BACKEND_URL + "api/list/of/product", {
						method: "GET",
						headers: {
							"Content-Type": "application/json",
						},
					})
					if (response.ok) {
						const body = await response.json()
						setStore({product: body })
					}
				} catch (error) {
					console.log(error)
				}
			},

			PutProduct :async (product_id) =>{    

				try {
					const response = await fetch(process.env.BACKEND_URL + `api/product/<int:${product_id}`, {
						method: "PUT",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify({
							product_name: product_name,
							description:description,
							item:item,
							price:price,
							admission_date:admission_date
						})
					})
					if (response.ok) {
						getProduct()
					}
				} catch (error) {
					console.log(error)
				}



			},

			deleteProduct: async (product_id) =>{  

				try {
					const response = await fetch(process.env.BACKEND_URL + `API/delete/product/${product_id}`, {
						method: "DELETE",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify(
							
						)
					})
					if (response.ok) {
						getProduct()
					}
				} catch (error) {
					console.log(error)
				}
			}
		}
	};
};

export default getState;