import { RegistrarseForm } from "../components/RegistarseFormulario.js"

const Registro = async () =>{

    const vista = `
    <div class="d-flex justify-content-center m-5">
    <div class="card p-4" style="width: 30rem; heigth:520px; box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.329);">
        ${await RegistrarseForm()}
    </div>
    </div>
    `
    
    

    return vista

}

export {Registro}