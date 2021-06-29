let listaUsario = [];

function datosUsuario () {
    let valorNumeroDatos =  numeroDatos ();

    //trae los datos a js y los agrega a la
    for (let i = 1; i < (valorNumeroDatos + 1); i++){
        let id = i;
        let dato = inputDatoUsiario = document.getElementById(id);
        let valueDato = parseInt(dato.value);

        let aggElemento = listaUsario.push(valueDato);
    }
}


function calcularMediaAritmetica () {
    //borrar datos del array 
    listaUsario = [];

    datosUsuario ();

    const sumaLista = listaUsario.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    )

    //recibe una funcion y lo que permite es sumar o cualquie operacion cada uno de los elementos del array

    const promedioLista = sumaLista / listaUsario.length;

    const resultado = document.getElementById("resultado");
    resultado.innerText = "El promedio es: " + promedioLista;
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
    //quitar respuesta
    const resultado = document.getElementById("resultado");
    resultado.innerText = "";

    //colocar los imput
    let valorNumeroDatos =  numeroDatos ();

   for(let i = 1; i < (valorNumeroDatos + 1); i++ ) {
        
        var direccion = '<label for="' + i + '">dato: </label> <input id="' + i + '" type="number"></input>';
        let input1 = document.getElementById("aggInputs");
        input1.insertAdjacentHTML('beforeend', direccion);
    }
    let button = document.getElementById("aggInputs");
    button.insertAdjacentHTML('beforeend', '<button type="button" onclick="calcularMediaAritmetica()">Calcular</button>');
}
