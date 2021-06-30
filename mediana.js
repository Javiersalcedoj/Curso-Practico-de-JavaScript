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

function calcularMediana () {
    //borrar datos del array 
    listaUsario = [];

    datosUsuario ();
    
    //Carcular mediana
    const listaOrdenada = listaUsario.sort(
        function (a, b) {
            return a - b;
        }
    )

    const mitadLista = parseInt(listaOrdenada.length /2);

    const resultadoMedia =  calcular();
    function calcular() {
        if ((listaOrdenada.length) % 2 === 0){
            const elemento1 = listaOrdenada [mitadLista];
            const elemento2 = listaOrdenada [mitadLista - 1];
        
            const mediana = (elemento1 + elemento2) / 2;
            return mediana;
        } else {
            mediana = listaOrdenada[mitadLista];
            return mediana;
        }
    }

    //general respuesta
    const resultado = document.getElementById("resultado");
    resultado.innerText = "La mediana es: " + resultadoMedia;

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

    let ingresa = document.getElementById("aggInputs");
    ingresa.insertAdjacentHTML('beforeend', '<h2>Ingrese los Datos</h2>');

   for(let i = 1; i < (valorNumeroDatos + 1); i++ ) {
        
        var direccion = '<div><label for="' + i + '" type="number">Dato: </label> <input id="' + i + '" type="number"></input></div>';
        let input1 = document.getElementById("aggInputs");
        input1.insertAdjacentHTML('beforeend', direccion);
    }
    let button = document.getElementById("aggInputs");
    button.insertAdjacentHTML('beforeend', '<button type="button" onclick="calcularMediana()">Calcular</button>');
}