const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			


			
		},
		actions: {
			
			creat_user: async () => {

				try {
					const response = await fetch(process.env.BACKEND_URL+"/api/singup",{
					method:"POST",
					body:JSON.stringify({
						
					}),
					headers:{
						"content-type":"Aplication/json"

					}

					})

					const body = await response.json()
					const token =body.token
					
					localStorage.setItem("token",token)
				} catch (error){
					console.log(error)

				}
					

			},
			create_token: async () => {

				try {
					const response = await fetch(process.env.BACKEND_URL +"/api/login",{
					method:"POST",
					body:JSON.stringify({
						"email":"hola",
						"password":"hola"
					}),
					headers:{
						"content-type":"Aplication/json"
					}

					})

					const body = await response.json()
					const token =body.token
					
					localStorage.setItem("token",token)
				} catch (error){
					console.log(error)

				}

			}
			//get_app async ()=>{
			

		
		}
	};
};

export default getState;
