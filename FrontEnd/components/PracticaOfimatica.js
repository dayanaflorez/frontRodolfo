const PracticaOfimatica =()=>{

    const vista = `<div class="" style="width: 60%; margin-left: 20%;" >

    <p><b>¿Qué es Excel?</b><br><br>
    Es un programa de hojas de cálculo desarrollado por Microsoft. Excel organiza los datos en columnas y filas y permite realizar funciones matemáticas. Funciona en Windows, macOS, Android e iOS.

    <br>La primera versión se lanzó en 1985 y ha sufrido varios cambios a lo largo de los años. Sin embargo, la funcionalidad principal sigue siendo la misma en su mayor parte.
        <br><br>
        Se utiliza para: <br><br>
        
        - Análisis<br>
        - Introducción de datos<br>
        - Gestión de datos<br>
        - Presupuestos<br>
        - Programación<br>
        - Visualización y gráficos<br>
        - Contabilidad</p><br>

    <p> <b>Sintaxis</b><br>
        Una fórmula en Excel se utiliza para hacer cálculos matemáticos. Las fórmulas siempre empiezan con el signo igual = escrito en la celda, seguido de su cálculo.</p><br>

        <div class="w-75 bg-light" style="border-left: 5px solid #0d6efd;">
            <div class="p-4">
        <p>Creación de fórmulas, paso a paso</p>

        <p>- Seleccione una celda<br>
            - Escriba el signo igual (=)<br>
            - Seleccionar una celda o escribir un valor<br>
            - Introducir un operador aritmético<br>
            - Seleccionar otra celda o escribir un valor<br>
            - Pulse Intro<br>
        </p>

    </div>
        </div>

        <br>

        <b>Así se vería:</b>

        <br><br>

        <img src="./assets/images/img2.png" alt="">

        <br><br>



        <b>Funciones</b>

        <p>Excel tiene muchas fórmulas prefabricadas, llamadas funciones. <br>

            Las funciones se escriben con = y el nombre de la función. <br>
            
            Por ejemplo =SUMA<br>
            
            Una vez que has escrito el nombre de la función necesitas aplicarla a un rango.<br>
            
            Por ejemplo =SUMA(A1:A5)<br>
            
            El rango siempre está entre paréntesis.<br></p>
        

            <img class="w-75 bg-light" src="" style="border-left: 5px solid #0d6efd;">
                
            <a class="btn btn-primary" href="https://www.w3schools.com/EXCEL/excel_functions.php">Ver funciones</a>

    <br><br>
    <p>Si quieres más de Excel, presiona el siguiente botón</p>
    <a class="btn btn-primary" href="https://www.w3schools.com/EXCEL/">Aprender más</a><br>
    <p>O si prefiere terminar la practica</p>
    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onclick="
    document.getElementById('clases').className = 'd-block'
    document.getElementById('clasesContentPractico').className = 'd-none'
    ">Terminar</button>

 


</div>

    `

    return vista
}

export {PracticaOfimatica}