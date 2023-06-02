import { ModuloCard } from "../components/ModuloCard.js";
import getData from "../connections/helpers/getData.js";


const inicioPage = async () => {

    let data = await getData()
    
    const index = `
    

    <h2 class="text-center m-4">${localStorage.getItem("correo") ? "Bienvenido " + localStorage.getItem("correo") : "Bienvenido"}</h2>

    <p class="text-center m-4">Por favor elija el modulo que desea registrar</p>

    <div class="row d-flex justify-content-center flex-wrap column-gap-4">
    ${data.results.map(dato => 
        ModuloCard(dato)
        )}

    </div>
    </div>

`
return index
}

export { inicioPage };