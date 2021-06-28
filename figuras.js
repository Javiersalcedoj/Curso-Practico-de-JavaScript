// Código del cuadrado

function perimetroCuadrado (lado) {
    return lado *4;
} 
function areaCuadrado (lado){
    return lado**2;
} 

function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = parseInt(input.value);

    const perimetro = perimetroCuadrado (value);
    document.getElementById("perimetroCuadro").innerHTML = perimetro + " cm.";
}
function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = parseInt(input.value);

    const area = areaCuadrado (value);
    document.getElementById("areaCuadro").innerHTML = area + " cm^2.";
}

//Codigo triangulo

function perimetroTriangulo (lado1, lado2, base) {
return lado1 + lado2 + base;
} 
function areaTriangulo (base, altura) {
    return (base * altura) / 2;
}

function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("inputTrianguloL1");
    const lado1 = parseInt(input1.value);
    const input2 = document.getElementById("inputTrianguloL2");
    const lado2 = parseInt(input2.value);
    const inputB = document.getElementById("inputTrianguloB");
    const base = parseInt(inputB.value);

    const perimetro = perimetroTriangulo (lado1, lado2, base);
    document.getElementById("perimetroTriangulo").innerHTML = perimetro + " cm.";
}

function calcularAreaTriangulo() {
    const inputAltura = document.getElementById("inputTrianguloAltura");
    const altura = parseInt(inputAltura.value);
    const inputB = document.getElementById("inputTrianguloB");
    const base = parseInt(inputB.value);

    const area = areaTriangulo (base, altura);
    document.getElementById("areaTriangulo").innerHTML = area + " cm^2.";
}

//Codigo circulo

function perimetroCirculo (radio) {
    return 2 * radio * Math.PI;
}
function areaCirculo (radio) {
    return Math.PI * radio**2;
}

function calcularPerimetroCirculo() {
    const inputRadio = document.getElementById("inputRadio");
    const radio = inputRadio.value;
    
    const perimetro =  perimetroCirculo (radio);
    document.getElementById("perimetroCirculo").innerHTML = perimetro + " cm.";
}
function calcularAreaCirculo() {
    const inputRadio = document.getElementById("inputRadio");
    const radio = inputRadio.value;
    
    const area =  areaCirculo (radio);
    document.getElementById("areaCirculo").innerHTML = area + " cm^2.";
}

//Triangulo isoceles
function alturaTriangulIsoceles (lado1, lado2, base) {
    debugger
    if (lado1 == lado2) {
        debugger
        const operacion = (lado1*lado1) - ((base/2)*(base/2));
        // return  Math.sqrt(operacion);
        debugger
        return Math.sqrt(operacion)
        
    } else {
        debugger
        return "NAN";
    }
}
function calcularAltura () {
    const input1 = document.getElementById("inputIsocelesL1");
    const lado1 = parseInt(input1.value);
    debugger
    const input2 = document.getElementById("inputIsocelesL2");
    const lado2 = parseInt(input2.value);
    debugger
    const inputB = document.getElementById("inputIsocelesB");
    const base = parseInt(inputB.value);
    debugger
    const altura = alturaTriangulIsoceles (lado1, lado2, base);
    debugger
    document.getElementById("alturaIsoceles").innerHTML = altura + " cm.";
}
