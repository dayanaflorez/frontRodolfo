const RegistarseBoton = () =>{

    const vista = `<button type="button"
    class="position-relative bottom-0 start-50 translate-middle-x rounded-0 btn btn-primary btn-block " 
    onclick="
    window.alert('Usuario registrado con éxito')
    window.location.reload()
    ">Registrarse</button>`

    return vista

}

export {RegistarseBoton}