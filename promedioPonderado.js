const lista1 = [
    {nota:3, relevancia: 30},
    {nota:3.5, relevancia: 30},
    {nota:5, relevancia: 40},
];

function calcularPromedioPonderado (lista) {
    let listaMultiplicacionDenominador = [];
    let listaDenominador = [];

    for (i = 0; i < lista.length; i++) {
        let nota = lista[i].nota;
        let relevancia = lista[i].relevancia;
        let mulplicacion = nota * relevancia;

        let aggElementoDenominador = listaDenominador.push(relevancia);
        let aggElementoMultiplicacion = listaMultiplicacionDenominador.push(mulplicacion);
    }

    const denominador = listaDenominador.reduce(
        function (valorAcumulado = 0, nuevoElemento ){
            return valorAcumulado + nuevoElemento;
        }
    );

    const numerador = listaMultiplicacionDenominador.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioPonderado = numerador / denominador;
    return promedioPonderado;
}
calcularPromedioPonderado(lista1);



