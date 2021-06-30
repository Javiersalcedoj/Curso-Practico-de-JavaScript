// Helpers

function calcularMediaAritmetica (lista) {
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

// calculadora de mediana

function calcularMedia (lista) {
    
    const mitadLista = parseInt(lista.length /2);
    
    if ((lista.length) % 2 === 0){
        const elemento1 = lista [mitadLista];
        const elemento2 = lista [mitadLista - 1];
        
        const mediana = calcularMediaAritmetica([elemento1, elemento2]);
        return mediana;
    } else {
        mediana = lista[mitadLista];
        return mediana;
    }
}

function escribirTodoHTML () {

// Mediana General

let salariosCol = colombia.map (
    function (persona) {
        return persona.salary;
    }
);

let salariosColSorted =  salariosCol.sort (
    function(a, b){
        return a - b;
    }
);

let medianaGeneralCol =  calcularMedia (salariosColSorted)

// Mediana del top 10%
let spliceStart = salariosColSorted.length * 0.9;
let spliceCounter = salariosColSorted.length - spliceStart; 

let salariosColtTop10 = salariosColSorted.splice(spliceStart, spliceCounter);

let medianaTop10Col =  calcularMedia (salariosColtTop10);

let promedioSalarios = calcularMediaAritmetica (salariosColSorted);

let medianaSalariesOfColombia = document.getElementById("medianaSalariesColombia");
medianaSalariesOfColombia.innerText = "El promedio de estos salarios es: $" + parseInt(promedioSalarios)+ ", su mediana general es $" + parseInt (medianaGeneralCol) + " y  la mediana top 10% es: $" + parseInt (medianaTop10Col) + ".";



let textSalarios = "";

for (i = 0; i < colombia.length; i++) {
    if ((i+1) == colombia.length) {
        textSalarios = textSalarios + ("$" + colombia[i].salary + ".");
    } else {
        textSalarios = textSalarios + ("$" + colombia[i].salary + ", ");
    }
}


let printSalaries = document.getElementById("salariesColombia");
printSalaries.innerText = "Los salarios que están dentro de la base de datos son: " + textSalarios;

}

escribirTodoHTML();