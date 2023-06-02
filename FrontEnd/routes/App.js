import { Nav } from "../layouts/Nav.js";
import { Footer } from "../layouts/Footer.js";
import { inicioPage } from "../pages/InicioPage.js";
import getHash from "../connections/helpers/getHash.js"
import resolverRuta from "../connections/helpers/resolverRuta.js"
import { Error404 } from "../pages/Error404.js";
import { Dashboard } from "../pages/Dashboard.js";
import { VerModulo } from "../pages/VerModulos.js";
import { Login } from "../pages/Login.js";
import { Registro } from "../pages/Registro.js";

const Rutas = {
    "/": inicioPage(),
    "/:id" : VerModulo(),
    "/dashboard":  Dashboard(),
    "/registrar/modulo" : "",
    "/login" : Login(),
    "/registro" : Registro()
}

const App = async () => {
    const header = document.querySelector('header');
    const main = document.querySelector('main');
    const footer = document.querySelector('footer');

    header.innerHTML = await Nav();
    footer.innerHTML = Footer();
    let ruta = await resolverRuta(getHash())
    let pagina = await (Rutas[ruta]) ? Rutas[ruta] : Error404()
    console.log(ruta)

    main.innerHTML = await pagina

}

export { App };