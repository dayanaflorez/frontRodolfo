import { PracticaLogica } from "../components/PracticaLogica.js"
import { ExamenLogica } from "../components/ExemanLogico.js"
import getHash from "../connections/helpers/getHash.js"
import { PracticaBd } from "../components/PracticaBd.js"
import { PracticaOfimatica } from "../components/PracticaOfimatica.js"
import { ExamenBd } from "../components/ExamenBd.js"
import { ExamenOfimatica } from "../components/ExamenOfimatica.js"

const VerModulo = async ()=>{

    const teoriaLogicaProgra = `
    <p style="width: 60%; size: 15px; margin-left: 20%;">
        
        <b style="font-size: 35px; text-align: center;">Lógica de programación</b><br><br>
        
        <b style="text-align: center; size: 20px;">¿Qué es exactamente la lógica de programación?</b><br><br>
    Lógica es la técnica utilizada para desarrollar instrucciones en una secuencia para lograr determinado objetivo.
    
    Es la organización y planificación de instrucciones en un algoritmo, con el objetivo de tornar visible la implementación de un programa o software.
    
    La lógica de la programación es la organización coherente de las instrucciones del programa para que su objetivo sea alcanzado.
    
    Desafío del programador:
    El gran desafío del programador es entonces montar la estructura del programa para que este sea ejecutado por la computadora. Y es necesario partir del principio de que la computadora no piensa de la misma forma que el ser humano, y no es inteligente para saber qué es lo que tiene que hacer, ni comprender mensajes subjetivos.
    
    Por eso organizar la información de forma clara y en el orden adecuado es primordial para que la acción sea ejecutada correctamente.
    <br><br>
    <b style="text-align: center; size: 20px;">¿Qué es un algoritmo en lógica de programación?</b><br><br>
    El algoritmo es la propia secuencia de instrucciones para la ejecución de una tarea. De una forma más simple, el algoritmo es una receta o ruta que indica todos los procedimientos necesarios para realizar algo o resolver un problema.
    
    La información en un algoritmo no puede ser redundante o subjetiva. Tiene que ser clara y detallada para que la computadora interprete correctamente. Ejemplificando mejor vamos a hacer un algoritmo para freír papas de una forma bien simple y didáctica. ¡Vamos!
    
    <br><br><b>Algoritmo “Papa-frita”</b><br><br>
    
    - Inicio:<br>
    - Tomar las papas<br>
    - Pelar las papas<br>
    - Cortar las papas en tiras<br>
    - Tomar el sartén y colocarla sobre la estufa<br>
    - Encender el fuego de la estufa<br>
    - Colocar el sartén con aceite para calentar<br>
    - Esperar hasta que el aceite esté caliente<br>
    - Colocar las papas para freir<br>
    - Aguardar 10 minutos hasta que las papas estén fritas<br>
    - Retirar las papas y servir<br>
    - Fin<br><br>


    
    Con este paso a paso cualquier persona logra hacer papas fritas, ¿no lo crees?.<br>
    
    ¡Este es un algoritmo! Es importante que estés pendiente de tener una secuencia correcta y bien definida de las acciones, porque como en el ejemplo, no podríamos cortar las papas después de freírlas.
    
    Hay diversas formas de representar un algoritmo, como formas gráficas, flujogramas, formas textuales o en pseudocódigo. La diferencia entre el algoritmo que creamos y el que es utilizado en la programación, es el lenguaje para que la computadora entienda.
    
    Es importante resaltar que el flujo puede seguir diferentes caminos y convertirse en algo más complejo con cada información que se agrega. Por ejemplo, podríamos sumarle la condición de que si el aceite estuviera frío es necesario esperar, y si no (si estuviera caliente) podría colocar las papas para freír. Pero de esta forma entramos en otros factores y variables que pueden ser asunto para otros artículos.
    
    Tengamos en cuenta también que para comprender instrucciones subjetivas, es importante tener algunas reglas o indicaciones para entender la tarea “freír papas” y ejecutarla correctamente. De igual manera en el caso de las computadoras; necesitamos saber algunos conceptos para mejorar nuestros algoritmos, facilitando la comprensión y ejecución de los mismos.
    <br><br>
    <b>Variables y constantes</b><br><br>
    Seguramente ya has escuchado hablar sobre variables y constantes cuando se trata de programación, ¿no es verdad? Son valores que componen cálculos o condiciones y están presentes en todas las partes del programa.
    
    Una variable es un espacio para almacenar un tipo de dato que puede ser modificado cuando sea necesario.
    
    En cambio la constante posee un dato definido al inicio del programa y no podrá ser alterado.
    
    Utilizando el ejemplo de la papa frita, podemos decir que el aceite es una variable, ya que puede estar caliente o frío. Y el tiempo que demoran las papas fritas en estar listas es una constante; pues siempre serán 10 minutos, por ejemplo.
    
    <br><br>
    <b>Lógica de programación en la rutina diaria</b><br><br>
    Creamos este ejemplo para mostrar la importancia de escribir la secuencia correcta de las acciones, y para entrenar el razonamiento. Eso es algo que ya utilizas en la vida cotidiana sin percibirlo
    
    Detente y piensa un momento en tu rutina al despertar. Si lo escribes en un papel verás que es más compleja de lo que parece, pero la ejecución es automática. Imagina entonces comenzar a pensar en lo que podría ser variable y constante en esa rutina. Este es un excelente ejercicio para entrenar la lógica de programación y el uso de algoritmos.
    
    Ahora sólo tienes que entrar de lleno en el mundo de la programación e ir descubriendo los otros elementos importantes para programar.<br><br><br><br></p>`
    
    
    const teoriaBaseDatos = `
    <p style="width: 60%; size: 15px; margin-left: 20%;">
        
    <b style="font-size: 35px; text-align: center;">Bases de datos</b><br><br>
    
    <b style="text-align: center; size: 20px;">¿Qué es una base de datos?</b><br><br>

    Una base de datos es una herramienta para recopilar y organizar información. Las bases de datos pueden almacenar información sobre personas, productos, pedidos u otras cosas. Muchas bases de datos comienzan como una lista en una hoja de cálculo o en un programa de procesamiento de texto. A medida que la lista aumenta su tamaño, empiezan a aparecer redundancias e inconsistencias en los datos. Cada vez es más difícil comprender los datos en forma de lista y los métodos de búsqueda o extracción de subconjuntos de datos para revisión son limitados. Una vez que estos problemas comienzan a aparecer, una buena idea es transferir los datos a una base de datos creada con un sistema de administración de bases de datos (DBMS), como Access.
    
    Una base de datos computarizada es un contenedor de objetos. Una base de datos puede contener más de una tabla. Por ejemplo, un sistema de seguimiento de inventario que usa tres tablas no son tres bases de datos, sino una base de datos que contiene tres tablas. Salvo que haya sido específicamente diseñada para usar datos o códigos de otro origen, una base de datos de Access almacena sus tablas en un solo archivo, junto con otros objetos como formularios, informes, macros y módulos. Las bases de datos creadas en el formato Access 2007 (que también usan Access 2016, Access 2013 y Access 2010) tienen la extensión de archivo .accdb y las bases de datos creadas en formatos anteriores de Access tienen la extensión de archivo .mdb. Puede usar Access 2016, Access 2013, Access 2010 o Access 2007 para crear archivos en formatos de archivo anteriores (por ejemplo, Access 2000 y Access 2002-2003).
    
    Con Access, puede: <br><br>
    
    - Agregar nuevos datos a una base de datos, como un nuevo artículo en un inventario. <br>
    
    - Modificar datos existentes en la base de datos, por ejemplo, cambiar la ubicación actual de un artículo. <br>
    
    - Eliminar información, por ejemplo, si un artículo se vende o se descarta. <br>
    
    - Organizar y ver los datos de diferentes formas. <br>
    
    - Compartir los datos con otras personas mediante informes, correo electrónico, intranet o Internet. <br>
    
    <br><b>Partes de una base de datos de Access</b> <br><br>

    Las secciones siguientes son breves descripciones de las partes de una base de datos de Access típica.
    
    - Tablas <br>
    
    - Formularios <br>
    
    - Informes <br>
    
    - Consultas <br>
    
    - Macros <br>
    
    - Modulos <br>
    
    - Tablas <br>

    - Imagen del botón <br><br>

    Una tabla de base de datos es similar en apariencia a una hoja de cálculo en cuanto a que los datos se almacenan en filas y columnas. Por ende, es bastante fácil importar una hoja de cálculo en una tabla de base de datos. La principal diferencia entre almacenar los datos en una hoja de cálculo y almacenarlos en una base de datos es la forma en la que están organizados los datos.
    
    <br>Para aprovechar al máximo la flexibilidad de una base de datos, los datos deben organizarse en tablas para que no se produzcan redundancias. Por ejemplo, si quiere almacenar información sobre los empleados, cada empleado debe especificarse solo una vez en la tabla que está configurada para los datos de los empleados. Los datos sobre los productos se almacenarán en su propia tabla y los datos sobre las sucursales se almacenarán en otra tabla. Este proceso se denomina normalización.
    
    <br>Cada fila de una tabla se denomina registro. En los registros se almacena información. Cada registro está formado por uno o varios campos. Los campos equivalen a las columnas de la tabla. Por ejemplo, puede tener una tabla llamada "Empleados" donde cada registro (fila) contiene información sobre un empleado distinto y cada campo (columna) contiene otro tipo de información como nombre, apellido, dirección, etc. Los campos deben designarse como un determinado tipo de datos, ya sea texto, fecha u hora, número o algún otro tipo.
    
    <br>Otra forma de describir los registros y los campos es imaginar un catálogo de tarjetas antiguo de una biblioteca. Cada tarjeta del archivador corresponde a un registro de la base de datos. Cada dato de una tarjeta individual (autor, título, etc.) equivale a un campo de la base de datos.
    
   <br><br>
    
    <b>Formularios</b><br><br>

    Los formularios permiten crear una interfaz de usuario en la que puede escribir y modificar datos. Los formularios a menudo contienen botones de comandos y otros controles que realizan distintas tareas. <br> Puede crear una base de datos sin usar formularios con tan solo modificar los datos en las hojas de datos de la tabla. Sin embargo, la mayoría de los usuarios de bases de datos prefieren usar formularios para ver, escribir y modificar datos en las tablas.
    
    <br>Puede programar botones de comandos para determinar qué datos aparecen en el formulario, abrir otros formularios o informes, o ejecutar otras tareas. <br> Por ejemplo, puede tener un formulario llamado "Formulario de cliente" en el que trabaja con los datos de los clientes. El formulario de cliente puede tener un botón que abra un formulario de pedido en el que puede especificar un pedido nuevo para el cliente.
    
    <br> Los formularios también le permiten controlar de qué manera otros usuarios interactúan con los datos de la base de datos. Por ejemplo, puede crear un formulario que muestre solo determinados campos y permita que se realicen únicamente ciertas operaciones. Esto ayuda a proteger los datos y a asegurarse de que los datos se especifican correctamente.
    
    
    <br><br><b>Consultas</b>
    <br><br>Las consultas pueden realizar diversas funciones en una base de datos. La función más común es recuperar datos específicos de las tablas. Los datos que quiere ver generalmente están distribuidos en varias tablas y las consultas le permiten verlos en una única hoja de datos. Además, debido a que muchas veces no quiere ver todos los registros a la vez, las consultas le permiten agregar criterios para "filtrar" los datos y obtener solo los registros que quiere.
    
    <br>Ciertas consultas son "actualizables", es decir, puede modificar los datos de las tablas subyacentes mediante la hoja de datos de la consulta. Si está trabajando en una consulta actualizable, recuerde que los cambios se realizan en realidad en las tablas, no solo en la hoja de datos de la consulta.
    
    <br>Hay dos variedades básicas de consultas: consultas de selección y consultas de acciones. Una consulta de selección simplemente recupera los datos y los pone a disposición para su uso. Puede ver los resultados de la consulta en la pantalla, imprimirlos o copiarlos al portapapeles. O bien, puede usar el resultado de la consulta como un origen de registro para un formulario o un informe.
    
    <br>Una consulta de acción, tal como el nombre lo indica, realiza una tarea con los datos. Las consultas de acción se pueden usar para crear tablas nuevas, agregar datos a las tablas existentes, o actualizar o eliminar datos.
    

    
    <br><br><b>Macros</b>
    <br><br>Imagen del botónLas macros en Access pueden considerarse un lenguaje de programación simplificado que puede usar para agregar funciones a la base de datos. Por ejemplo, puede adjuntar una macro a un botón de comando en un formulario para que la macro se ejecute cada vez que se hace clic en ese botón. Las macros contienen acciones que ejecutan tareas, como abrir un informe, ejecutar una consulta o cerrar la base de datos. La mayoría de las operaciones de la base de datos que realiza manualmente se pueden automatizar mediante el uso de macros, por lo que se convierten en dispositivos que permiten ahorrar mucho tiempo.
    </p>`
    
    const teoriaOfimatica = `<p style="width: 60%; size: 15px; margin-left: 20%;">
        
        <b style="font-size: 35px; text-align: center;">Ofimatica</b><br><br>
        
        <b style="text-align: center; size: 20px;">¿Qué es ofimática?</b><br><br>
    La ofimática es un conjunto de herramientas de informática que se utilizan para optimizar, mejorar y automatizar los procedimientos que se realizan en una oficina. La palabra ofimática es un acrónimo formado por oficina e informática.
    
    Las herramientas de ofimática permiten idear, crear, almacenar y manipular información, pero deben estar las computadoras sí o sí conectadas a una red de Internet. La estructura ofimática suele estar constituida por las computadoras y sus periféricos.
    
    Toda actividad que se realice manualmente dentro de un complejo de oficinas puede realizarse con las herramientas de la ofimática de forma mucho mejor, más simple y rápida.
    
    La ofimática comenzó a desarrollarse en la década de los 70 con la masificación y modernización de los productos de oficina, fue un cambio positivo e importante, como por ejemplo el salto de las máquinas de escribir a las computadoras de escritorio o la invención de la fotocopiadora. Actualmente el principal proveedor de suites ofimáticas es Microsoft Office, aunque es pagado, y dentro de los proveedores libres está OpenOffice.</p>`

    const modulos = {
        0 : "Lógica de programación",
        1 : "Base de datos",
        2 : "Ofimatica"
    }


    
    let id = getHash()

    let moduloUsado = modulos[id]

    let vista = `<div id="clases" class="row d-flex justify-content-center">`
    
    vista += `<div class="col-md-12 text-center">

        <h2>Bienvenido al modulo de ${moduloUsado}</h2>


        <div class="row m-5">
            <div class="col-md-4">
                
                <div class="card" style="width: 100%; height: 500px; overflow: hidden; box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.329);">
                    <img style="object-fit: cover; width: 100%; height: 250px;" src="https://www.compartirpalabramaestra.org/sites/default/files/styles/articulos/public/field/image/que-teoria-aplica-en-su-aula.jpg?itok=-EuoF4SP" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h4 class="card-title">Clase teorica</h4>
                      <p class="card-text">Progreso de la clase: 100%</p>
                      <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar" style="width: 100%"></div>
                      </div>
                      <a onclick="
                      document.getElementById('clases').className = 'd-none'
                      document.getElementById('clasesContentTeorico').className = 'd-block'
                      
                      "
                        style="right: 15px; position: absolute; bottom: 15px;" class="btn btn-primary">Vamos a la clase</a>
                    </div>
                </div>
            
            </div>

            <div class="col-md-4">
                
                <div class="card" style="width: 100%; height: 500px; overflow: hidden; box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.329);">
                    <img style="object-fit: cover; width: 100%; height: 250px;" src="https://uem.edu.mx/wp-content/uploads/2021/01/4565-scaled-1024x585.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h4 class="card-title">Clase práctica</h4>
                      <p class="card-text">Progreso de la clase: 75%</p>
                      <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar" style="width: 75%"></div>
                      </div>
                      <a onclick="
                      document.getElementById('clases').className = 'd-none'
                      document.getElementById('clasesContentPractico').className = 'd-block'
                      
                      "
                        style="right: 15px; position: absolute; bottom: 15px;" class="btn btn-primary">Vamos a la clase</a>
                    
                    </div>
                </div>

            </div>

            <div class="col-md-4">

                <div class="card" style="width: 100%; height: 500px; overflow: hidden; box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.329);">
                    <img style="object-fit: cover; width: 100%; height: 250px;" src="https://media.istockphoto.com/id/1271903592/es/vector/infancia-educaci%C3%B3n-estudio-%C3%A9xito-como-concepto.jpg?s=612x612&w=0&k=20&c=1xhDzIViVFzZUEPUD3i2tno49Oqmj8kqCb1GczJykbg=" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h4 class="card-title">Examen</h4>
                      <p id="txt" class="card-text">Progreso del examen: 0%</p>
                      <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar" id="barra" style="width: 0%"></div>
                      </div>
                      <a onclick="
                      document.getElementById('clases').className = 'd-none'
                      document.getElementById('examen').className = 'd-block'
                      
                      "
                        style="right: 15px; position: absolute; bottom: 15px;" class="btn btn-primary">Vamos al examen</a>
                    
                    </div>
                </div>

            </div>
        </div>
    
    </div></div>
    
    <div id="clasesContentTeorico" style="display: none;">
        
        <a onclick="
        document.getElementById('clases').className = 'd-block'
        document.getElementById('clasesContentTeorico').className = 'd-none'
        "
         class="btn btn-primary" style="margin-left: 15%;">Volver</a><br><br>
        ${(id==0)? teoriaLogicaProgra : (id==1)? teoriaBaseDatos : teoriaOfimatica}

        <div class="w-100 d-flex justify-content-center">
        <a onclick="
        document.getElementById('clases').className = 'd-block'
        document.getElementById('clasesContentTeorico').className = 'd-none'
        "
         class="btn btn-primary" style="width: 30%;">Terminar</a>
        </div>
    </div>
    <div id="clasesContentPractico" style="display: none;">

        <a onclick="
        document.getElementById('clases').className = 'd-block'
        document.getElementById('clasesContentPractico').className = 'd-none'
        "
         class="btn btn-primary" style="margin-left: 15%;">Volver</a><br><br>

         ${(id==0)? PracticaLogica() : (id==1)? PracticaBd() : PracticaOfimatica()}

    </div>
    <div id="examen" style="display: none;">

        <a onclick="
        document.getElementById('clases').className = 'd-block'
        document.getElementById('examen').className = 'd-none'
        "
         class="btn btn-primary" style="margin-left: 15%;">Volver</a><br><br>

         ${(id==0)? ExamenLogica() : (id==1)? ExamenBd() : ExamenOfimatica()}

    </div>
    `


    return vista

}

export {VerModulo}