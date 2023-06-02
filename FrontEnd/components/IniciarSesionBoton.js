const IniciarSesionBoton = () =>{

    const vista = `<button type="button"
    class="position-relative bottom-0 start-50 translate-middle-x rounded-0 btn btn-primary btn-block "
    onclick="
    var username = document.getElementById('documento').value
    var password = document.getElementById('clave').value
  
    // Crea un objeto de datos con los valores
    var data = {
        
      'username':username,
      'password':password

    };

    localStorage.setItem('correo', username)

    //Poner la petición al backend para validar los datos enviando el data como cuerpo

    window.open('/#/dashboard', '_self')
  

">Iniciar
    Sesión</button>`

    return vista

}

export {IniciarSesionBoton}