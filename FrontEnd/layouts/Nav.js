

const Nav = async() => {
return `<nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
    <a class="navbar-brand" href="#/"><img src="../assets/images/logoFesc.png" width="12%" alt=""></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#/${localStorage.getItem("correo") ? `dashboard` : ``}""><i class="bi bi-house"></i> Inicio</a>
        </li>
        ${localStorage.getItem("correo") ? 
        
        `<li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="bi bi-journal-bookmark"></i> Modulos
            </a>
            <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/#/" target="self">Registrar modulo</a></li>
            </ul>
        </li>
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="bi bi-stars"></i> Certificado
            </a>
            <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#/dashboard">Obtener Certificado</a></li>
            </ul>
        </li>
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             <i class="bi bi-person-circle"></i>  ${localStorage.getItem("correo")}
            </a>
            <ul class="dropdown-menu dropdown-menu-end">
            <li><a class="dropdown-item" onclick="localStorage.removeItem('correo')
            window.location.reload()" href="#/"><i class="bi bi-door-open"></i> Cerrar sesion</a></li>
            </ul>
        </li>` 
        : 
        
        `
        <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#/login"><i class="bi bi-door-open"></i> Iniciar sesrion</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#/registro"><i class="bi bi-person-add"></i> Registrarse</a>
        </li>
        `}

        </ul>
    </div>
    </div>
</nav>`
}
export { Nav };