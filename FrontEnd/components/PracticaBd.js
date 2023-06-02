const PracticaBd =()=>{

    const vista = `<div class="" style="width: 60%; margin-left: 20%;" >

    <p><b>¿Qué es SQL?</b><br><br>
        
        - SQL significa Lenguaje de Consulta Estructurado<br>
        - SQL permite acceder y manipular bases de datos<br>
        - SQL se convirtió en norma del Instituto Nacional Estadounidense de Normalización (ANSI) en 1986 y de la Organización Internacional de Normalización (ISO) en 1987<br>

    <p> <b>Sintaxis de SQL</b><br>
    <b>Tablas de bases de datos</b><br>
    Una base de datos suele contener una o varias tablas. Cada tabla se identifica por un nombre (por ejemplo, "Clientes" o "Pedidos"). Las tablas contienen registros (filas) con datos
    <br><br>En este tutorial utilizaremos la conocida base de datos de ejemplo Northwind (incluida en MS Access y MS SQL Server).<br>
    <br><img src="./assets/images/img1.png"><br>
    A continuación se muestra una selección de la tabla "Clientes":</p><br>

        <div class="w-75 bg-light" style="border-left: 5px solid #0d6efd;">
            <div class="p-4">
        <p>Ejemplo</p>

        <p><font style="color: rgb(61, 6, 209);">SELECT</font> * 
            <font style="color: rgb(61, 6, 209);">FROM</font> Customers</p><br>

        <a class="btn btn-primary" href="https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_all">Intentelo usted mismo</a>
    </div>
        </div>
        <br><br>
        <b>La sentencia SQL SELECT DISTINCT</b>

        <p>La sentencia SELECT DISTINCT se utiliza para devolver sólo valores distintos (diferentes).
            <br>
        Dentro de una tabla, una columna a menudo contiene muchos valores duplicados; y a veces sólo se desea listar los valores diferentes (distintos).</p>
        <br>
        <div class="w-75 bg-light" style="border-left: 5px solid #0d6efd;">
            <div class="p-4">
        <p>Ejemplo</p>

        <p><font style="color: rgb(61, 6, 209);">SELECT DISTINCT</font> columna1, columna2 
            <font style="color: rgb(61, 6, 209);">FROM</font> nombre_tabla</p><br>

        <a class="btn btn-primary" href="https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_distinct">Intentelo usted mismo</a>
    </div>
        </div>

        <br><br>

        <b>La cláusula WHERE de SQL</b>

        <p>La cláusula WHERE se utiliza para extraer sólo aquellos registros que cumplan una condición especificada.</p>
        <br>
        <div class="w-75 bg-light" style="border-left: 5px solid #0d6efd;">
            <div class="p-4">
        <p>Ejemplo</p>

        <p><font style="color: rgb(61, 6, 209);">SELECT DISTINCT</font> columna1, columna2 
            <font style="color: rgb(61, 6, 209);">FROM</font> nombre_tabla
            <font style="color: rgb(61, 6, 209);">WHERE</font> condicion</p><br>

        <a class="btn btn-primary" href="https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_where_and">Intentelo usted mismo</a>
    </div>
        </div>

        <br><br>

        <b>La sentencia SQL INSERT INTO</b>

        <p>La sentencia INSERT INTO se utiliza para insertar nuevos registros en una tabla.</p>
        <br>
        <div class="w-75 bg-light" style="border-left: 5px solid #0d6efd;">
            <div class="p-4">
        <p>Ejemplo</p>

        <p><font style="color: rgb(61, 6, 209);">INSERT INTO</font> nombre_tabla(columna1, columna2)<br> 
            <font style="color: rgb(61, 6, 209);">Values</font> (valor1, valor2)</p><br>

        <a class="btn btn-primary" href="https://www.w3schools.com/sql/trysql.asp?filename=trysql_insert_colname">Intentelo usted mismo</a>
    </div>
        </div>

        <br><br>

        <b>La sentencia UPDATE de SQL</b>

        <p>La sentencia UPDATE se utiliza para modificar los registros existentes en una tabla.</p>
        <br>
        <div class="w-75 bg-light" style="border-left: 5px solid #0d6efd;">
            <div class="p-4">
        <p>Ejemplo</p>

        <p><font style="color: rgb(61, 6, 209);">UPDATE</font> nombre_tabla<br> 
            <font style="color: rgb(61, 6, 209);">SET</font> columna1 = valor1, columna = valor2)<br>
            <font style="color: rgb(61, 6, 209);">WHERE</font> condición</p><br>

        <a class="btn btn-primary" href="https://www.w3schools.com/sql/trysql.asp?filename=trysql_update_2">Intentelo usted mismo</a>
    </div>
        </div>

        <br><br>

        <b>La sentencia DELETE de SQL</b>

        <p>La sentencia DELETE se utiliza para eliminar registros existentes en una tabla.</p>
        <br>
        <div class="w-75 bg-light" style="border-left: 5px solid #0d6efd;">
            <div class="p-4">
        <p>Ejemplo</p>

        <p><font style="color: rgb(61, 6, 209);">DELETE FROM</font> nombre_tabla<br> 
            <font style="color: rgb(61, 6, 209);">WHERE</font> condición</p><br>

        <a class="btn btn-primary" href="https://www.w3schools.com/sql/trysql.asp?filename=trysql_update_2">Intentelo usted mismo</a>
    </div>
        </div>

    <br><br>
    <p>Si quieres más de SQL, presiona el siguiente botón</p>
    <a class="btn btn-primary" href="https://www.w3schools.com/sql/">Aprender más</a>

    <p>O si prefiere terminar la práctica</p>
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onclick="
    document.getElementById('clases').className = 'd-block'
    document.getElementById('clasesContentPractico').className = 'd-none'
    ">Terminar</button>
  
        


</div>

    `

    return vista
}

export {PracticaBd}