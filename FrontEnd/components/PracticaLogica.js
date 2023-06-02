const PracticaLogica =()=>{

    const vista = `<div class="" style="width: 60%; margin-left: 20%;" >

    <p><b>¿Qué es Python?</b><br><br>
        Python es un lenguaje de programación popular. Fue creado por Guido van Rossum y lanzado en 1991.
        <br><br>
        Se utiliza para: <br><br>
        
        - desarrollo web (lado del servidor)<br>
        - desarrollo de software<br>
        - matemáticas<br>
        - secuencias de comandos del sistema.</p><br>

    <p> <b>Creación de variables</b><br>
        Python no tiene ningún comando para declarar una variable. <br>
        
        Una variable se crea en el momento en que le asigna un valor por primera vez.</p><br>

        <div class="w-75 bg-light" style="border-left: 5px solid #0d6efd;">
            <div class="p-4">
        <p>Ejemplo</p>

        <p>x = <font style="color: red;">5</font><br>
            y = <font style="color: rgb(109, 6, 6);">"John"</font><br>
            <font style="color: rgb(61, 6, 209);">print</font>(x) <br>
            <font style="color: rgb(61, 6, 209);">print</font>(y)</p><br>

        <a class="btn btn-primary" href="https://www.w3schools.com/python/trypython.asp?filename=demo_variables1">Intentelo usted mismo</a>
    </div>
        </div>
        <p>para verificar el tipo de cualquier objeto en Python, use la función type():</p>


        <div class="w-75 bg-light" style="border-left: 5px solid #0d6efd;">
            <div class="p-4">
        <p>Ejemplo</p>

        <p>x = <font style="color: red;">1</font><font style="color: rgb(13, 94, 2);"> # int</font><br>
            y = <font style="color: red;">2.8</font><font style="color: rgb(13, 94, 2);"> # float</font><br>
            z = <font style="color: red;">1j</font><font style="color: rgb(13, 94, 2);"> # complex</font><br>
            <font style="color: rgb(61, 6, 209);">print</font>(<font style="color: rgb(61, 6, 209);">type</font>(x))<br>
            <font style="color: rgb(61, 6, 209);">print</font>(<font style="color: rgb(61, 6, 209);">type</font>(y))<br>
            <font style="color: rgb(61, 6, 209);">print</font>(<font style="color: rgb(61, 6, 209);">type</font>(z))<br></p>
        <a class="btn btn-primary" href="https://www.w3schools.com/python/trypython.asp?filename=demo_numbers">Intentelo usted mismo</a>
    

    </div>
        </div>

        <br><br>

        <b>Valores Booleanos</b>

        <p>En programación, a menudo necesitas saber si una expresión es verdadera o falsa <br>

            Puede evaluar cualquier expresión en Python y obtener una de dos respuestas, Verdadero o Falso. <br>
            
            Cuando compara dos valores, la expresión se evalúa y Python devuelve la respuesta booleana: <br></p>
        

            <div class="w-75 bg-light" style="border-left: 5px solid #0d6efd;">
                <div class="p-4">
            <p>Ejemplo</p>

            <p><font style="color: rgb(61, 6, 209);">print</font>(<font style="color: red;">10</font> > <font style="color: red;">9</font>)
               <br> <font style="color: rgb(61, 6, 209);">print</font>(<font style="color: red;">10</font> == <font style="color: red;">9</font>)
              <br>  <font style="color: rgb(61, 6, 209);">print</font>(<font style="color: red;">10</font> < <font style="color: red;">9</font>)</p>
    
            <a class="btn btn-primary" href="https://www.w3schools.com/python/trypython.asp?filename=demo_booleans1">Intentelo usted mismo</a>
        
        </div>
    </div>

    <br><br>
    <p>Si quieres más de Python, presiona el siguiente botón</p>
    <a class="btn btn-primary" href="https://www.w3schools.com/python/">Aprender más</a>

    <p>O si prefiere puede presentar el examen</p>
    <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Presentar Examen
  </button>
  
  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Examen Logica de programación</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">

            <div class="w-75 bg-light" style="border-left: 5px solid #0d6efd;">
                <div class="p-4">
                    <p>Complete el siguiente código para mostrar un mensaje si X es menor que Y, en caso de que no, muestre otro mensaje</p>

                    <p>x = <font style="color: red;">10</font><br>
                        y = <font style="color: red;">21</font><br>
                        <br> <font style="color: rgb(61, 6, 209);">if</font> x <input style="width: 20px;" type="text" id="r1"> y:
                        <br>  <font style="color: rgb(61, 6, 209);">.    print</font>("x es mayor que y")
                        <br> <font style="color: rgb(61, 6, 209);">elif</font> x <input style="width: 20px;" type="text" id="r2"> y:
                        <br>  <font style="color: rgb(61, 6, 209);">.    print</font>("y es mayor que x")</p>
                    
                </div>
            </div>
          
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onclick="
          document.getElementById('clases').className = 'd-block'
          document.getElementById('clasesContentPractico').className = 'd-none'
          ">Validar</button>

        </div>
      </div>
    </div>
  </div>
        


</div>

    `

    return vista
}

export {PracticaLogica}