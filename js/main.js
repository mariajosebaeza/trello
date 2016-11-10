
function nuevaTarea(){

    var  contenedor  = document.getElementById('padre'); //el contenedor de todo lo agregado 

    // primero se crean los elementos de la maqueta de html 
    var row = document.createElement('div');             //Se crea div con clase row
    var primerDiv = document.createElement('div');      //se crea primer div
    var primerInput = document.createElement('input'); //se crea primer input
    var botonuno = document.createElement('button');  //nombre boton

    var nombreBoton = document.createTextNode('Guardar');   // se crea nombre del boton

    //  se agregan  clases y atributos de los elementos creados

    row.classList.add('row');
    primerDiv.classList.add('col-md-4',"primer-input");
    primerInput.setAttribute('type','text');
    primerInput.setAttribute('name','form-control');
    primerInput.setAttribute('id','filaNueva');
    primerInput.setAttribute('placeholder','crear fila..');
    botonuno.classList.add('btn' , 'btn-info' , 'btn-guardar');
    botonuno.setAttribute('type','button');

    // nombrar las posiciones 

    primerDiv.appendChild(primerInput); // primerDiv es padre de primerInput
    primerDiv.appendChild(botonuno);    // primer div es padre de botonuno
    row.appendChild(primerDiv);         // row padre de primer div
    contenedor.appendChild(row);        // contenedor es padre de row 
                                        //falta la variable del boton, es padre de la variable de nodo nombre. 

}
