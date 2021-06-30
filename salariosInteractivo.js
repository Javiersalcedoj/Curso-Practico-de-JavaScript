
let countClickButtonSoyElBotton = 1;

function aggObjetos() {
    //se hace para que no repinte
    if (countClickButtonSoyElBotton == 1) {
        let aggObjetos = document.getElementById("aggLista")
        aggObjetos.insertAdjacentHTML('beforeend', '<div id="aggPrimero"><h2 id="aggelementos">Cuantos elementos tiene su base de datos</h2><form><label for="numeroDatos"># de datos: </label><input id="numeroDatos" type="number"><button type="button" onclick="aggInput()">enviar</button></form><form id="aggInputs"></form><div>');

        countClickButtonSoyElBotton = 2
    } 
}

function numeroDatos () {
    //saber cuantos input son
    const inputNumeroDatos = document.getElementById("numeroDatos");
    const value = parseInt(inputNumeroDatos.value);
    return value;
}

function aggInput () {
    //eliminar todos los elementos hijos del padre;
    var elemento = document.getElementById("aggInputs");
    while (elemento.firstChild) {
      elemento.removeChild(elemento.firstChild);
    };

    //colocar los imput
    let valorNumeroDatos =  numeroDatos ();

    let ingresa = document.getElementById("aggInputs");
    ingresa.insertAdjacentHTML('beforeend', '<h2>Ingrese los Datos</h2>');

   for(let i = 1; i < (valorNumeroDatos + 1); i++ ) {
        
        var direccion = '<div><label for="' + i + '" type="number">Dato: </label> <input id="' + i + '" type="number"></input></div>';
        let input1 = document.getElementById("aggInputs");
        input1.insertAdjacentHTML('beforeend', direccion);
    }
    let button = document.getElementById("aggInputs");
    button.insertAdjacentHTML('beforeend', '<a href="#analisisResultado"><button type="button" onclick="datosUsuario()">Calcular</button></a>');
}





function datosUsuario () {
    colombia = [];

    let valorNumeroDatos =  numeroDatos ();

    //trae los datos a js y los agrega a la
    for (let i = 1; i < (valorNumeroDatos + 1); i++){
        let id = i;
        let dato = inputDatoUsiario = document.getElementById(id);
        let valueDato = parseInt(dato.value);

        let aggElemento = colombia.push({
            name: "",
            salary: valueDato,});
    }
    escribirTodoHTML ();
}