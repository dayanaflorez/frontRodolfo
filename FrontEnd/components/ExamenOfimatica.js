const ExamenOfimatica = () =>{

    const vista = `

    <div id="pregunta1"  style="width: 60%; margin-left: 20%;">
        <form class="row m-4 g-3 d-flex justify-content-center bg-light" style="border-left: 5px solid #0d6efd;">
            <h3>Problema 1</h3>

              <p id="dProblema">Dada la matriz:</p>
              <img id="dProblema" src="./assets/images/img3.png" style="width: 60%;" alt="">
              <p id="dProblema">Calcule la suma de los valores de la columna b desde la fila 2 hasta la 16</p>

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

              <p id="dProblema">Dada la matriz:</p>
              <img id="dProblema" src="./assets/images/img4.png" style="width: 60%;" alt="">
              <p id="dProblema">Calcule la resta de los valores de la columna F desde la fila 2 hasta la 16 (Con funciones)</p>

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

              <p id="dProblema">Dada la matriz:</p>
              <img id="dProblema2" src="./assets/images/img5.png" style="width: 60%;" alt="">
              <p id="dProblema3">Concatene el nombre del cliente de la fila 6 con un "-" y despues su numero de cédula</p>

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
                document.getElementById('dProblema2').className = 'd-none'
                document.getElementById('dProblema3').className = 'd-none'
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

export {ExamenOfimatica}