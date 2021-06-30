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

function calcularModa () {
    //borrar datos del array 
    listaUsario = [];

    datosUsuario ();
    console.log(listaUsario);

    //array a objeto
    const listaObjeto = {};
    listaUsario.map(
        function (elemento) {
            if (listaObjeto[elemento]) {
                listaObjeto[elemento] += 1;
            } else{
                listaObjeto[elemento] = 1;  
            }
        }
    );
    console.log (listaObjeto);
    //convertit objeteto array 
    const listaArray = Object.entries(listaObjeto);

    //Ordenar array de mayor a menos repeticion /////////IMPORTANTE
    const listaArrayOrdenada = listaArray.sort (
        function (a, b) {
            return b[1] - a[1];
        }
    );
    console.log (listaArrayOrdenada);

    //Array solo con las veces que se repeti un numero
    let soloRepticion = listaArrayOrdenada.map (
        function (valor){
            return valor[1];
        }
    )
    let soloValor = listaArrayOrdenada.map (
        function (valor){
            return valor[0];
    });

    console.log(soloRepticion);
    console.log (soloRepticion.length);
    console.log (soloValor);

    const repetionMax = listaArrayOrdenada[0];

    //para que imprima
    const valor0 = soloRepticion[0];
    const valor1 = soloRepticion[1];

    if (valor0 == 1) {
        if (soloRepticion.length == 1) {
            const resultado2 = document.getElementById("resultado");
            resultado2.innerText = "La moda es: " + repetionMax[0] + " y se repite " + repetionMax[1] + " veces.";            

            console.log("estoy solo");
        } else {
            const resultado2 = document.getElementById("resultado");
            resultado2.innerText = "No existe moda, ningún número se repite";

            console.log("estoy acompañado");
        }
    } else if (valor0 == valor1) {
        let texto= "La moda es: ";
        for (i = 0; valor0 == soloRepticion[i]; i++ ) {
            texto = texto + soloValor[i] + ", ";
        }
        const resultado3 = document.getElementById("resultado");
        resultado3.innerText =  texto +"y se repiten " + repetionMax[0] + " veces.";            

        console.log(texto);
    } else {
        const resultado4 = document.getElementById("resultado");
        resultado4.innerText = "La moda es: " + repetionMax[0] + " y se repite " + repetionMax[1] + " veces.";            
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
    button.insertAdjacentHTML('beforeend', '<button type="button" onclick="calcularModa()">Calcular</button>');
}




