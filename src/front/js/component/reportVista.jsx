
import React from "react";




export const ReportVista = () => {


    async function getReport (event)  {
        event.preventDefault();
        const store = getStore()
        try {
            const response = await fetch(process.env.BACKEND_URL + "api/reports", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${store.token}`
                },
            })
            if (response.ok) {
                const body = await response.json()
                setStore({ product: body })
            }
        } catch (error) {
            console.log(error)
        }
    }



     return (
        <>
              



        </>

     )

   

}