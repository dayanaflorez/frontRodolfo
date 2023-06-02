const Dashboard = async() =>{

    let vista = `<div class="row d-flex justify-content-center column-gap-4">`

    //datos que llegan del back, estos son temporales
    let modulos = {
        0 : "Lógica de programación",
        1 : "Base de datos",
        2 : "Ofimatica"
    }


    for(let i = 0; i<Object.keys(modulos).length; i++){

        vista += `<div class="col-md-2 m-4 flex-wrap ">
            <div class="card" style="width: 18rem; height: 400px; overflow: hidden; box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.329);">
            <img src="https://www.kulander.net/my-images/blog/cover/full/Ejemplosde-1e5425525854c9d737d4.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${modulos[i]}</h5>
              <p class="card-text">Para ingresar al modulo de ${modulos[i]} haga click en el siguiente botón</p>
              <a href="/#/${i}" target="_blank" style="float: right; bottom: 5px;" class="btn btn-primary">Vamos al módulo</a>
            </div>
          </div>
          </div>`
    }

    vista += '</div>'

    return vista

}

export {Dashboard}