import { URLGETMODULOS } from "./endpoints.js"

export default async () =>{

    const apiUrl = URLGETMODULOS

    try {

        const response = await fetch(apiUrl)
        const data = await response.json()

        return data
        
    } catch (error) {

        console.log("Error fetch ", error)
        
    }

}