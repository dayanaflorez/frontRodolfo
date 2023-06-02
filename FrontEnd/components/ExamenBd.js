const ExamenBd = () =>{

    const vista = `

    <div id="pregunta1"  style="width: 60%; margin-left: 20%;">
        <form class="row m-4 g-3 d-flex justify-content-center bg-light" style="border-left: 5px solid #0d6efd;">
            <h3>Problema 1</h3>
            <p>Ingrese una consulta para insertar datos en la tabla persona cuyas columnas son nombre y apellido con valores aleatrorios</p>
            <div class="col-md-4">
              <textarea class="form-control respuestas" spellcheck="false" wrap="logical" autocomplete="off" id="validationDefault01" required></textarea>
            </div>
            <div class="col-12">
              <button class="btn btn-primary m-4" onclick="
                document.getElementById('pregunta1').className = 'd-none'
                document.getElementById('pregunta2').className = 'd-block'
                ">Siguiente pregunta</button>
            </div>
          </form>
    </div>

    <div id="pregunta2" class="d-none" style="width: 60%; margin-left: 20%;">
        <form class="row m-4 g-3 d-flex justify-content-center bg-light" style="border-left: 5px solid #0d6efd;">
            <h3>Problema 2</h3>
            <p>Teniendo la tabla cliente, cuyos campos son id y nombre, Ingrese una consulta para eliminar un cliente cuyo id es 3</p>
            <div class="col-md-4">
              <textarea class="form-control respuestas" spellcheck="false" wrap="logical" autocomplete="off" id="validationDefault01" required></textarea>
            </div>
            <div class="col-12">
              <button class="btn btn-primary m-4" onclick="
                document.getElementById('pregunta2').className = 'd-none'
                document.getElementById('pregunta3').className = 'd-block'
                ">Siguiente pregunta</button>
            </div>
          </form>
    </div>

    <div id="pregunta3" class="d-none" style="width: 60%; margin-left: 20%;">
        <form class="row m-4 g-3 d-flex justify-content-center bg-light" style="border-left: 5px solid #0d6efd;">
            <h3 id="titulo">Problema 3</h3>
            <p id="dProblema">Teniendo la tabla animal con los campos id y nombre, genere una consulta para actualizar los datos de un animal cuyo id es 5</p>
            <div id="textarea" class="col-md-4">
              <textarea class="form-control respuestas" spellcheck="false" wrap="logical" autocomplete="off" id="validationDefault01" required></textarea>
            </div>
            <h2 id="adver" class="d-none">El examen ya ha sido presentado</h2>
            <div class="col-12">
              <button class="btn btn-primary m-4" id="terminado" onclick="
                document.getElementById('clases').className = 'd-block'
                document.getElementById('txt').innerHTML = 'Progreso del examen: 100%'
                document.getElementById('barra').style = 'width: 100%;'
                document.getElementById('adver').className = 'd-block text-danger'
                document.getElementById('volver').className = 'd-block btn btn-primary'
                document.getElementById('terminado').className = 'd-none'
                document.getElementById('titulo').className = 'd-none'
                document.getElementById('dProblema').className = 'd-none'
                document.getElementById('textarea').className = 'd-none'
                document.getElementById('examen').className = 'd-none'
                
                ">Terminar</button>

                <button onclick="
                document.getElementById('clases').className = 'd-block'
                document.getElementById('examen').className = 'd-none'
                " id="volver"
                class="btn btn-primary d-none" >Volver</button><br><br>
            </div>
          </form>
    </div>

    
    `

    return vista

}

export {ExamenBd}