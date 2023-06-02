import { IniciarSesionBoton } from "./IniciarSesionBoton.js";

const IniciarSesionForm = async () => {
return `

    <form style="height: 440px; " id="loginForm">
      
        <div class="d-flex align-items-center mb-3 pb-1">
        <span class="h1 fw-bold mb-0"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Logo_of_FESC_University.svg/2560px-Logo_of_FESC_University.svg.png"
            width="35%" style="margin-left : 32.5%"></span>
        </div>

        <h5 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px;">Inicia sesion con tu cuenta</h5>

        <div class="form-outline mb-4">
        <input type="text" id="documento" class="form-control form-control-lg" />
        <label class="form-label" for="documento">Email</label>
        </div>

        <div class="form-outline mb-4">
        <input type="password" id="clave" class="form-control form-control-lg" />
        <label class="form-label" for="clave">Contraseña</label>
        </div>

        <div class="pt-1 mb-4">
        ${IniciarSesionBoton()}
        </div>
        

    </form>
`
}

export {IniciarSesionForm};