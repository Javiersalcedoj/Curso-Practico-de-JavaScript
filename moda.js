const lista1 = [
    1, 2, 3, 1, 2, 3, 4, 2, 2, 2, 1,
]; 

function calcularModa (lista) {
    //array a objeto
    const listaObjeto = {};
    lista.map(
        function (elemento) {
            if (listaObjeto[elemento]) {
                listaObjeto[elemento] += 1;
            } else{
                listaObjeto[elemento] = 1;  
            }
        }
    );
    //convertit objeteto array y ordenar de - a +
    const listaArray = Object.entries(listaObjeto).sort(
        function (a, b) {
            return a[1] - b[1];
        }
    );
    const moda = listaArray [listaArray.length - 1];
    return moda;
}



