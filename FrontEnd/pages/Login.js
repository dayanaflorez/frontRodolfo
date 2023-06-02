
import { IniciarSesionForm } from "../components/IniciarSesionFormulario.js"

const Login = async () =>{

    const vista = `
    <div class="d-flex justify-content-center m-5">
    <div class="card p-4" style="width: 30rem; box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.329);">
        ${await IniciarSesionForm()}
    </div>
    </div>
    `
    
    

    return vista

}

export {Login}