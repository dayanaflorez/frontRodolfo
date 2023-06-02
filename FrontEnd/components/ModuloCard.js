const ModuloCard = (data) =>{
    const vista = `
    <div class="col-md-2 m-4 ">
    <div class="card" style="width: 18rem; height: 480px; overflow: hidden; box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.329);">
    <img src="${data.image}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${data.name}</h5>
        <p class="card-text">Para registrarse al modulo de ${data.name} haga click en el siguiente botón</p>
        ${localStorage.getItem("correo") ? `<a onclick="window.alert('Modulo registrado con éxito') " style="float: right; bottom: 5px;" class="btn btn-primary">Vamos al módulo</a>`: `<a href="/#/login" style="float: right; bottom: 5px;" class="btn btn-primary">Vamos al módulo</a>`}
    </div>
</div></div>`

    return vista
}

export {ModuloCard}