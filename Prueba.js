//Variables y Operaciones:

//Escribe de forma correcta las variable segun el tipo de datos del ejemplo, y luego Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:
// Nombre completo (nombre y apellido)
// Dinero real (dinero ahorrado menos deudas)

var nombre = "Javier";
var apellido = "Salcedo";
var nombreDeUsuarioEnPlatzi = "classpunk6";
var edad = 23;
var correoElectrónico = "correo@correo.com";
var mayorDeEdad = 18;
var dineroAhorrado = 1000;
var deudas = 100;


function punto4 (n, a, da, d) {
    var nombreCompleto = n + " " + a;
    var dineroReal = da - d;
    console.log (nombreCompleto + " tiene un patrimonio de $" + dineroReal + " dolares.");
}

punto4 (nombre, apellido, dineroAhorrado, deudas);

//Funciones

//Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

//const name = "Juan David";
//const lastname = "Castro Gallego";
//const completeName = name + lastname;
//const nickname = "juandc";
//console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

const name = "Juan David";
const lastname = "Castro Gallego";
var nickname = "juandc";

function funcion1 (na, las) {
    let completeName = na + las;
    console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");    
}
funcion1 (name, lastname, nickname);

// Condicional

//Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

const tipoDeSuscripcion = "basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "Expert+":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}

//

const tipoDeSuscripcion = "Expert+";

if (tipoDeSuscripcion === "free") {
    console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion === "Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion === "Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if (tipoDeSuscripcion === "Expert+"){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
} else {
    console.log ("te la fumaste");
}

//Clicos

//Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

let i = 0;
while (i<5){
    console.log("El valor de i es: " + i++);
}

//

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

let i = 10;
while (i >= 2) {
    console.log("El valor de i es: " + i--);
}

//Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

var respuesta = prompt ("Cuanto es 2 + 2:");

while (respuesta !== "2") {
    var respuesta = prompt ("Cuanto es 2 + 2:");  
};

//Listas

//Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

var frutas = ["manzana", "pera", "uva", "zanahoria", "melocon"];

function imprimir (x){
    console.log (x[0]);
}
imprimir (frutas);

//Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

var frutas = ["manzana", "pera", "uva", "zanahoria", "melocon"];

function imprimir (x) {
    let cantidad = x.length ;
    for (let i=0; i < cantidad; i++){
        console.log(x[i]);
    }
}
imprimir (frutas);

//Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

var datos = {
    nombre: "javier",
    apellido: "salcedo",
    edad: 23,
}
function unafuncioon (algo){
    var elementos = Object.keys(algo);
    for (i = 0; i < elementos.length; i++ ){
        let elem = elementos [i];
        console.log(algo[elem]);
    }
}
unafuncioon (datos);