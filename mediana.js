const lista1 = [
    2,
    4,
    1,
    3,
];
function calcularMedia (lista) {
    const listaOrdenada = lista.sort(
        function (a, b) {
            return a - b;
        }
    )

    const mitadLista = parseInt(listaOrdenada.length /2);

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